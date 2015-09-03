import React from 'react';

 
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {salgados: [], totalValue: 0, totalQuantity: 0};
    }
    

    render() {

        return (
            <div className="container">
                <div className="col-lg-9">
                    Ola
                </div>
            </div>
        );
    }
}
 
export default App;