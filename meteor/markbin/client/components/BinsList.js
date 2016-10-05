import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Bins} from '../../imports/collections/bins';
import {createContainer} from 'meteor/react-meteor-data';


class BinsList extends Component
{
    render()
    {
        console.log(this.props.bins);

        return (<div></div>);
    }
}

export default createContainer(()=>
{
    Meteor.subscribe('bins');

    return {bins:Bins.find({}).fetch()};

}, BinsList);