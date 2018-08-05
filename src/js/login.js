var $email=$("#email");
var $pass=$("#pass");

var $loginButton = $(".submit-button");
$loginButton.click(function(event) {
    event.preventDefault();
    var email = $email.val();
    var pass = $pass.val();

    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "authToken" + "=" + pass + ";" + expires + ";path=/";

    window.open("../html/dashboard.html",'_self');
});