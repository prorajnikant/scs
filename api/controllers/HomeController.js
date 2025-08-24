/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/controllers
 */

module.exports = {
  
  /**
   * `HomeController.index()`
   */
  index: async function (req, res) {
    // If the request wants JSON, return JSON
    if (req.wantsJSON) {
      return res.json({
        message: 'Welcome to SCS Sails App!',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        environment: req._sails.config.environment
      });
    }
    
    // Otherwise, serve the homepage view
    return res.view('homepage', {
      environment: req._sails.config.environment
    });
  },

  /**
   * `HomeController.health()`
   */
  health: async function (req, res) {
    return res.json({
      status: 'healthy',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    });
  }

};
