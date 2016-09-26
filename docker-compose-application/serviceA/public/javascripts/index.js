$(document).ready(function(){
    console.log('It works!');
    $('.request').click(function(){
      
    $.get("/call", function(data, status){

      document.getElementById("response").innerHTML = data;
      console.log("Data: " + data + "\nStatus: " + status);
    });
  });
});
