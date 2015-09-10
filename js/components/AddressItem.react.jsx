var React = require('react');
var ReactPropTypes = React.PropTypes;

var classNames = require('classnames');

var AddresItem = React.createClass({

  propTypes: {
   item: ReactPropTypes.object.isRequired
  },

  render: function() {
    var item = this.props.item;

    return (
        <tr>
            <td className="mdl-data-table__cell--non-numeric">{item.label}</td>
            <td className="mdl-data-table__cell--non-numeric">{item.value}</td>
        </tr>
    );
  
  }

});

module.exports = AddresItem;