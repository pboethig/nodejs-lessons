import React, {Component} from 'react';

class BinsShare extends Component
{

    onShareClick (event)
    {
        const email = this.refs.email.value;
        Meteor.call('bins.share', this.props.bin, email);
    }

    renderShareList()
    {
        console.log(this.props.bin.sharedWith);    

        return this.props.bin.sharedWith.map(email=>
        {
            return <button 
                        className="btn btn-default" 
                        key={email}>{email}
                    </button>
        });
    }

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

              <div>
              Shared With:
                <div className="btn-group">
                {this.renderShareList()}
                </div>
              </div>      

            </footer>
            );
    }
}

export default BinsShare;