//any js is run directly


//import react lib
import React  from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList'
import axios from 'axios';

// create stateless component
class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {images:[]}
    }

    componentWillMount()
    {
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0').then(response=>this.setState({images: response.data.data}))
    }

    render()
    {
        return(
            <div><ImageList images={this.state.images}/></div>
        )
    };
}

Meteor.startup(()=>
{

 //render this component
 ReactDOM.render(<App />, document.querySelector('.container'))

})

