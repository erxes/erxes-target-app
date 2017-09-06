import React, { Component } from 'react';


class KnowledgeBase extends Component {

  componentDidMount() {
    window.erxesSettings = {
      knowledgeBase: {
        topic_id: "RzR4mZuwtYLQXhaoT",
      },
      messenger: {
        brand_id: "jJFPED",
      },
    };

    (() => {
      var script = document.createElement('script');
      script.src = process.env.REACT_APP_KNOWLEDGEBASE_WIDGET_URL;
      script.async = true;

      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }

  render() {
    return (
      <div className="container">
        <div className="embed-container" data-erxes-kbase />
      </div>
    );
  }
}

export default KnowledgeBase;
