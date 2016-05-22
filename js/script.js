// JavaScript File
function myFunction() {
var elements = document.getElementsByTagName("input");
console.log(elements);
var Person = {};
for (var i = 0; i < elements.length; i++) {
    if(elements[i].id == "name") {
        Person.name = elements[i].value;
    }
    if(elements[i].id == "surname") {
        Person.surname = elements[i].value;
    }
     if(elements[i].id == "date") {
        Person.date = elements[i].value;
    }
     if(elements[i].id == "email") {
        Person.email = elements[i].value;
    }

}    
console.log(Person);
 
 function validity() {
    var inpObj = document.getElementById("name");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    } 
}  
function checkDate (input){
  var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  if (!input.match(pattern))  {
     alert("Будь ласка введіть дату у форматі dd/mm/yyyy"); 
  };
  
  var date_value = input.split("/");
  
  if (date_value[2] < 1900 || date_value[2] > 2016) {
      alert ("Рік народження може бути між 1900 та 2016")
  } 
}
checkDate(document.getElementById("date").value);
    
}





