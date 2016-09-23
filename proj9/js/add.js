/**
 * Created by akc on 9/2/16.
 */

var add=function () {
    // if we declare as var it will be private.
    var obj=this;
    var x;
    var y;
    this.obj=this;
    //this.z;//it will refer to immediate function
    this.setx=function(val){
        x=val;//public data member
        //obj.z=12;//this wont be access coz it will refer to function setx.

    }
    this.sety=function(val) {
        y=val;

    }
    this.getx=function () {
        return x;
    }
    this.gety=function () {
        return y;
    }
    this.addition=function () {
        return x+y;

    }
}//class is defined
//public=this
//private=var

console.log("hello world");//go to terminal and type node add.js



var obj1=new add();
//obj1.x=2;//we cant do that coz those are private

obj1.setx(2);
obj1.sety(3);

//for subtraction
obj1.sub=function () {
    return obj1.gety()-obj1.getx();

}
console.log(obj1.sub());
//console.log(obj2.sub());//cause we havent declared function of sub in obj2


console.log(obj1.addition());


var obj2=new add();
obj2.setx(4);
obj2.sety(6);
//console.log(obj2.getx());

add.prototype.mult=function () {
    return this.getx()*this.obj.gety();
}
console.log(obj1.mult());
console.log(obj2.mult());


//For weeekend
function login() {
    var credentials = [{
        'email': 'anish.kc@live.com',
        'password': 'xyz'
        },
        {
            'email': 'bnish.kc@live.com',
            'password': 'qyz'
        },
        {
            'email': 'anish.kc@live.com',
            'password': 'ryz'

        }];
}
this.validation = function () {
    var email=$('#email').val();
    var pass=$('#password').val();
    for (var i=0; i<credentials.length; i++){
        if(credentials[i].email== email && credentials[i].password==pass){

    }
    else {
        document.write("enter the correct credentials")
    }

}


/*

    var add=function () {
        // if we declare as var it will be private.
        var obj=this;
        var x;
        var y;
        this.obj=this;
        //this.z;//it will refer to immediate function
        this.setx=function(val){
            x=val;//public data member
            //obj.z=12;//this wont be access coz it will refer to function setx.
        }
        this.sety=function(val) {
            y=val;
        }
        this.getx=function () {
            return x;
        }
        this.gety=function () {
            return y;
        }
        this.addition=function () {
            return x+y;

        }
    }

    var obj1=new add();
    obj1.setx(2);
    console.log(obj1.getx());

    */

/*

var add=function()
{
var x;

this.setx=function(val)
{
x=val;
}
var obj1=new add();
obj1.setx(2);
console.log(obj1.getx());
}


var add=function()
{
var x;

this.setx=function(val)
{
x=val;
}


this.getx=function()
{
return x
}

var obj1= new add();
obj1.setx(2);
console.log(obj1.getx());


    */