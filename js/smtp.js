var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
function sendMail() {

    let body=Body();
    document.getElementById("allLoad").style.display = 'block';
    Email.send({
	    SecureToken: "3b73c723-8413-41ea-b618-8fc5dec70ff5",
	    To: 'jerrysky866@gmail.com',
	    From: "jerrysky866@gmail.com",
	    Subject: "From MyintroWebsit",
	    Body: body,
    }).then(
    message => alert("Send Successfullly!")
   ).then(
    function(){document.getElementById("confirmWindow").style.display = 'none';}
   ).then(function(){document.getElementById("allLoad").style.display = 'none';})


  }
  function confirmSend(){
  	let body=Body();
  	document.getElementById("confirmText").innerHTML =body;
  	document.getElementById("confirmWindow").style.display = 'block';
  }
  function closeConfirm(){
  	document.getElementById("confirmWindow").style.display = 'none';
  }
  function Body(){
  	let fields = {
	    name: document.querySelector("#name").value,
	    tel: document.querySelector("#tel").value,
	    email: document.querySelector("#email").value,
	    content: document.querySelector("#content").value
	};
    let body = 'Name：' + fields.name + '<br>'+ 'TelPhone：' + fields.tel + '<br>' + 'Email:' + fields.email + '<br>' + 'Content：' + fields.content + '<br>';
    return body;
  }

 