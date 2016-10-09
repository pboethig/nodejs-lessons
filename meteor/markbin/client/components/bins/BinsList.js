import React , {Component} from 'react';
import ReactDOM from 'react-dom';
/**
 * Get the share dialog as standalone componente
 */
import BinsShareDialog from './BinsShareDialog';

/**
 * Datacontainer to store mongo db data
 */
import {Bins} from '../../../imports/collections/bins';
import {createContainer} from 'meteor/react-meteor-data';

/**
 * Button components
 */
import RaisedButton from 'material-ui/RaisedButton';

/**
 * table definitions
 */
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Link,browserHistory} from 'react-router';

/**
 * Share formular helper libs 
 */
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

/**
 * This configures the table component
 */
const styles = {
  propContainer: {
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
    errorStyle: {
  },
};




/**
 * Component to list all Markdown bins ()
 */
class BinsList extends Component
{
    
     constructor(props) 
     {
        super(props);

        this.state = {

        /**
         * Table state
         */     
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: true,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        };
    }

    /**
     * Creates a bin
     * @param bin 
     */ 
    createBin(event)
    {
        event.preventDefault();

        Meteor.call('bins.insert',(error, binId)=>{
            browserHistory.push(`/bins/${binId}`);
        });
    }

    /**
     * Deletes a markuo bin
     * @param bin
     */ 
    onBinRemove(bin)
    {
        Meteor.call('bins.remove',bin);
    }


    /**
     * Renders the bins list
     */ 
    renderList()
    {
        return this.props.bins.map(bin=>
        {
            const url="/bins/" + bin._id;    

            const user = Meteor.users.findOne(bin.ownerId);

            let email = 'guestuser';

            if(user)
            {
                email = user.emails[0].address;     
            }

            const emailAddress = 'anonymus';

            return(
                <TableRow key={bin._id}>
                    <TableRowColumn><Link to={url} > {bin._id}</Link></TableRowColumn>
                    <TableRowColumn><span>{email}</span></TableRowColumn>
                    <TableRowColumn>{bin.sharedWith}</TableRowColumn>
                    <TableRowColumn>
                        <span className="pull-right">

                            <BinsShareDialog bin={bin}/>
                            &nbsp;
                            <RaisedButton label="Delete" secondary={true} onClick={() => this.onBinRemove(bin)}/>
                        </span>
                        </TableRowColumn>
                </TableRow>            
                );    
        });
    }

    render()
    {
        
        return (
            <div className="tableContainer">
                <Divider />
                    <RaisedButton className="binCreate" label="Create bin" primary={true} onClick={this.createBin.bind(this)}/>
                <Divider />
            <Table
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                         displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                    <TableRow>
                        <TableHeaderColumn>Url</TableHeaderColumn>
                        <TableHeaderColumn>User</TableHeaderColumn>
                        <TableHeaderColumn>Shared with</TableHeaderColumn>
                        <TableHeaderColumn>Action</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                    {this.renderList()}
                    </TableBody>
                </Table>
                </div>
            );
    }
}

export default createContainer(()=>
{
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    Meteor.subscribe('allAnonymus');
    return {bins:Bins.find({},{ $sort: { _id: -1 } }).fetch()};

}, BinsList);