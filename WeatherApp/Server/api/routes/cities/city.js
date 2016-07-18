var express = require('express');
var router = express.Router();
var City = require('../../../models/cities/city');
var app = express();

      router.route('/cities/add/')
        .post(function(req, res) {
              var city = new City(req.body);
              city.save(function(err) {
                  if (err)
                      res.send(err);
                  res.json({ message: 'City added!' });
                    });
                  });

      router.route('/cities/render/')
        .get(function(req,res){
          City.find({}, function (err, cities) {
            res.json(cities);
          })

        });

    module.exports= router;
