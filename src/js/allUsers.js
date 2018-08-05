
var users = [
    {
    name:"Ion",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    },

    {
        name:"Marcel",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    },

    {
        name:"oIn",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    },

    {
        name:"oIn",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    },

    {
        name:"oIn",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    },

    {
        name:"oIn",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, distinctio doloremque error, eveniet facilis hic, in laboriosam nisi perspiciatis quaerat recusandae rem repellendus reprehenderit tempora ullam ut velit? Dicta, labore!"
    }


    ];

function renderUsers(){
   for(var i=0; i<users.length; i++) {
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
           text: users[i].name
       }).appendTo($card);


       $('<div/>', {
           class: 'bottomCard',
           text: 'Click the name for more info!'
       }).appendTo($card);

       $card.appendTo('.container');
   }
}

function showUserDetails(currentUser){
    console.log(currentUser);
    var $userDetails = $('<div/>', {
        class: 'userDetails',
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
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aor sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium or sit amet, consectetur adipisicing elit. A accusantium liquid delectus dolore eligendi est eveniet, facere fugit harum hic illo ipsum nisi non obcaecati quod reiciendis unde! Perferendis, temporibus.',
        css: {
            "overflow": "auto"
        }
    }).appendTo($userDetails);

    $('<div/>', {
        class: 'bottomCard',
        text: 'email and phone'
    }).appendTo($userDetails);


        $userDetails.appendTo($('.container'));
}


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

