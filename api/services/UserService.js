/**
 * UserService.js
 *
 * @description :: A service for user-related operations
 */

module.exports = {

  /**
   * Create a new user
   * @param {Object} userData - User data
   * @returns {Promise<Object>} Created user
   */
  createUser: async function(userData) {
    try {
      const user = await User.create(userData).fetch();
      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Find all active users
   * @returns {Promise<Array>} Array of active users
   */
  findActiveUsers: async function() {
    try {
      const users = await User.find({ isActive: true });
      return users;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Find user by email
   * @param {string} email - User email
   * @returns {Promise<Object>} User object
   */
  findByEmail: async function(email) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      throw error;
    }
  }

};
