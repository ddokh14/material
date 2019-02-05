import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Vkontakte from './vk.svg';

const styles = theme => ({
    content: {
        width: '100%',
        backgroundColor:'#b0bec5',
        padding:'28px 36px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:'110px',
    },
    p:{
        fontSize:'11px',
        color: '#fff',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '300',
        lineHeight: '16px',
        margin:'0',
        userSelect: 'none',
    },
    link:{
        fontSize:'12px',
        color: '#fff',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '500',
        lineHeight: '16px',
        margin:'0',
        userSelect: 'none',
        textDecoration: 'none'
    },
    '@media (max-width: 991px)': { 
        content:{padding:'28px 10px',},
    },
});

class FooterSection extends React.Component {


    onClick(){
        //window.location.href='http://facebook.com';
        window.open('http://facebook.com','_blank');
    }

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <div className={classes.footerText}>
                <p className={classes.p} >Application is running on BETA version.</p>
                <p className={classes.p} >LTD Wohoo © 2019 Tbilisi, Georgia.</p>
            </div>
            <div className={classes.social}>
                <IconButton onClick={this.onClick.bind(this)} color="primary" className={classes.button} component="span">
                    <img className={classes.icon} alt="icon" src={Facebook}></img>
                </IconButton>
                <IconButton onClick={this.onClick.bind(this)} color="primary" className={classes.button} component="span">
                    <img className={classes.icon} alt="icon" src={Instagram}></img>
                </IconButton>
                <IconButton onClick={this.onClick.bind(this)} color="primary" className={classes.button} component="span">
                    <img className={classes.icon} alt="icon" src={Vkontakte}></img>
                </IconButton>
            </div>
        </div>
    );
  }
}

FooterSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterSection);
