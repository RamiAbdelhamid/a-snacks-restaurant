
// select
const form = document.getElementById("userForm");
const output = document.getElementById("output");

// addeventlister
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // select
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
   var ele2 = document.getElementsByName("orderOptions");

var ele = document.getElementsByName("orderType");




// orderOptions

 for (i = 0; i < ele2.length; i++) {
   if (ele2[i].checked);

     var elee2= ele2[i].value;


 }


// orderType 
    for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
     var elee = ele[i].value;
  }



 



  // output
  output.innerHTML = `Name: ${name} <br><br> Age: ${age} <br><br> Gender: ${gender} <br><br>  Order Type: ${elee} 
  
  Order Option: ${elee2} `;
});

