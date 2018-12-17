import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import AppBarMenu from '../container/AppBarMenu'
import UserPopup from './UserPopup'


const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: 'none !important',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    marginLeft:'10px',
  }
});

class MenuAppBar extends React.Component {
    state = {
      open: false,
      isRegister: false,
    };

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleToggleRegister = () => {
      this.setState({ isRegister: !this.state.isRegister });
    };


    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
    const { classes } = this.props;

    return (
        <AppBar position="fixed" color="inherit" className={classes.root}>
            <Toolbar>

                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Transfer Georgia
                </Typography>

                <Hidden smDown>
                  <Button className={classes.button} color="inherit">Home</Button>
                  <Button className={classes.button} color="inherit">About</Button>
                  <Button className={classes.button} color="inherit">Trip Planner</Button>
                  <Button className={classes.button} color="inherit">Contact</Button>
                  <Button className={classes.button} onClick={this.handleOpen} color="primary" variant="contained">Sign In</Button>
                </Hidden>
                <Hidden mdUp>
                  <AppBarMenu/>
                </Hidden>

            </Toolbar>

            <UserPopup onClose={this.handleClose} open={this.state.open} isRegister={this.state.isRegister} toggleRegister={this.handleToggleRegister} title="Sign In"/>
        </AppBar>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
