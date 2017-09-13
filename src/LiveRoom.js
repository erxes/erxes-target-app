import React, { Component } from 'react';

class LiveRoom extends Component {
  componentDidMount() {
    window.erxesSettings = {
      liveRoom: {
        brandCode: process.env.REACT_APP_BRAND_CODE,
      }
    };

    (() => {
      var script = document.createElement('script');
      script.src = process.env.REACT_APP_LIVE_ROOM_WIDGET_URL;
      script.async = true;

      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }

  render() {
    return (
      <div className="container">
        <div className="embed-container" data-erxes-embed-live-room />
      </div>
    );
  }
}

export default LiveRoom;
