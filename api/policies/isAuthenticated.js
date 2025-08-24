/**
 * isAuthenticated.js
 *
 * @description :: Policy to check if user is authenticated
 * @help        :: See http://sailsjs.com/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, proceed) {

  // If `req.me` is set, then we know the user is authenticated.
  if (req.me) {
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.unauthorized();

};
