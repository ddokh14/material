import React, {Fragment} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class AppBarMenu extends React.Component {
  state = {
    anchorElement: null,
  };

  handleClick = event => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  render() {
    const { anchorElement } = this.state;

    return (
      <Fragment>
        <IconButton 
            color="inherit" 
            aria-label="Menu"
            aria-owns={anchorElement ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
        >
            <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorElement}
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
        >
            <MenuItem onClick={this.handleClose} color="inherit">Home</MenuItem>
            <MenuItem onClick={this.handleClose} color="inherit">About</MenuItem>
            <MenuItem onClick={this.handleClose} color="inherit">Trip Planner</MenuItem>
            <MenuItem onClick={this.handleClose} color="inherit">Contact</MenuItem>
            <MenuItem onClick={this.handleClose} color="primary" variant="contained">Sign In</MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

export default AppBarMenu;
