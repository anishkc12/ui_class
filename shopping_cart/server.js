/**
 * Created by Reziko on 9/6/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended:true
}));

//Hosting static files
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");

//create Sql Connection
app.use(connection(mysql,{
    host   : 'localhost',
    user   : 'ui',
    password: 'ui1234',
    database: 'shoppingcart',
},'request'));

//Routing
//this is routing but to connect the rest API with our database
//var url = "/service/inventory_type";


app.get("/service/inventory_type",function(req, res, next){
    //arrays to store dynamic parameters


    var query = "SELECT * FROM inventory_type";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
            console.log(results);

        });


    });


});

app.get("/service/inventory",function(req, res, next){
    //arrays to store dynamic parameters


    var query = "SELECT * FROM inventory";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
            console.log(results);

        });


    });

});


app.get('/service/inventory_type/:id',function(req, res, next){
    //arrays to store dynamic parameters

    var ids = [];
    var idv = req.params.id;
    ids.push(idv);

    var query = "SELECT * FROM inventory_type WHERE id = ?";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, ids, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
            console.log(results);

        });


    });


});

//routing
app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});

//End of routing

//launching application on localhost.
app.listen(8080, function(){
    console.log('server loaded on port 8080');

});