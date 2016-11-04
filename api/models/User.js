/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstName : { type: 'string' },

    lastName : { type: 'string' },

    email : { type: 'string' },

    password : { type: 'string' },

    username : {
      type: 'string' ,
      unique: true
    },

    headline : { type: 'string' },

    description : { type: 'string' },

    messages: {
      collection: 'message',
      via: 'userId'
    },

    links: {
      collection: 'link',
      via: 'userId'
    },

    services: {
      collection: 'service',
      via: 'userId'
    },

    skills: {
      collection: 'skill',
      via: 'userId'
    }

  }
};

