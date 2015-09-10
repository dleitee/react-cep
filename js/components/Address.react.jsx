var AddressItem = require('./AddressItem.react');
var React = require('react');
var ReactPropTypes = React.PropTypes;

var Address = React.createClass({

    propTypes: {
        address: ReactPropTypes.array.isRequired,
        load: ReactPropTypes.bool.isRequired
    },

    render: function() {

        if (this.props.address.length < 1 || this.props.load) {
            return null;
        }

        var address = this.props.address;
        var itens = [];

        for (var key in address) {
            itens.push(<AddressItem key={key} item={address[key]} />);
        }

        return (
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Label</th>
                        <th className="mdl-data-table__cell--non-numeric">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {itens}
                </tbody>
            </table>
        );
    }

});

module.exports = Address;