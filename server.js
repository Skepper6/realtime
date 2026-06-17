const http = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const hostname = "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);

const app = next({
	dev,
	dir: __dirname,
	hostname,
	port,
});
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		http
			.createServer((req, res) => {
				const parsedUrl = parse(req.url, true);
				handle(req, res, parsedUrl);
			})
			.listen(port, hostname, () => {
				console.log(`> Ready on http://${hostname}:${port}`);
			});
	})
	.catch(error => {
		console.error("Failed to start Next.js server.", error);
		process.exit(1);
	});
