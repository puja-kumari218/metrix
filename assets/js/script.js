 // Toggle password visibility
 const togglePassword = document.getElementById("togglePassword");
 const password = document.getElementById("password");

 togglePassword.addEventListener("click", function() {
     // Toggle the type attribute
     const type = password.type === "password" ? "text" : "password";
     password.type = type;
     // Toggle the eye icon
     this.classList.toggle("fa-eye-slash");
     this.classList.toggle("fa-eye");
 });


 