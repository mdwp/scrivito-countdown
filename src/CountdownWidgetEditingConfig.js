import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('CountdownWidget', {
    title: 'Countdown',
    attributes: {
        prefix: {
            title: 'Prefix',
        },
        date: {
            title: 'Date',

        },
        postfix: {
            title: 'Postfix',
        },
    },
    properties: [
        'prefix',
        'date',
        'postfix',
    ],

});