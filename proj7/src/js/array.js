/**
 * Created by akc on 8/26/16.
 */

var samplearray = ["cat", "dog", "monkey"];

console.log(samplearray[2]);

samplearray[3]="donkey";//too add 3rd index in samplearray

console.log(samplearray);

console.log("length of array" + samplearray.length);//to determine the length of array

console.log("length of array" + findLength(samplearray));

samplearray.push("chimp");
//console.log(samplearray);

traverseArray(samplearray);
/*for(var i=0;i<samplearray.length; i++)
{
    document.write(i+" ) " + samplearray[i]+"<br>");//create in list format
}
    */