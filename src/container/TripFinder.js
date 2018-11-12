import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideFilter from '../components/SideFilter';
import Grid from '../components/Grid';
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
  
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SideFilter onClose={this.handleClose} open={this.state.open}/>
        <Grid/>
        <Hidden mdUp>
            <Button onClick={this.handleOpen} className={classes.filter} variant="fab" color="primary" aria-label="Menu">
              <Directions />
            </Button>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(TripFinder);
