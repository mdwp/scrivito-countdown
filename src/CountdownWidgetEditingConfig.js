import * as Scrivito from 'scrivito';


Scrivito.provideEditingConfig('CountdownWidget', {
    title: 'Countdown',
    attributes: {
        prefix: {
            title: 'Prefix',
            description: 'Text shown before the date.'
        },
        date: {
            title: 'Date',
            description: 'A date in the future',
        },
        postfix: {
            title: 'Postfix',
            description: 'Text shown after the date.',
        }

    },
    properties: [
        'prefix',
        'date',
        'postfix',
    ],

});