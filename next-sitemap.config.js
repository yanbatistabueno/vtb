const url = "https://www.vtb.com.br";

module.exports = {
  siteUrl: url,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/api" },
      { userAgent: "*", allow: "/" },
    ],
  },
  // ...other options
  exclude: ["/api"],
};
