import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import TripFinder from './components/TripFinder';


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
      <div className={classes.root}>
        <AppBar/>
        <TripFinder/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
