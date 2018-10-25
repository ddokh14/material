import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputSuggest from './InputSuggest'; // MaterialUI Component
import TripOrigin from '@material-ui/icons/TripOrigin';
import MoreVert from '@material-ui/icons/MoreVert';
import Place from '@material-ui/icons/Place';
import AddLocation from '@material-ui/icons/AddLocation';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: "8px 0",
    position: 'relative',
  },
  input:{
    width:'100%',
    margin:'auto',
  },
  inputWithIcon:{
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    cursor: 'pointer',
  },
  icon:{
    position: 'absolute',
    top:'50%',
    transform: 'translate(-50%,-50%)',
    display:'flex',
    justifyContent: 'center',
    left:'10%',
  },
  iconBetween:{
    position: 'absolute',
    bottom:'0',
    transform: 'translate(-50%,50%)',
    display:'flex',
    justifyContent: 'center',
    left:'10%',
  },
  smallIcon: {
    fontSize: '16px !important',
  },
  addLocation:{
    color: 'white',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  }
});

class RoutePlanner extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          
          <div className={classes.inputWithIcon}>
            <div className={classes.icon}>
              <TripOrigin className={classes.smallIcon}/>
            </div>
            <div className={classes.iconBetween}>
              <MoreVert/>
            </div>
            <div className={classes.input}>
              <InputSuggest/>
            </div>
          </div>


         


          <div className={classes.inputWithIcon}>
            <div className={classes.icon}>
              <Place/>
            </div>
            <div className={classes.input}>
              <InputSuggest/>
            </div>
          </div>
            

           
        </div>
    );
  }
}

export default withStyles(styles)(RoutePlanner);
