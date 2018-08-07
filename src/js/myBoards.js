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

    this.postMessage = function(data) {
        return this.doRequest({
            method:'POST',
            data: data,
            url: 'https://kiss.bitstoneint.com/api/v1/add-message'
        });
    };

    this.getBoardDetails = function(id) {
        return this.doRequest({
            url: "https://kiss.bitstoneint.com/api/v1/discussion-board/"+id+"?page=<PAGE_NUMBER>&perPage=<NO_ITEMS_PER_PAGE>"
        });
    };

    this.getAllBoards = function() {
        return this.doRequest({
            url: "https://kiss.bitstoneint.com/api/v1/my-discussion-boards?page=<PAGE_NUMBER>&perPage=<NO_ITEMS_PER_PAGE>&filter=<FILTER>"
        });
    };

    this.setCredentials = function(authToken) {
        auth_token = authToken;
    }
}


var apiHandler = new APIHandler();

var boards = [];

function getAllBoards(){
    if (localStorage.getItem('auth-token')) {
        apiHandler.setCredentials(localStorage.getItem('auth-token'));

        apiHandler.getAllBoards().then(function(r) {
            boards = r;
            console.log(boards);
            renderBoards();

            $('.titleCard').click( function (e){
                    var $allBoards = $('.card');
                    for(var i=0; i<$allBoards.length; i++){
                        if(e.currentTarget.textContent ===$($allBoards[i]).children().eq(0).text()){
                            var currentBoard = $($allBoards[i]);
                        }

                        $($allBoards[i]).hide();

                    }
                    displayMessages(currentBoard);
                }
            );

        })
    } else {
        alert("WRONG");
    }
}

function renderBoards(){
    for(var i=0; i<boards.data.length; i++) {
        var $card = $('<div/>', {
            class: 'card',
            css: {
                "height": "auto"
            }
        });

        $('<div/>', {
            class: 'titleCard',
            text: boards.data[i].id +'. '+boards.data[i].title,
            css: {
                "border-bottom": "1px solid black"
            }
        }).appendTo($card);

        $('<div/>', {
            class: 'contentCard',
            text: boards.data[i].description
        }).appendTo($card);

        $card.appendTo('.container');
    }
}

getAllBoards();

function displayMessages(currentBoard){
    var boardID = parseInt($(currentBoard).children().eq(0).text());
    apiHandler.getBoardDetails(boardID).then(function (board){
        console.log(board);

        var $boardMessages = $('<div/>', {
            class: 'userDetails',
            css: {
                "width": "25%",
                "margin": "20px",
                "border":"1px solid black"
            }
        });

        for(var i=0; i<board.data.board_messages.length; i++) {
            $('<div/>', {
                class: 'titleCard',
                text: board.data.board_messages[i].user.name+': ',
                css: {
                    "border-bottom": "1px solid black"
                }
            }).appendTo($boardMessages);

            $('<div/>', {
                class: 'contentCard',
                text: board.data.board_messages[i].text,
                css: {
                    "border-bottom": "1px solid black"
                }
            }).appendTo($boardMessages);
        }
        $boardMessages.appendTo($('.container'));

        var textMessage = $('<input/>', {
            css: {
                "float": "left",
                "width":"70%",
                "height" : "50px",
                "border-radius" : "5px"
            }
        }).appendTo($('.container'));

        var sendButton = $('<button/>', {
            text:"Send!",
            css: {
                "float": "right",
                "width":"30%",
                "height" : "50px",
                "border-radius" : "5px"
            }
        }).appendTo($('.container'));



        sendButton.click(function(){
            if(!textMessage.val()){
                alert("Say somthing!");
            }else{
                apiHandler.postMessage(JSON.stringify({
                    board_id: boardID,
                    parent_id: 0,
                    text: textMessage.val()
                })).then(function () {
                    $('<div/>', {
                        class: 'titleCard',
                        text: board.data.board_messages[0].user.name+': ',
                        css: {
                            "border-bottom": "1px solid black"
                        }
                    }).appendTo($boardMessages);

                    $('<div/>', {
                        class: 'contentCard',
                        text: textMessage.val(),
                        css: {
                            "border-bottom": "1px solid black"
                        }
                    }).appendTo($boardMessages);

                    textMessage.val('');
                })
            }
        })
    })
}

