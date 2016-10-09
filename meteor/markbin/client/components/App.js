import React from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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