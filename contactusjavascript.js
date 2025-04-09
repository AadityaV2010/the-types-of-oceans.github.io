// return confirm('Are you sure you have answered all required questions and want to submit?');
// let text;
//Want to validate the form (EX:email and phone number must be in the requested format) on submit and pressing 'OK'

function confirmanswersFunction() {

  if (document.maincontactusform.firstname.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.lastname.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.email.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.birthday.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.gender.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.submitdaytime.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.phonenumber.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.addressline1.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.city.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.state.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.zipcode.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  if (document.maincontactusform.country.value == "") {
    alert("Please answer all required questions before submitting");
    return;
  }
  //confirm('Are you sure you have answered all required questions correctly and want to submit?');
}
/*if (confirm('Are you sure you have answered all required questions correctly and want to submit?') == true) {
  javascript: document.getElementById('submitvaluedetails').style.display = 'initial';
  javascript: document.getElementById('contactusformdiv').style.display = 'none';
  javascript: document.getElementById('requiredfieldindicator').style.display = 'none';
  javascript: document.getElementById('inputsubmitfunction').style.display = 'none';
  javascript: document.getElementById('inputresetclearreturnconfirm').style.display = 'none';
  javascript: document.getElementById('thankyouaftersubmit').style.display = 'initial';
} else {
  // text = "You canceled!";
}*/
//probably not needed
function surveyformsubmitbuttonFunction() {
  /*javascript: */document.getElementById('surveydiv').style.display = 'initial';
  /*javascript: */document.getElementById('surveyformfieldset').style.display = 'none';
  /*javascript: */document.getElementById('inputtypebuttonsurvey').style.display = 'none';
}

/*function confirmation() {
  if (document.maincontactusform.firstname.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.lastname.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.email.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.birthday.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.gender.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.submitdaytime.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.phonenumber.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.addressline1.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.city.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.state.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.zipcode.value == "") {
    alert("Please answer all required questions");
    return;
  }
  if (document.maincontactusform.country.value == "") {
    alert("Please answer all required questions");
    return;
} */

function CreateCookies() {
  cookievaluefirstname = escape(document.maincontactusform.firstname.value) + ";";
  document.cookie = "First Name=" + cookievaluefirstname;

  cookievaluemiddlename = escape(document.maincontactusform.middlename.value) + ";";
  document.cookie = "Middle Name=" + cookievaluemiddlename;

  cookievaluelastname = escape(document.maincontactusform.lastname.value) + ";";
  document.cookie = "Last Name=" + cookievaluelastname;

  cookievaluenickname = escape(document.maincontactusform.nickname.value) + ";";
  document.cookie = "Nickname=" + cookievaluenickname;

  cookievalueinputusername = escape(document.maincontactusform.inputusername.value) + ";";
  document.cookie = "Username=" + cookievalueinputusername;

  cookievalueinputpassword = escape(document.maincontactusform.inputpassword.value) + ";";
  document.cookie = "Password=********";
  //document.cookie = "Password=" + cookievalueinputpassword;

  cookievalueemail = escape(document.maincontactusform.email.value) + ";";
  document.cookie = "Email Address=" + cookievalueemail;

  cookievaluebirthday = escape(document.maincontactusform.birthday.value) + ";";
  document.cookie = "Birthday=" + cookievaluebirthday;

  cookievaluegender = escape(document.maincontactusform.gender.value) + ";";
  document.cookie = "Gender=" + cookievaluegender;

  cookievaluesubmitdaytime = escape(document.maincontactusform.submitdaytime.value) + ";";
  document.cookie = "Submit Day&Time=" + cookievaluesubmitdaytime;

  cookievaluephonenumber = escape(document.maincontactusform.phonenumber.value) + ";";
  document.cookie = "Phone Number=" + cookievaluephonenumber;

  cookievalueaddressline1 = escape(document.maincontactusform.addressline1.value) + ";";
  document.cookie = "Address Line 1=" + cookievalueaddressline1;

  cookievalueaddressline2 = escape(document.maincontactusform.addressline2.value) + ";";
  document.cookie = "Address Line 2=" + cookievalueaddressline2;

  cookievaluecity = escape(document.maincontactusform.city.value) + ";";
  document.cookie = "City=" + cookievaluecity;

  cookievaluestate = escape(document.maincontactusform.state.value) + ";";
  document.cookie = "State=" + cookievaluestate;

  cookievaluezipcode = escape(document.maincontactusform.zipcode.value) + ";";
  document.cookie = "Zip Code=" + cookievaluezipcode;

  cookievaluecountry = escape(document.maincontactusform.country.value) + ";";
  document.cookie = "Country=" + cookievaluecountry;

  cookievaluefound = escape(document.maincontactusform.found.value) + ";";
  document.cookie = "Found=" + cookievaluefound;

  cookievalueocean = escape(document.maincontactusform.ocean.value) + ";";
  document.cookie = "Ocean=" + cookievalueocean;

  cookievaluecomments = escape(document.maincontactusform.comments.value) + ";";
  document.cookie = "Comments/Questions=" + cookievaluecomments;
}

function ShowCookies() {
  document.getElementById('showcookiesthankyouhtml').style.visibility = 'visible';
  let allCookies = document.cookie;
  document.getElementById('showcookiesthankyouhtml').innerHTML = allCookies;
  document.getElementById('showcookiesbutton').style.display = 'none';
  document.getElementById('hidecookiesbutton').style.display = 'initial';
}

function HideCookies() {
  document.getElementById('showcookiesthankyouhtml').style.visibility = 'hidden';
  document.getElementById('showcookiesbutton').style.display = 'initial';
  document.getElementById('hidecookiesbutton').style.display = 'none';
}

/*window.onbeforeunload = function(e) {
document.cookie = 'cookiename=; expires=' + d.toGMTString() + ';';
}; */

//Need to name cookies and get and delete them on reload
//Need to add a confirmation before submitting
//Need to add a confirmation that "confirm form resubmission" before pressing back button on thankyou.html
