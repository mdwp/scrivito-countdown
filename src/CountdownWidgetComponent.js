import * as React from 'react';
import * as Scrivito from 'scrivito';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';


Scrivito.provideComponent('CountdownWidget', ({ widget }) => {
  const dateInFuture = moment(widget.get('date'), 'YYYY-MM-DD HH:mm:ss');

  if (!dateInFuture.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a date in future in the widget properties.
        </h4>
    );
  }

  return (
    <h3>{widget.get('prefix')}
    <ReactMomentCountDown  toDate={dateInFuture} targetFormatMask='YY-MM-DD HH:mm:ss' />
    {widget.get('postfix')}
    </h3>
  );
});

