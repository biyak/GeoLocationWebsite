<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../additional_files/registrationPage.css" >
    <script type="text/javascript" src="../additional_files/validateRegistrationForm.js"></script>
    <title>
      Registration Form
    </title>
  </head>
  <body>
    <?php include 'header.php' ?>
    <!--the outer most container of the form, multiple div class to make the styling easier to set-->
    <div class="body-content">
      <div class="container-box">
        <div class="auth-form">
          <p class="title-form">Account Registration</p>
          <form action="registration" method="post" name="RegistrationForm" onsubmit="return validateForm()">
            <div class="input-wrap">
              <label class="field-validation-error" id="error_msg_fn">This field is required.</label>
              <input type="text" class="rf-input fname-input" name="firstname" placeholder="First name" onblur="validateFirstName()">
              <label class="rf-label fname-label">First name</label>
            </div>
            <div class="input-wrap">
              <label class="field-validation-error" id="error_msg_ln">This field is required.</label>
              <input type="text" class="rf-input lname-input" name="lastname" placeholder="Last name" onblur="validateLastName()">
              <label class="rf-label lname-label">Last name</label>
            </div>
            <div class="input-wrap">
              <label class="field-validation-error" id="error_msg_email">Please enter a valid email address.</label>
              <input type="email" class="rf-input email-input" name="email" placeholder="example@example.com" onblur="validateEmail()">
              <label class="rf-label email-label">Email address</label>
            </div>
            <div class="input-wrap">
              <label class="field-validation-error" id="error_msg_psw">Must be at least 8 characters long.</label>
              <input type="password" class="rf-input psw-input" name="usrpsw" placeholder="Password" onblur="validatePassword()">
              <label class="rf-label password-label">Password</label>
            </div>
            <span class="register-legal">By continuing you confirm that you agree to the Terms of Use and confirm that you have read the Privacy Policy.</span>
            <input type="submit" name="register" value="register">
          </form>
        </div>
      </div>
    </div>
	<?php include 'footer.php' ?>
  </body>
</html>