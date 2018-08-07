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
    };

    this.getAllUsers = function() {
        return this.doRequest({
            url: 'https://kiss.bitstoneint.com/api/v1/users'
        });
    };

    this.getUserById = function(id) {
        return this.doRequest({
            url: 'https://kiss.bitstoneint.com/api/v1/profile?id='+id
        });
    };

    this.setCredentials = function(authToken) {
        auth_token = authToken;
    }
}


var apiHandler = new APIHandler();

var users=[];

function showUserDetails(currentUser){
    apiHandler.getUserById(parseInt($(currentUser).children().eq(1).text())).then(function (user){
    var $userDetails = $('<div/>', {
        class: 'userDetails',
        css: {
            "margin": "20px"
        }
    });

    $('<div/>', {
        class: 'titleCard',
        text: $(currentUser).children().eq(1).text()
    }).appendTo($userDetails);

    $('<img />',
        {   src: 'http://via.placeholder.com/200x200',
            width: '200px',
            height: '200px'
        }).appendTo($userDetails);

    $('<div/>', {
        class: 'contentCard',
        text: 'Birthday: '+user.data.birthday+',\n'+'Job: '+ user.data.crm_company_name+',\n'+'Created at: '+ user.data.created_at +"Random text here",
        css: {
            "overflow": "auto",
            "padding-top":"50px"
        }
    }).appendTo($userDetails);

    $('<div/>', {
        class: 'bottomCard',
        text: user.data.email +' | '+ user.data.phone_number | "No number phone",
    }).appendTo($userDetails);


        $userDetails.appendTo($('.container'));
    })
}


function getAllUsers(){
    if (localStorage.getItem('auth-token')) {
        apiHandler.setCredentials(localStorage.getItem('auth-token'));

        apiHandler.getAllUsers().then(function(r) {
            users = r;
            renderUsers();

            $('.titleCard').click( function (e){
                    var $allUsers = $('.card');
                    for(var i=0; i<$allUsers.length; i++){
                        if(e.currentTarget.textContent ===$($allUsers[i]).children().eq(1).text()){
                            var currentUser = $($allUsers[i]);
                        }

                        $($allUsers[i]).hide();

                    }
                    showUserDetails(currentUser);
                }
            );

        })
    } else {
        alert("WRONG");
    }
}
getAllUsers();

function renderUsers(){

    for(var i=0; i<users.data.length; i++) {
        var $card = $('<div/>', {
            class: 'card'
        });

        var $content = $('<div/>', {
            class: 'contentCard'
        });

        $('<img />',
            {   src: 'http://via.placeholder.com/200x200',
                width: '100%',
                height: '100%'
            })
            .appendTo($content);

        $content.appendTo($card);

        $('<div/>', {
            class: 'titleCard',
            text: users.data[i].id +'. '+ users.data[i].name
        }).appendTo($card);


        $('<div/>', {
            class: 'bottomCard',
            text: 'Click the name for more info!'
        }).appendTo($card);

        $card.appendTo('.container');
    }
}
