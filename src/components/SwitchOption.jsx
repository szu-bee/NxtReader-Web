import React, {Component} from 'react';
import '../styles/SwitchOption.css';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

class SwitchOption extends Component {
  render() {
    return (
      <div className="switch-option">
        <div className="icon-box">
          <i className="fa fa-star"></i>
          <i className="fa fa-circle"></i>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    );
  }
}

export default SwitchOption;
