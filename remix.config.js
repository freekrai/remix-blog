const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");


/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  //serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
//  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  //serverBuildPath: "api/index.js",
//  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  future: {
    v2_routeConvention: true,
		v2_meta: true,
    unstable_tailwind: true,
	},
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },

};