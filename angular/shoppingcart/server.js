/**
 * Created by akc on 9/6/16.
 */

var express=require("express");
var app=express();

var bodyParser = require('body-parser');
var mysql=require("mysql");
var connection =require('express-myconnection');

app.use(bodyParser.json());// to support json
app.use(bodyParser.urlencoded({ extended: true }));//to support

app.use(express.static(__dirname + '/'));
console.log("static files initialized..");

app.use(connection(mysql, {
    host: 'localhost',
    user: 'ui',
    password: 'ui1234',
    database: 'shoppingcart'
},'request'));

app.get("/service/customer",function (req,res,next) {
    var ids=[];

    var query ="SELECT * FROM customer";
        req.getConnection(function (err,connection) {
            if(err) return next(err);

            connection.query(query,ids,function (err,results) {
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }
                res.json(results);

            });
        });
});



app.get("/service/customer/customerid",function (req,res,next) {
    var ids=[];
    var customerid=req.params.employeeid;
    ids.push(customerid);
    var query ="SELECT * FROM customer where employeeid= ?";
    req.getConnection(function (err,connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err,results) {
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });
    });
});


//setting up the static filed for hosting
app.use(express.static(__dirname + '/'));//create shopping cart as a root

//routing
app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});

app.get('/home', function(req, res){
    res.redirect('/views/home.html');
});

app.get('/game', function(req, res){
    res.redirect('/views/game.html');
});

app.get('/electronics', function(req, res){
    res.redirect('/views/electronics.html');
});
app.get('/landing', function(req, res){
    res.send('In landing page');
});

//end of routing
//launching app on local host:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
    });

/*
mysql
CREATE SCHEMA `shoppingcart` ;

 CREATE TABLE `shoppingcart`.`customer` (
 `employeeid` INT NOT NULL AUTO_INCREMENT,
 `firstname` VARCHAR(20) NOT NULL,
 `lastname` VARCHAR(20) NULL,
 `address` VARCHAR(15) NULL,
 `city` VARCHAR(10) NULL,
 `zipcode` VARCHAR(5) NULL,
 `email` VARCHAR(20) NULL,
 `phoneno` VARCHAR(10) NULL,
 PRIMARY KEY (`employeeid`),
 UNIQUE INDEX `employeeid_UNIQUE` (`employeeid` ASC));

 INSERT INTO `shoppingcart`.`customer` (`firstname`, `lastname`, `address`, `city`, `zipcode`, `email`, `phoneno`) VALUES ('john', 'doe', 'texas', 'irving', '75038', 'akc@eiu.edu', '3122030693');
 INSERT INTO `shoppingcart`.`customer` (`firstname`, `lastname`, `address`, `city`, `zipcode`, `email`, `phoneno`) VALUES ('drona', 'baral', 'boston', 'dallas', '12345', 'qwe@eiu.edu', '1234567892');


 */


