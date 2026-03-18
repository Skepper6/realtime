const fs = require("fs");
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");

const rawArgs = process.argv.slice(2);
const lockFilePath = path.join(process.cwd(), ".next-dev-server.json");

function readPortArg(args) {
	for (let index = 0; index < args.length; index += 1) {
		const current = args[index];

		if ((current === "--port" || current === "-p") && args[index + 1]) {
			return Number(args[index + 1]);
		}

		if (current.startsWith("--port=")) {
			return Number(current.split("=")[1]);
		}
	}

	return undefined;
}

function stripPortArgs(args) {
	const cleanedArgs = [];

	for (let index = 0; index < args.length; index += 1) {
		const current = args[index];

		if (current === "--port" || current === "-p") {
			index += 1;
			continue;
		}

		if (current.startsWith("--port=")) {
			continue;
		}

		cleanedArgs.push(current);
	}

	return cleanedArgs;
}

function isProcessAlive(pid) {
	try {
		process.kill(pid, 0);
		return true;
	} catch {
		return false;
	}
}

function readServerLock() {
	if (!fs.existsSync(lockFilePath)) {
		return null;
	}

	try {
		const lockData = JSON.parse(fs.readFileSync(lockFilePath, "utf8"));

		if (lockData?.pid && isProcessAlive(lockData.pid)) {
			return lockData;
		}
	} catch {}

	try {
		fs.unlinkSync(lockFilePath);
	} catch {}

	return null;
}

function writeServerLock(lockData) {
	fs.writeFileSync(lockFilePath, JSON.stringify(lockData, null, 2));
}

function clearServerLock() {
	try {
		if (fs.existsSync(lockFilePath)) {
			fs.unlinkSync(lockFilePath);
		}
	} catch {}
}

function isPortFree(port) {
	return new Promise(resolve => {
		const server = net.createServer();

		server.unref();
		server.once("error", () => resolve(false));
		server.listen(port, () => {
			server.close(() => resolve(true));
		});
	});
}

async function findFreePort(startPort) {
	for (let port = startPort; port < startPort + 20; port += 1) {
		if (await isPortFree(port)) {
			return port;
		}
	}

	throw new Error(`Could not find a free port starting from ${startPort}.`);
}

async function main() {
	const runningServer = readServerLock();

	if (runningServer) {
		console.log(
			`Dev server already running on http://localhost:${runningServer.port} (PID ${runningServer.pid}).`
		);
		return;
	}

	const requestedPort = readPortArg(rawArgs) || Number(process.env.PORT) || 3000;
	const nextArgs = stripPortArgs(rawArgs);
	const port = await findFreePort(requestedPort);
	const distDir = `.next-dev-${port}`;
	const nextBin = require.resolve("next/dist/bin/next");

	process.env.PORT = String(port);
	process.env.NEXT_DIST_DIR = distDir;

	if (port !== requestedPort) {
		console.log(
			`Port ${requestedPort} is busy, starting Next.js on ${port} with cache folder ${distDir}.`
		);
	}

	const child = spawn(
		process.execPath,
		[nextBin, "dev", "-p", String(port), ...nextArgs],
		{
			cwd: process.cwd(),
			env: process.env,
			stdio: "inherit",
		}
	);

	writeServerLock({
		pid: child.pid,
		port,
		distDir,
	});

	["SIGINT", "SIGTERM"].forEach(signal => {
		process.on(signal, () => {
			if (!child.killed) {
				child.kill(signal);
			}
		});
	});

	child.on("exit", code => {
		clearServerLock();
		process.exit(code ?? 0);
	});

	child.on("error", error => {
		clearServerLock();
		console.error(error);
		process.exit(1);
	});
}

main().catch(error => {
	console.error(error);
	process.exit(1);
});
