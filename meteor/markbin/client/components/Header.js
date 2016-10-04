import React, {Component} from 'react';
import Accounts from './Accounts';

class Header extends Component
{
    onBinClick(event)
    {
        event.preventDefault();

        Meteor.call('bins.insert');
    }

    render()
    {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Accounts /></li>
                    <li><a onClick={this.onBinClick.bind(this)} href="#">Create Bin</a></li>
                </ul>
            </nav>
            );
    }
}

export default Header;