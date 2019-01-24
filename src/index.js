import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue, orange, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: orange
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />

    </MuiThemeProvider>
    , document.getElementById('root'));