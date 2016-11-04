/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    var b = req.body;

    User.findOneByUsername(req.param('username')).exec(function(err, userData){
      if(err){
        return res.serverError(err);
      }
      if(!userData){
        return res.notFound("User not found.")
      }

      Service.create({
        name : b.name,

        description : b.description,

        userId: userData.id
      })
        .exec(function(err, serviceData){
          if(err){
            return res.serverError(err);
          }
          return res.redirect("/users/byUsername?username=" + userData.username)
        })

    })
  },

  update: function(req, res){
    Service.update({
      id: req.param(id)
    })

  }


};

