/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
function sendMail() {
  	let fields = {
	    name: document.querySelector("#name").value,
	    tel: document.querySelector("#tel").value,
	};
    let body = '姓名：' + fields.name + '<br>'+ '電話：' + fields.tel + '<br>';
    Email.send({
	    SecureToken: "51d153d4-b524-4eb0-ba2a-7be4a5b69eff",
	    To: 'jerrysky866@jerrysky866.xyz',
	    From: "test<jerrysky866@jerrysky866.xyz>",
	    Subject: "test",
	    Body: body,
    }).then(
    message => alert("!!")
   );
  }

 