import { PropTypes, Component } from 'react';


const isDomAvailable = !!(window && window.document && window.document.createElement);

const propTypes = {
  brandId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  memberSince: PropTypes.number,
};

class ErxesButton extends Component {
  constructor(props) {
    super(props);

    if (!isDomAvailable) {
      return;
    }

    window.erxesSettings = {
      email: props.email,
      name: props.name,
      brand_id: props.brandId,
      created_at: props.memberSince,
    };

    (() => {
      const script = document.createElement('script');
      script.src = process.env.REACT_APP_WIDGET_URL || 'http://localhost:7020/static/widget.js';
      script.async = true;

      const entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (!isDomAvailable) return false;

    window.Erxes.disconnect({ dom: window });

    return delete window.erxesSettings;
  }

  render() {
    return null;
  }
}

ErxesButton.propTypes = propTypes;

export default ErxesButton;
