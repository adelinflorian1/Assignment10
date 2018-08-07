$pages=$(".page");
$pages.eq(0).show();
var $email = $("#email");
var $pass = $("#pass");

var $submitButton = $(".submit-button");

function APIHandler() {
    var auth_token = localStorage.getItem('auth_token') || null;

    this.doRequest = function (paramsObject) {
        var method = paramsObject.method || 'GET';
        var data = paramsObject.data || {};
        var url = paramsObject.url || {};

        return $.ajax(url, {
            method: method,
            data: data,
            headers: {
                'content-type': 'application/json',
                'authToken': auth_token
            }
        })
    }

    this.postLogin = function(data) {
        return this.doRequest({
            method:'POST',
            data: data,
            url: 'https://kiss.bitstoneint.com/api/v1/login'
        });
    };

    this.setCredentials = function(authToken) {
        auth_token = authToken;
    }
}


var apiHandler = new APIHandler();

$submitButton.click(function(event) {
    event.preventDefault();
    var email = $email.val();
    var pass = $pass.val();

    apiHandler.postLogin(JSON.stringify({
        email: email,
        password: pass,
        remember: false
    })).then(function(r) {
        window.open('dashboard.html','_self');
        localStorage.setItem("auth-token", r.data.authToken);
    })
});

if(localStorage.getItem('auth-token')) window.open('dashboard.html', '_self');