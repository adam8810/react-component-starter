// Wrapper
import React from 'react';

// Blueprint Component
const WrapperElement = React.createClass ({
  render () {
    return (
      <div className="outer-wrapper">
        <div className="component-wrapper">{this.props.children}</div>
      </div>
    );
  }
});

export default WrapperElement;
