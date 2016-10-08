import React, {Component} from 'react';
import Accounts from './Accounts';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component
{
    render()
    {
        return (
             <AppBar
                title="Markbin"
                showMenuIconButton={false}
                >
                    <Accounts/>
            </AppBar>
            );
    }
}

export default Header;