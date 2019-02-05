import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Up from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    content: {
        width: '100%',
        padding:'28px 36px',
        boxSizing:'border-box',
        height:'110px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lowerMenu:{},
    button:{
        color: '#92989b',
    },
    '@media (max-width: 991px)': { 
        lowerMenu:{display:'none'},
        content:{
            justifyContent:'center'
        }
    },
});


function smoothScroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothScroll);
         window.scrollTo (0,currentScroll - (currentScroll/20));
    }
}

class UpperFooterSection extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <div className={classes.lowerMenu}>
                <Button className={classes.button}>Privacy Policy</Button>
                <Button className={classes.button}>Feedback</Button>
                <Button className={classes.button}>Drivers</Button>
                <Button className={classes.button}>Trip Planner</Button>
            </div>
            <IconButton color="primary" className={classes.button} component="span" onClick={smoothScroll}>
                <Up/>          
            </IconButton>
        </div>
    );
  }
}

UpperFooterSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpperFooterSection);
