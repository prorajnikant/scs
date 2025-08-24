/**
 * datastore.js
 *
 * A set of functions that help you abstract over the data layer.
 * i.e. if you want to use a different database (or different version of the same database),
 * you can put your database-specific code here.
 */

module.exports.datastore = {

  default: {
    adapter: 'sails-disk',
    inMemory: true
  },

  // For production, you might want to use a real database
  // Uncomment and configure as needed:
  /*
  production: {
    adapter: 'sails-postgresql',
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  }
  */

};
