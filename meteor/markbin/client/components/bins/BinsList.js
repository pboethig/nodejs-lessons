import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Bins} from '../../../imports/collections/bins';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

class BinsList extends Component
{
    onBinRemove(bin)
    {
        Meteor.call('bins.remove',bin);
    }

    renderList()
    {
        return this.props.bins.map(bin=>
        {
            const url="/bins/" + bin._id;    
            
            return(
                <li className="list-group-item" key={bin._id}>
                   <Link to={url} > {bin._id}</Link>
                   <span>{bin.ownerId}</span>
                   <span>{bin.sharedWith}</span>
                <span className="pull-right">
                    <button
                        className="btn btn-danger" 
                        onClick={() => this.onBinRemove(bin)}>
                        Delete
                    </button>
                </span>
                 </li>
                );    
        });
    }

    render()
    {
        Meteor.call('get.current.user');
        
        return (<ul className="list-group">
            {this.renderList()}
            </ul>
            );
    }
}

export default createContainer(()=>
{
    Meteor.subscribe('allAnonymus');
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return {bins:Bins.find({}).fetch()};

}, BinsList);