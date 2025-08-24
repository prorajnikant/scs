/**
 * blueprints.js
 *
 * For background on the blueprints API in Sails, check out:
 * https://sailsjs.com/docs/reference/blueprint-api
 */

module.exports.blueprints = {

  // Automatically expose implicit routes for every action in your app?
  actions: false,

  // Automatically expose RESTful routes for your models?
  rest: false,

  // Automatically expose CRUD "shortcut" routes to GET requests?
  // (These are enabled by default in development only.)
  shortcuts: false,

  // Parse the blueprint route and query string to build any data
  // that will be passed to the controller action via `req.options`.
  parseBlueprintOptions: function(req) {

    // Get the default query options.
    var queryOptions = req._sails.hooks.blueprints.parseBlueprintOptions(req);

    // If this is the "find" or "populate" blueprint action, and the normal query options
    // indicate that an unlimited number of records should be returned, we'll impose a limit.
    // This protects against accidentally triggering an OOM error when we have
    // one of our auto-created JSON routes that are meant for use in the frontend.
    if (req.options.blueprintAction === 'find' || (req.options.blueprintAction === 'populate' && req.options.blueprintAction !== 'update')) {
      queryOptions.limit = queryOptions.limit || 30;
    }

    return queryOptions;
  }

};
