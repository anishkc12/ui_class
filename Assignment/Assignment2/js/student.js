/**
 * Created by akc on 8/30/16.
 */


var person_array=[];

function addperson(event)
{
    event.preventDefault();

    var gender = "";
    var radios = document.getElementsByName('gender'); // selects gender
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }
    var person = {
        "firstName" : document.getElementById('fname').value,
        "lastName" : document.getElementById('lname').value,
        "gender" : gender,
        "address" : document.getElementById('address').value,
        "STATES" : document.getElementById('states').value,
        "Countries" : document.getElementById('countries').value,
        "phonenumber" : document.getElementById('phoneno').value

    };

    person_array.push(person);
    console.log(person_array);
}


function traverseArray(event) {
    event.preventDefault();
    var htmlContents = "<table class='table table-bordered table-hover table-striped'>" +
        "<tr>"
        + "<th>Name</th>"
        + "<th>Gender</th>"
        + "<th>Address</th>"
        + "<th>States</th>"
        + "<th>Countries</th>"
        + "<th>Phone Number</th>" +

        "</tr>";

    for (var i = 0; i < person_array.length; i++) {
        htmlContents += '<tr><td>' + person_array[i].lastName+ '' + person_array[i].firstName + '</td>';
        htmlContents += '<td>' + person_array[i].gender+ '</td>';
        htmlContents += '<td>' + person_array[i].address + '</td>';
        htmlContents += '<td>' + person_array[i].STATES+ '</td>';
        htmlContents += '<td>' + person_array[i].Countries + '</td>';
        htmlContents += '<td>' + person_array[i].phonenumber + '</td>';

        htmlContents += '</tr>';

    }

    htmlContents += '</table>';
   // document.getElementById('a1').innerHTML = htmlContents;
    $('#a1').html(htmlContents); //'#a1:selector,jquery syntax and same result.

}

// $(document).ready(function(){
//     $('#btn1').click(function () {//associates button id with click event
//         alert("hello world");
//         addperson(event);
//
//     });
// });


$(document).ready(function(){
$('#btn1').on('click', function () {//click:single click, dblclick:double click
    alert("hello world");

});
    $('#first').hide();//hides the element.
    $('#second').hide();
    $('#firstbtn').on('click',function () {
        $('#first').show();
    });

    $('#secondbtn').on('click',function () {
        $('#second').show();
    });

    $('#thirdbtn').on('click',function () {
        $('#firstbtn').trigger('click');
        $('#secondbtn').trigger('click');


    });
});



