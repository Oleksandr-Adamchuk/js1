// JavaScript File
var Person = {};
function myFunction() {
var elements = document.getElementsByTagName("input");
console.log(elements);

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
alert ("Об'єкт створено");
                        /* Find object length */


 
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
    
}
var Person2 = Person;
console.log(Person2);
var obj_length = Object.keys(Person).length;
  function myTable() {
        var body = document.getElementsByTagName("body")[0];
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var row1 = document.createElement("tr");

           
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
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
           // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
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
      

            //row added to end of table body
            tblBody.appendChild(row1);
            tblBody.appendChild(row2);
   

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
    }




