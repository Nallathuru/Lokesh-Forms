function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
  
    var isValid = true;
  
    // Username validation
    if (username === "") {
      usernameError.innerHTML = "Username is required.";
      isValid = false;
    } else {
      usernameError.innerHTML = "";
    }
  
    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.innerHTML = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.innerHTML = "Invalid email format.";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }
  
    // Password validation
    if (password === "") {
      passwordError.innerHTML = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.innerHTML = "Password must be at least 6 characters long.";
      isValid = false;
    } else {
      passwordError.innerHTML = "";
    }
  
    // Confirm password validation
    if (confirmPassword === "") {
      confirmPasswordError.innerHTML = "Please confirm your password.";
      isValid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordError.innerHTML = "Passwords do not match.";
      isValid = false;
    } else {
      confirmPasswordError.innerHTML = "";
    }
  
    return isValid;

  }