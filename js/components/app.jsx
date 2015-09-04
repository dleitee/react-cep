import React from 'react';
import Address from './address.jsx';
import Error from './error.jsx';
 
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', address: [], error: ""};
    }

    handleChange(event){

        this.setState({value: React.findDOMNode(this.refs.cep).value});

    }

    findCep(){
        
        var url = "http://api.postmon.com.br/v1/cep/";
        var param = this.state.value;

        var xhr= $.get(url+param , function(data) {});

        xhr.done(function(data) {
            this.setState({address: [
                    {label: 'Logradouro', value:  data.logradouro},
                    {label: 'Número', value: ''}, 
                    {label: 'Complemento', value: data.complemento}, 
                    {label: 'Bairro', value: data.bairro}, 
                    {label: 'Cidade', value: data.cidade}, 
                    {label: 'Estado', value: data.estado}
                ], error: ""});
        }.bind(this));

        xhr.fail(function(data) {
        
            this.setState({address: [], error: "CEP não encontrado"})
            console.log(data);
        
        }.bind(this));
        
    }

    render() {

        return (
            <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" 
                            type="text" 
                            ref="cep" 
                            defaultValue={this.state.value} 
                            onChange={this.handleChange.bind(this)} />
                    <label className="mdl-textfield__label">CEP</label>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        onClick={this.findCep.bind(this)}>
                  Buscar cep
                </button>
                <hr/>
                <Address address={this.state.address} />
                <Error message={this.state.error} />

            </div>
        );
    }
}
 
export default App;