
console.log("hello");

$(document).ready(function(){
    jQuery.validator.addMethod("noSpace", function(value, element) { 
        return value == '' || value.trim().length != 0;  
      }, "No space please and don't leave it empty");
  
    $("#form").validate({
      rules:{
        Fname:{
          required:true,
          minlength:4,
          noSpace:true
        },
        Lname:{
            required:true,
            minlength:4,
            noSpace:true
          
        },
       Message:{
          required:true,
          minlength:50
        }
      
      },
        messages:{
         Name:{
          required:"enter the name ",
          minlength:"should enter atleast 4 characters"
         },
        Message:{
          required:"fill the text area"
         }
  
  
         
        },
        highlight: function (element) {
                  $(element).parent().addClass('error')
              },
              unhighlight: function (element) {
                  $(element).parent().removeClass('error')
              }
    })
  })