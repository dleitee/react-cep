var React = require('react');
var ReactPropTypes = React.PropTypes;

var MainSection = React.createClass({

  propTypes: {
    address: ReactPropTypes.array.isRequired
  },

  render: function() {
    
    if (this.props.address.length < 1) {
      return null;
    }

    var address = this.props.address;
    
    return (
      <section id="main">
        {address}
      </section>
    );
  }

});

module.exports = MainSection;