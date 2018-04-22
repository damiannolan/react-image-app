import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple500 } from 'material-ui/styles/colors';


import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ textAlign: 'center'}}>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
