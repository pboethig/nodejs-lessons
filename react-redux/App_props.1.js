import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {

let txt = this.props.txt;

        return (
            <div>
            <h1>{txt}</h1>
            </div>
        )
    }
}


App.propTypes = 
{
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
}

App.defaultProps = 
{
    txt:'defaulttext'
}


ReactDOM.render( 
    < App  cat={5} txt="this a text" / > 
    , document.getElementById('app')
    );