// this is real code 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },

  experimental: {
    // THIS disables the red devtools indicator
    // reactDevtools: false,
  },
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
};

export default nextConfig;


//************** upadted code ************** to push cpanel //
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true,

//   // Hosting under https://theskepper.com/real/
//   basePath: "/real",
//   assetPrefix: "/real/",

//   images: {
//     unoptimized: true,
//   },

//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   reactStrictMode: false,
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production"; // build/export time

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true,

//   // ✅ Only use /real on production export
//   basePath: isProd ? "/real" : "",
//   assetPrefix: isProd ? "/real/" : "",

//   images: { unoptimized: true },

//   eslint: { ignoreDuringBuilds: true },
//   reactStrictMode: false,
// };

// export default nextConfig;
