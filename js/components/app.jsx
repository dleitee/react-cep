import React from 'react';
 
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event){

        this.setState({value: React.findDOMNode(this.refs.cep).value});

    }

    findCep(){
        
        var url = "http://api.postmon.com.br/v1/cep/";
        var param = this.state.value;

        $.get(url+param , function(data) {
        
            this.setState({address: data, error: null})
        
        }.bind(this))
        .done(function(data) {

        }.bind(this)).fail(function(err) {
        
            this.setState({address: null, error: err})
        
        }.bind(this));
        
    }

    render() {

        return (
            <div>
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" 
                            type="text" 
                            ref="cep" 
                            id="cep" 
                            defaultValue={this.state.value} 
                            onChange={this.handleChange.bind(this)} />
                    <label className="mdl-textfield__label" htmlFor="cep">Cep...</label>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                        onClick={this.findCep.bind(this)}>
                  Buscar cep
                </button>
                
            </form>
            <div>
                <pre>
                    {JSON.stringify(this.state.address)}
                </pre>
            </div>
            <div>
                <pre>{this.state.error}</pre>
            </div>
            </div>
        );
    }
}
 
export default App;