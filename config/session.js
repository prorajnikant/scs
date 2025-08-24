/**
 * session.js
 *
 * Session configuration for Sails.js
 */

module.exports.session = {

  // Session secret is automatically generated in development.
  // In production, you should set this to a strong, random string.
  secret: process.env.SESSION_SECRET || 'your-super-secret-key-change-in-production',

  // Cookie settings
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  },

  // Session store (defaults to memory store)
  adapter: 'memory'

};
