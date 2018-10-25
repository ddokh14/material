import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideFilter from './SideFilter';
import Grid from './Grid';
import Button from '@material-ui/core/Button';
import Directions from '@material-ui/icons/Directions';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
    root: {
        display: 'flex',
        position: 'relative',
        flexGrow: 1,
        height: '100vh',
        overflow: 'hidden',
    },
    filter: {
      position:'fixed',
      right: '20px',
      bottom: '20px',
    }
});

class TripFinder extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SideFilter/>
        <Grid/>
        <Hidden mdUp>
            <Button className={classes.filter} variant="fab" color="primary" aria-label="Menu">
              <Directions />
            </Button>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(TripFinder);
