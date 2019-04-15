import * as React from 'react';
import * as Scrivito from 'scrivito';
import Countdown from 'react-countdown-now';


Scrivito.provideComponent('CountdownWidget', ({ widget }) => {
  const dateInFuture = widget.get('date');

  if (!dateInFuture && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a date in future in the widget properties.
        </h4>
    );
  }

  return (
    <div>
    <span className="prefix">{widget.get('prefix')}</span>
    <span className="time"><Countdown  date={dateInFuture}  /></span>
    <span className="postfix">{widget.get('postfix')}</span>
    </div>
  );
});

