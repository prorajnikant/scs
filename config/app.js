/**
 * Application configuration/settings for Sails.js
 */

module.exports.app = {

  // Port this app will run on
  port: process.env.PORT || 1337,

  // Host this app will run on
  host: process.env.HOST || '0.0.0.0',

  // Environment
  environment: process.env.NODE_ENV || 'development',

  // Custom app settings
  appName: 'SCS Sails App',

  // Secret for sessions
  secret: process.env.SESSION_SECRET || 'your-super-secret-key-change-in-production',

  // Log level
  log: {
    level: process.env.LOG_LEVEL || 'info'
  },

  // CORS settings
  cors: {
    allRoutes: true,
    allowOrigins: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'],
    allowCredentials: true,
    allowRequestHeaders: 'content-type, authorization'
  },

  // Security settings
  security: {
    csrf: false
  },

  // Session settings
  session: {
    secret: process.env.SESSION_SECRET || 'your-super-secret-key-change-in-production',
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  },

  // Socket settings
  sockets: {
    onlyAllowOrigins: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000']
  }

};
