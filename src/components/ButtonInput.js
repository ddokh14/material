import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputSuggest from './InputSuggest'; // MaterialUI Component
import TripOrigin from '@material-ui/icons/TripOrigin';
import MoreVert from '@material-ui/icons/MoreVert';
import Place from '@material-ui/icons/Place';
import AddLocation from '@material-ui/icons/AddLocation';
import Delete from '@material-ui/icons/Clear';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  inputWithIcon:{
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08);',
    },
    width: '100%',
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
  optionIcon:{
    position: 'absolute',
    top:'50%',
    transform: 'translate(50%,-50%)',
    display:'flex',
    justifyContent: 'center',
    right:'10%',
    zIndex: '1',
    opacity: '0.5',
    '&:hover': {
      opacity: '1',
    },
  },
  pathIcon:{
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
});

class ButtonInput extends React.Component {

    render() {
    const { classes, last, del, placeholder, suggestions, onClick, id, name} = this.props;

    return (     
        <div className={classes.inputWithIcon}>
            { last ? 
              <React.Fragment>
                <Place className={classes.icon}/>
                <IconButton onClick={onClick}  className={classes.optionIcon} color="inherit"><AddLocation/></IconButton>
              </React.Fragment> 
            :
              <React.Fragment>
                  <TripOrigin className={classnames({[classes.icon] : true, [classes.smallIcon]: true})}/>
                  <MoreVert className={classes.pathIcon}/>
                  { del ? 
                    <IconButton id={id} onClick={onClick} className={classes.optionIcon} color="inherit"><Delete/></IconButton>
                  :
                    null
                  }
              </React.Fragment>
            }
            <InputSuggest name={name} placeholder={placeholder} suggestions={suggestions}/>
        </div>
    );
  }
}

export default withStyles(styles)(ButtonInput);
