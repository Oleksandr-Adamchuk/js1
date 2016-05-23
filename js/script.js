// JavaScript File
var Person = {};
function myFunction() {
var elements = document.getElementsByTagName("input");
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

    console.log(Person) ;
/*------- Функція перевірки коректеного e-mail ------*/
    function checkEmail(input) {
        var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (pattern.test(input) == false) {
            alert ("Введіть коректне значення адресу електронної пошти");
        }
    }
    checkEmail(document.getElementById("email").value); 
    
/*---- Функція перевірки коректеного року з дати народження ----*/
    function checkDate (input){
      var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
      if (!input.match(pattern))  {
         alert("Будь ласка введіть дату у форматі dd/mm/yyyy"); 
      };
      
      var date_value = input.split("/");
      
      if (date_value[2] < 1900 || date_value[2] > 2016) {
          document.getElementById("year").innerHTML = 
          "Рік народження може бути між 1900 та 2016"
      } 
    }
    checkDate(document.getElementById("date").value);
    document.getElementById("myForm").reset();
}


var obj_length = Object.keys(Person).length;
 function myTable() {
        var body = document.getElementsByTagName("body")[0];
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var row1 = document.createElement("tr");
            var cell = document.createElement("td");    
            var cellText = document.createTextNode("User Name"); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
            var cell = document.createElement("td");    
            var cellText = document.createTextNode("Surname "); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
                var cell = document.createElement("td");    
            var cellText = document.createTextNode("Date "); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
                var cell = document.createElement("td");    
            var cellText = document.createTextNode("Email "); 
                cell.appendChild(cellText);
                row1.appendChild(cell);
        
        var row2 = document.createElement("tr");
                var cell = document.createElement("td");    
            var cellText = document.createTextNode(Person.name); 
                cell.appendChild(cellText);
                row2.appendChild(cell);
            var cell = document.createElement("td");    
            var cellText = document.createTextNode(Person.surname); 
                cell.appendChild(cellText);
                row2.appendChild(cell);
                var cell = document.createElement("td");    
            var cellText = document.createTextNode(Person.date); 
                cell.appendChild(cellText);
                row2.appendChild(cell);
                var cell = document.createElement("td");    
            var cellText = document.createTextNode(Person.email); 
                cell.appendChild(cellText);
                row2.appendChild(cell);
            tblBody.appendChild(row1);
            tblBody.appendChild(row2);
           tbl.appendChild(tblBody);
        body.appendChild(tbl);
       
    }



