import React, {Component} from 'react';
import {Bins} from '../../../imports/collections/bins';
import {createContainer} from 'meteor/react-meteor-data';
import BinsEditor from './BinsEditor';
import BinsViewer from './BinsViewer';
import BinsShare from './BinsShare';

class BinsMain extends Component
{
    render()
    {
        if (!this.props.bin) { return <div>Loading...</div>}

        return (
        <div>
            <BinsEditor bin={this.props.bin}/>
            <BinsViewer bin={this.props.bin}/>
            <BinsShare bin={this.props.bin}/>
        </div>);
    }
}

export default createContainer((props)=>
{
    const { binId } = props.params;

    Meteor.subscribe('bins');

    return {bin: Bins.findOne(binId)};

}, BinsMain);