function validateForm() {
  var name = document.getElementById("frm_name").value;
  var email = document.getElementById("frm_email").value;
  var subject = document.getElementById("frm_subject").value;
  var message = document.getElementById("frm_message").value;

  var verified_email=false;
  
  if (name == "") {
	document.getElementById('error-frm_name').innerHTML = " Please enter your name *";
  }else{
	  document.getElementById('error-frm_name').innerHTML = "";
  }
  if (email == "") {
	document.getElementById('error-frm_email').innerHTML = " Please enter your email *";
	verified_email = false;
  }else{
	  if(!validateEmail(email)){
		  document.getElementById('error-frm_email').innerHTML = " Please enter valid email *";
		  verified_email = false;
	  }else{
	      document.getElementById('error-frm_email').innerHTML = "";
			verified_email = true;
			
			/*
		  if(validatePersonalEmail(email)){
			  document.getElementById('error-frm_email').innerHTML = " Please Enter Bussiness Email *";
			  verified_email = false;
		  }else{
			document.getElementById('error-frm_email').innerHTML = "";
			verified_email = true;
		  }*/
	  }
  }
  if (subject == "") {
	document.getElementById('error-frm_subject').innerHTML = " Please enter subject *";
  }else{
	  document.getElementById('error-frm_subject').innerHTML = "";
  }
  
  if (message == "") {
	document.getElementById('error-frm_message').innerHTML = " Please enter message *";
  }else{
	  document.getElementById('error-frm_message').innerHTML = "";
  }

	if (name != "" && email != "" && subject != "" && message != "" &&  verified_email) {
		document.getElementById('contact-form').submit();
		return true;
	}
	return false;
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
function validatePersonalEmail(email){
	return (/(@gmail|@yahoo|@hotmail|@outlook|@aol|@protonmail|@zylker|@icloud|@test.com|@gmx.com)/i.test(email));
}

