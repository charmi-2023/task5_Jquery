$(document).ready(function() {
    
    // Name field events
    $("#name").on('blur', function() {
      let name = $("#name").val();
  
      if (name == "") {
        $("#name-error").text("Name should not be empty");
      } else {
        $("#name-error").text("").hide();
      }
    });
  
    $("#name").on('focus', function() {
      $("#name-error").text("");
    });
  
    // Email field events
    $("#email").on('blur', function() {
        let email = $("#email").val();
    
        if (email == "") {
          $("#email-error").text("Email should not be empty");
       
        } else if (!isValidEmail(email)) {
          $("#email-error").text("Invalid email format");
       
        } else {
          $("#email-error").text("").hide();
       
        }
      });
    
      $("#email").on('focus', function() {
        $("#email-error").text("");
      });
  
    // Password field events
    $("#password").on('blur', function() {
        let password = $("#password").val();
    
        if (password == "") {
          $("#password-error").text("Password should not be empty");
     
        } else if (password.length < 5) {
          $("#password-error").text("Password should be at least 5 characters long");
          
        } else {
          $("#password-error").text("").hide();
         
        }
      });
    
      $("#password").on('focus', function() {
        $("#password-error").text("");
      });
  
    // Confirm Password field events
    $("#confirm-password").on('blur', function() {
        let confirmPassword = $("#confirm-password").val();
        let password = $("#password").val();
    
        if (confirmPassword == "") {
          $("#confirm-password-error").text("Confirm Password should not be empty");
         
        } else if (confirmPassword !== password) {
          $("#confirm-password-error").text("Passwords do not match");
          
        } else {
          $("#confirm-password-error").text("").hide();
      
        }
      });
    
      $("#confirm-password").on('focus', function() {
        $("#confirm-password-error").text("");
      });
  
    // Phone field events
    $("#phone").on('blur', function() {
        let phone = $("#phone").val();
    
        if (phone == "") {
          $("#phone-error").text("Phone should not be empty");
      
        } else if (!isValidPhone(phone)) {
          $("#phone-error").text("Invalid phone number format");
         
        } else {
          $("#phone-error").text("").hide();
                                
        }
      });
    
      $("#phone").on('focus', function() {
        $("#phone-error").text("");
      });
  


      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    
      function isValidPhone(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      }


    // Form submission event
    $("#registration-form").on('submit', function(event) {
      event.preventDefault(); 
  
     
      $("#message").text("Form submitted successfully!");
    });
  

 
  });
  
