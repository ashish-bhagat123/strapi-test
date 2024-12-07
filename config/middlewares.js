module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Enable the download of the Monaco editor
          // from cdn.jsdelivr.net.
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '35mb',
      formLimit: '15mb',
      textLimit: '256kb',
      encoding: 'utf-8',
    },
  },
];
