'use strict'
var Nerd = require('./models/nerd');
var contact = require('./models/contact');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.post('/api/login', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                for(let val of nerds){
                    console.log(val)
                    if(val.name == req.body.name && val.password == req.body.password){
                        res.send("success");        
                    }
                }
                
                //res.json(nerds); // return all nerds in JSON format
            });
        });
        app.post('/api/nerds',function(req,res){
            console.log(req.body);
            
            var user = new Nerd({name:req.body.fname+" "+req.body.lname,password:req.body.password});
            Nerd.find({name:req.body.username}).
            where('name').equals(req.body.username).
            exec(function(err,docs){
                console.log(docs)
            })
            user.save(function(err){
                if(err){
                    res.send("invalid");
                }
                res.send("Sucess");
            })
        });
        app.post('/api/contact',function(req,res){
            console.log(req)
            var conta = new contact({name:req.body.name,email:req.body.email});
            conta.save(function(err){
                if(err){
                    res.send("invalid");
                }
                res.send("Sucess");
            })
        })

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        
    };