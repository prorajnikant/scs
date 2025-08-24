/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    id: {
      type: 'number',
      autoIncrement: true,
      unique: true
    },

    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },

    name: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 50
    },

    isActive: {
      type: 'boolean',
      defaultsTo: true
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗╔╗╔╔═╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗║║║╚═╗╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝╝╚╝╚═╝╚═╝

  },

};
