import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import TripFinder from './container/TripFinder';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  }
});

class App extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.root}>
          <AppBar/>
          <TripFinder/>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(App);
