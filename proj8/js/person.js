/**
 * Created by akc on 8/29/16.
 */
var person= {
    "firstname": "Anish",
    "lastname": "KC",
    "dob": "1950/10/12",
    "age": "50",
    "address": "Esters",
    "email": "anish.kc@live.com"
};
//console.log(person);
console.log(person.firstname);//to see in console the first name
console.log(person.lastname);//to see in console the last name

    //document.getElementById("person").innerHTML="updated"
    //var htmlcontent="<h1>updated</h1>";
    var htmlcontent= "<table class= 'table table-striped table-hover table-bordered'>" +
        "<tr>"+
        "<th>firstname</th>"+
        "<td>"+person.firstname+"</td>"+
        "</tr>"
        +"<th>lastname</th>"+
        "<td>"+person.lastname+"</td>"+
        "</tr>"
        +"<th>dob</th>"+
        "<td>"+person.dob+"</td>"+
        "</tr>"
        +"<th>age</th>"+
        "<td>"+person.age+"</td>"+
        "<tr>"
        +"<th>address</th>"+
        "<td>"+person.address+"</td>"+
        "</tr>"
        +"<th>email</th>"+
        "<td>"+person.email+"</td>"+
        "</tr>"
        "</table>"

   // document.getElementById("person").innerHTML="<h1>updated</h1>";//now updated is changed into color with h1 tag as we have said in css the color is red.
    function loadperson(){
    document.getElementById("person").innerHTML=htmlcontent;
}
//loadperson();