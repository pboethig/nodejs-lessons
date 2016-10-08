import React from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default (props) =>
{
    return (
         <MuiThemeProvider>
        <div>
            <Header/>
            {props.children}
        </div>
        </MuiThemeProvider>
        );
}