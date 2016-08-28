import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            increasing:false
        };

        this.update = this.update.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({increasing:nextProps.props.val> this.props.val});
    }

    shouldComponentComponentUpdate(nextProps, nextState)
    {
        return nextProps.val % 5 === 0;
    }

    update()
    {
        ReactDOM.render(
            <App val={this.props.val+1}/>
        );
        this.setState({val: this.state.val +1});
    }

    render()
    {
        console.log(this.state.increasing)
        return <button onClick={this.update}>{this.props.val}</button>
    }
}

App.defaultProps = {
    val:0
}

export default App;


