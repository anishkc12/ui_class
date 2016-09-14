/**
 * Created by akc on 8/30/16.
 */


var person_array=[];

function addperson(event)
{
    event.preventDefault();

    var gender = "";
    var radios = document.getElementsByName('gender'); // selects gender
    var checkeditem=false;
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked) {
            gender = radios[i].value;
            checkeditem=true;
            break;
        }
    }
if (checkeditem==false)//validate the gender
{
    $('#lblgender').addClass('error');
    $('#gender1').html('select gender');

}
else

    {
        $('#lblgender').removeClass('error');
        $('#gender1').html('');

    }
    //this is how to read the value in the text box, basically we assign the variable to the value of an element got by id.
    var first_name=$('#fname').val();
    if(first_name.length==0){
    $('#lblfirstname').addClass('error');
    $('#fname1').html('Firstname cant be empty').addClass('error')//we just added .addclass for css style

    }
    else {

    $('#lblfirstname').removeClass('error').removeClass('error');
    $('#fname1').html('');

    }


    var last_name=$('#lname').val();

    if(last_name.length==0){
        $('#lblsecondname').addClass('error');
        $('#lname2').html('lastname cant be empty');

    }
    else {

        $('#lblsecondname').removeClass('error');
        $('#lname2').html('');

    }


    var address=$('#address').val();
    if(address.length==0){
        $('#lbladdress').addClass('error');
        $('#address1').html('address cant be empty');

    }
    else {

        $('#lbladdress').removeClass('error');
        $('#address1').html('');

    }

    var lblphoneno=$('#phoneno').val();
    if(lblphoneno.length==0)
    {
        $('#lblphoneno').addClass('error');
        $('#phoneno1').html('input your cell number');
    }
    else
    {
        $('#lblphoneno').remove('error');
        $('#phoneno1').html('');
    }

    var lblcountries=$('#countries').val();
    if(lblcountries.length==0)
    {
        $('#lblcountries').addClass('error');
        $('#countries1').html('input your country');
    }
    else
    {
        $('#lblcountries').remove('error');
        $('#countries1').html('');
    }

    var lblstates=$('#states').val();
    if(lblstates.length==0)
    {
        $('#lblstates').addClass('error');
        $('#states1').html('input your states');
    }
    else
    {
        $('#lblstates').remove('error');
        $('#states1').html('');
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
//
$(document).ready(function () {
    $('#fname').on('blur',function () {
        var first_name=$('#fname').val();
        if(first_name.length==0){
            $('#lblfirstname').addClass('error');
            $('#fname1').html('Firstname cant be empty').addClass('error')//we just added .addclass for css style

        }
        else {

            $('#lblfirstname').removeClass('error').removeClass('error');
            $('#fname1').html('');

        }

    });
});

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

//adding class and then remove it. since css says it
$(document).ready(function () {
$('#fourthbtn').click(function () {
    $('#lblfirstname').addClass('error');
});
});

$(document).ready(function () {
    $('#fifthbtn').click(function () {
        $('#lblfirstname').removeClass('error');

    });

});

//adding value
// $('#fname').val("ram");


