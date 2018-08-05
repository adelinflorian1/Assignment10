
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

function renderNews(){
    for(var i=0; i<users.length; i++) {
        var $card = $('<div/>', {
            class: 'card'
        });

        $('<div/>', {
            class: 'titleCard',
            text: users[i].name
        }).appendTo($card);

        $('<div/>', {
            class: 'contentCard',
            text: users[i].desc
        }).appendTo($card);


        $('<div/>', {
            class: 'bottomCard firstBottomCard',
            text: 'Some data'
        }).appendTo($card);

        $('<div/>', {
            class: 'bottomCard secondBottomCard',
            text: 'Some data'
        }).appendTo($card);

        $card.appendTo('.container');
    }
}

renderNews();

