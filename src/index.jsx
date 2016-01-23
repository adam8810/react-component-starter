import React      from 'react';
import { render } from 'react-dom';

import WrapperElement from './wrapper.jsx';

require ('expose?$!expose?jQuery!jquery');
require ('bootstrap-webpack');
require ("font-awesome-webpack");

const Component = React.createClass ({
  // React Life Cycle Methods
  // https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
  
  componentDidMount () {
    // If you want to integrate with other JavaScript frameworks,
    // set timers using setTimeout or setInterval, or send AJAX
    // requests, perform those operations in this method.

  },

  componentWillUnmount () {
    // Clean up anything that was created in componentDidMount
    // such as timers or other elements

  },

  getInitialState () {
    // Use this for creating state. Ex: Setting visibility of element
    // or default value for a checkbox
    return {
      buttonColor: 'green'
    };
  },
  render () {
    const buttonColor = {
      backgroundColor: this.state.buttonColor
    };

    return (
      <div>
        <WrapperElement>
          <h1>Component Blueprint</h1>
          <button style={buttonColor} className="btn btn-primary"><i className="fa fa-check"></i> Bootstrap Button</button>
          </WrapperElement>
      </div>
    );
  }
});

const node = document.getElementById ('component');

render (<Component />, node);
