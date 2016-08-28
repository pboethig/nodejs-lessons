import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            val:0
        };

        this.update = this.update.bind(this);
    }

    update()
    {
        this.setState({val: this.state.val +1});
    }

    componentDidMount()
    {
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update,500);

    }

    componentWillMount()
    {
        this.setState({m: 2})
    }

    componentWillUnmount()
    {
        console.log('unmount');
        clearInterval(this.inc);
    }

    render()
    {
        console.log('rendering');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
}

class Wrapper extends React.Component
{
 
    constructor()
    {
        super();
    }

    mount()
    {
        ReactDOM.render(<App/>, document.getElementById('a'));
    }

    unmount()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render()
    {
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;


