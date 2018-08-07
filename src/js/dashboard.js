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

    this.getAllNews = function() {
        return this.doRequest({
            url: 'https://kiss.bitstoneint.com/api/v1/myNews?page=<PAGE_NUMBER>&perPage=<NO_ITEMS_PER_PAGE>&filter=<FILTER>'
        });
    };

    this.setCredentials = function(authToken) {
        auth_token = authToken;
    }
}


var apiHandler = new APIHandler();

var news = [];

function getAllNews(){
    if (localStorage.getItem('auth-token')) {
        apiHandler.setCredentials(localStorage.getItem('auth-token'));

        apiHandler.getAllNews().then(function(r) {
            news = r;
            renderNews();
        })
    } else {
        alert("WRONG");
    }
}

function renderNews(){
    for(var i=0; i<news.data.length; i++) {
        var $card = $('<div/>', {
            class: 'card'
        });

        $('<div/>', {
            class: 'titleCard',
            text: news.data[i].title
        }).appendTo($card);

        $('<div/>', {
            class: 'contentCard',
            text: news.data[i].content
        }).appendTo($card);


        $('<div/>', {
            class: 'bottomCard firstBottomCard',
            text: news.data[i].created_at
        }).appendTo($card);

        $('<div/>', {
            class: 'bottomCard secondBottomCard',
            text: news.data[i].user.name
        }).appendTo($card);

        $card.appendTo('.container');
    }
}

getAllNews();

