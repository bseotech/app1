function validateForm(form) {
  var name = document.getElementById("frm_name"+form).value;
  var email = document.getElementById("frm_email"+form).value;
  var portfolio = document.getElementById("frm_portfolio"+form).value;
  var github = document.getElementById("frm_github"+form).value;
  var message = document.getElementById("frm_about"+form).value;

  var verified_email=false;

  if (name == "") {
	document.getElementById('error-frm_name'+form).innerHTML = " Please enter your name *";
  }else{
	  document.getElementById('error-frm_name'+form).innerHTML = "";
  }
  if (email == "") {
	document.getElementById('error-frm_email'+form).innerHTML = " Please enter your email *";
	verified_email = false;
  }else{
	  if(!validateEmail(email)){
		  document.getElementById('error-frm_email'+form).innerHTML = " Please enter valid email *";
		  verified_email = false;
	  }else{
	      document.getElementById('error-frm_email'+form).innerHTML = "";
			verified_email = true;
	  }
  }
  
  if (portfolio == "") {
	document.getElementById('error-frm_portfolio'+form).innerHTML = " Please enter portfolio link *";
  }else{
	  document.getElementById('error-frm_portfolio'+form).innerHTML = "";
  }
  
  
    if (github == "") {
	document.getElementById('error-frm_github'+form).innerHTML = " Please enter github link *";
  }else{
	  document.getElementById('error-frm_github'+form).innerHTML = "";
  }
  
  if (message == "") {
	document.getElementById('error-frm_about'+form).innerHTML = " Please enter description about you *";
  }else{
	  document.getElementById('error-frm_about'+form).innerHTML = "";
  }

	if (name != "" && email != "" && portfolio != "" && github != "" && message != "" &&  verified_email) {
		document.getElementById('form'+form).submit();
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

