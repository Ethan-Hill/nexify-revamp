const withPWA = require("next-pwa")

const settings = {
  functions: {
    "api/auth/[...nextauth]": {
      maxDuration: 30,
    },
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
    register: true,
    scope: "/",
    publicExcludes: ["!robots.txt", "!sitemap.xml.gz"],
  },
}

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings)
