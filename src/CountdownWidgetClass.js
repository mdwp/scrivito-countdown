import * as Scrivito from 'scrivito';

const CountdownWidget = Scrivito.provideWidgetClass('CountdownWidget', {
    attributes: {
        prefix: 'string',
        date: 'date',
        postfix: 'string'
    },
});

export default CountdownWidget;