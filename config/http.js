/**
 * http.js
 *
 * Configuration for the HTTP server
 */

module.exports.http = {

  middleware: {

    // The order in which middleware should be run for HTTP requests.
    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon'
    ],

    // The body parser that will handle incoming multipart HTTP requests.
    bodyParser: (function() {
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true,
        limit: '10mb'
      });
      return middlewareFn;
    })(),

    // Custom middleware
    $custom: function(req, res, next) {
      // Add security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      
      // Add CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      next();
    }

  }

};
