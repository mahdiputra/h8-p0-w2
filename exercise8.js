
//soal no 1
function shoutOut()
{
    return("Halo Function!");
}

console.log(shoutOut())



//soal no 2
function calculateMultiply()
{
    return num1 * num2 ;
}

var num1 = 5 ;
var num2 = 6 ;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);



//soal no 3
function processSentence(name,age,address,hobby)
{
  return('nama saya '+ name + ', umur saya ' + age + ' alamat saya ' + address + ', hobi saya '+ hobby);
}



var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
