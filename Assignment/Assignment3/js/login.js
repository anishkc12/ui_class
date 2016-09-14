/**
 * Created by akc on 9/2/16.
 */

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
            'email': 'cnish.kc@live.com',
            'password': 'ryz'

        }];


//this.validation = function () {

    var authenticate = false;
    var email = $('#email').val();
    var pass = $('#password').val();
  //  console.log(credentials.length);
    for (var i = 0; i < credentials.length; i++) {

        //console.log(credentials[i].email+" -->"+credentials[i].password );
        if (credentials[i].email == email && credentials[i].password == pass) {

            alert('you are logged in');
            authenticate = true;
            window.open('/ui_class/Assignment/Assignment3/views/Index.html');
            window.close();
            opener.location.href = "/ui_class/Assignment/Assignment3/views/Index.html";
            break;
        }


    //}
}

    if(authenticate==false){
        alert("For exciting deals let's register our account with CS");


    }

}


/*

var add=function()
{
var x;

this.setx=function(val)
{
x=val;
}
this.getx=function()
{
return x;
}
}

 var obj1=new add();
 obj1.setx(2);
 console.log(getx());

 function login()
 {
 var credentials=[{
 'email': 'anish.kc@live.com'
 'password': 'xyz'


 }];

 var authentication =false;
 var email=$(#email).val();
 var password=$(#password).val();

 for (i=0; i<credintials.length;i++)
 {
 if (credentials[i].email==email && credentials[i].password=pass)
 {
 alert('your are logged in);
 authentication = true;
 window.open('\file path');
 window.close();
 open.location.href('\file path');
 break;
}
if (authentication==false)
{
alert('register your account);
}
 }


 */
