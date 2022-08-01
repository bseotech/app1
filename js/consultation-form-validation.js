function validateForm() {
  var name = document.getElementById("frm_name").value;
  var phone = document.getElementById("frm_phone").value;
  var email = document.getElementById("frm_email").value;
  var service = document.getElementById("frm_service").value;
  var companyname = document.getElementById("frm_companyname").value;
  var companysize = document.getElementById("frm_companysize").value;
  var budget = document.getElementById("frm_budget").value;
  //var service = document.getElementsByClassName("choices__input").value;
  /*
  
  var marketing_budget_c = document.getElementById("marketing_budget_c");
  marketing_budget_c = marketing_budget_c.options[marketing_budget_c.selectedIndex].value;
  var business_category_c = document.getElementById("business_category_c");
  business_category_c = business_category_c.options[business_category_c.selectedIndex].value;
  */
  var verified_email=false;
  
  if (name == "") {
	document.getElementById('error-frm_name').innerHTML = " Please enter your name *";
  }else{
	  document.getElementById('error-frm_name').innerHTML = "";
  }
  if (phone == "") {
	document.getElementById('error-frm_phone').innerHTML = " Please enter your phone number *";
  }else{
	  document.getElementById('error-frm_phone').innerHTML = "";
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
  if (companysize == "") {
	document.getElementById('error-frm_companysize').innerHTML = " Please select company size *";
  }else{
	  document.getElementById('error-frm_companysize').innerHTML = "";
  }
  
  if (budget == "") {
	document.getElementById('error-frm_budget').innerHTML = " Please select budget *";
  }else{
	  document.getElementById('error-frm_budget').innerHTML = "";
  }

  if (companyname == "") {
	document.getElementById('error-frm_companyname').innerHTML = " Please enter company name *";
  }else{
	  document.getElementById('error-frm_companyname').innerHTML = "";
  }
  if (service == "") {
	document.getElementById('error-frm_service').innerHTML = " Please select services *";
  }else{
	  document.getElementById('error-frm_service').innerHTML = "";
  }
	if (name != "" && phone != "" && email != "" && companysize != "" && budget != "" && companyname != "" &&  verified_email) {
		document.getElementById('consultation-form').submit();
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

