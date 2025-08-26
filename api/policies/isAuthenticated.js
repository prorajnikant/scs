/**
 * isAuthenticated.js
 *
 * @description :: Policy to check if user is authenticated
 * @help        :: See http://sailsjs.com/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, proceed) {

  // If `req.me` is set, then we know the user is authenticated.
  if (req.me) {
    var abc = "PMAK-68ade9ccc4aaa50001e59f7c-6d05621ceaa049ff95f4df60e71d33c590";
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in user.
  return res.unauthorized();

};
