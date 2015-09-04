import React from 'react';
 
class Address extends React.Component {

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }
    render() {

        var itens = this.props.address.map(function(item, i){
                return (
                    <div key={i} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" 
                                type="text" 
                                defaultValue={item.value} />
                        <label className="mdl-textfield__label">{item.label}</label>
                    </div>
                );
            });

        return (

            <div>
                {itens}
            </div>
        );
    }
}
 
export default Address;