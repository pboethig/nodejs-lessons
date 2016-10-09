import React, {Component} from 'react';
/**
 * Button components
 */
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog sources
 */
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
 * Inputfield sources from material-ui
 */
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

/**
 * Share formular helper libs 
 */
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

/**
 * Component to handle sharing dialog
 */
class BinsShareDialog extends Component
{
     constructor(props) 
     {
        super(props);

        this.state = {
            openShareDialog: false
        };
    }

      /**
     * Observe the sharebutton in the bins listview
     */
    onOpenShareDialog(bin)
    {
        this.setState({openShareDialog: true});
    }
   

    /**
     * Close the share dialog
     */
    onShareDialogClose(bin, context)
    {
        context.setState({openShareDialog:false});
    }

    /**
     * Renders the shareDialog formular
     */
    renderShareForm(bin, context)
    {
        const styles = {
                underlineStyle: {
                borderColor: orange500,
                },
                floatingLabelStyle: {
                color: orange500,
                },
                floatingLabelFocusStyle: {
                color: blue500,
                },

            };

        return(<div>
                    <TextField
                        id="shareUserEmail"
                        hintText="useremail"
                        errorText="This field is required."
                        errorStyle={styles.errorStyle}/>
                        <br />
                </div>
                );    
    }

    /**
     * Share the bin with a user 
     * 
     * @param event event
     */
    onShareClick (bin, context)
    {
        const email = document.getElementById('shareUserEmail').value;

        Meteor.call('bins.share', bin, email);
    }

    /**
     * Renders a dialog to share a markdown bin
     */
    render()
    {
        const bin = this.props.bin;

        const style = {
            margin: 5,
        };

        const ShareDialogActions = 
        [
            <Divider />,    
            <RaisedButton
                style={style} 
                label="Cancel"
                secondary={true}
                onTouchTap={()=>this.onShareDialogClose(bin, this)}
                onClick={()=>this.onShareDialogClose(bin, this)}
            />,
            <RaisedButton 
                style={style} 
                primary={true}
                label="Share now"
                keyboardFocused={true}
                onTouchTap={()=>this.onShareDialogClose(bin, this)}
                onClick={()=>this.onShareClick(bin, this)}
            />
        ];    

        return(<div className="shareDialog"><RaisedButton label="Share" primary={true} onClick={() => this.onOpenShareDialog(bin)}/>
            <Dialog
                    title="Share your markdown-bin with a user"
                    actions={ShareDialogActions}
                    modal={false}
                    open={this.state.openShareDialog}
                    onRequestClose={()=>this.onShareDialogClose(bin,this)}>
                        {this.renderShareForm(bin, this)}
                    </Dialog>
                    </div>
                    );
    }
}

export default BinsShareDialog;