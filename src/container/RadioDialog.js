import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogPopUp from './DialogPopUp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });
  
  class RadioDialog extends React.Component {
    state = {
      open: false,
      value: 'Any',
    };
  
    handleClickListItem = () => {
      this.setState({ open: true });
    };
  
    handleClose = value => {
      this.setState({ value, open: false });
    };
  
    render() {
      const { classes, name, children } = this.props;
      return (
        <div className={classes.root}>
            <ListItem button onClick={this.handleClickListItem}>
                <ListItemIcon>
                  {children}
                </ListItemIcon>
                <ListItemText primary={name} secondary={this.state.value}/>
            </ListItem>
            <DialogPopUp
              open={this.state.open}
              onClose={this.handleClose}
              value={this.state.value}
              title={name}
            />
        </div>
      );
    }
  }
  
  RadioDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(RadioDialog);