import React, {Component} from 'react';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';

/**
 * COnfigure the Share Chip (material-ui)
 */
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

/**
 * This Component implements a share functionality to share a markdown bin with a user.
 */
class BinsShare extends Component
{

    /**
     * Handle the deletion of a share
     * @param event event
     */     
    handleRequestDelete(event) {
        alert('You clicked the delete button.');
    }

    /**
     * Handle the tap event
     * @param event event
     */ 
    handleTouchTap(event) {
        alert('You clicked the Chip.');
    }

    /**
     * Click on a share adds a person as a sharedWith array 
     * to the bin
     * 
     * @param event event
     */
    onShareClick (event)
    {
        const email = this.refs.email.value;
        Meteor.call('bins.share', this.props.bin, email);
    }

    /**
     * Renders a list of shares
     */ 
    renderShareList_()
    {
        return this.props.bin.sharedWith.map(email=>
        {
            return <button className="btn btn-default" key={email}>{email}</button>
            
        });
    }


    /**
     * Renders a list of shares.
     * Every Item is a material-ui Chip / SVG Icon 
     * 
     */ 
    renderShareList()
    {
        return this.props.bin.sharedWith.map(email=>
        {
            return (<Chip
                        onRequestDelete={this.handleRequestDelete.bind(this)}
                        onTouchTap={this.handleTouchTap.bind(this)}
                        style={styles.chip}
                    >
                    <Avatar color="#444" icon={<SvgIconFace />} />
                        {email}
                    </Chip>
                );
        });
    }


    /**
     * Renders an input field and a submitbutton to enter
     * a share and save it to the bin
     * A share is simply a userId to share a bin with
     */ 
    render()
    {
        return(<footer className="bins-share">
                <div className="input-group">  
                    <input ref="email" className="form-control"/>
                    <div className="input-group-btn">
                        <button 
                        onClick={this.onShareClick.bind(this)}
                        className="btn btn-default">Share bin</button>
                    </div> 
                </div> 
        <div style={styles.wrapper}>

              Shared With:
                {this.renderShareList()}
              </div>      

            </footer>
        );
    }
}

export default BinsShare;