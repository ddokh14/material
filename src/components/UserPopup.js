/* eslint-disable react/no-multi-comp */
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    '& h2': {
      color: 'white !important',
    },
  },
  paper: {
    minWidth: '310px',
    maxHeight: 435,
  },
  content: {
    padding: '24px',
  },
  input:{
      width:'100%',
      margin: '10px 0'
  }
});

class UserPopup extends React.Component {
  render() {
    const { classes,open, title, onClose, isRegister, toggleRegister } = this.props;

    return (
      <Dialog
        classes = {{ paper: classes.paper}}
        open={open}
        onClose={onClose}
      >
        <DialogTitle classes = {{root: classes.root}}>{title}</DialogTitle>
        <DialogContent className={classes.content}>

            {isRegister ? 

            <React.Fragment>
                <TextField
                    variant="outlined"
                    label="Username"
                    className={classes.input}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                            <AccountCircle color="primary"/>
                            </InputAdornment>
                    }}
                    
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    className={classes.input}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                            <Lock color="primary"/>
                            </InputAdornment>
                    }}
                />
                <TextField
                    variant="outlined"
                    label="Repeat Password"
                    className={classes.input}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                            <Lock color="primary"/>
                            </InputAdornment>
                    }}
                />
            </React.Fragment>
            :
            <React.Fragment>
                <TextField
                    variant="outlined"
                    label="Username"
                    className={classes.input}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                            <AccountCircle color="primary"/>
                            </InputAdornment>
                    }}
                    
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    className={classes.input}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                            <Lock color="primary"/>
                            </InputAdornment>
                    }}
                />
            </React.Fragment>
            }
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleRegister} color="primary">
            {isRegister ? "Sign In" : "Sign Up" }
          </Button>
          <Button onClick={onClose} color="primary">
            {isRegister ? "Sign Up" : "Sign In" }
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

UserPopup.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

export default withStyles(styles)(UserPopup);
