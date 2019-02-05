import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import App from './app.png';

const styles = theme => ({
    content: {
        width: '100%',
        MinHeight: '100vh',
        padding: '60px 10%',
        boxSizing: 'border-box'
    },
    image:{
        width:'100%',
        height:'auto'
    },
    imageWrapper:{
        width:'30%',
        userSelect: 'none',
        userDrag: 'none'
    },
    aboutContent:{
        width:'50%',
        userSelect: 'none',
    },
    h1:{
        fontSize: '30px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '400',
        lineHeight: '1.6',
        margin:'0',
        marginBottom:'10px',
        userSelect: 'none',
        width: '100%',
        textAlign:'center'
    },
    aboutHeading:{
        fontSize: '46px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '300',
        lineHeight: '1.6',
        margin:'0',
        textAlign:'left',
        userSelect: 'none',
    },
    p:{
        fontSize: '22px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '300',
        lineHeight: '1.5',
        userSelect: 'none',
        width: '70%',
        textAlign:'center',
        margin:'auto'
    },
    aboutParagtaph:{
        fontSize: '22px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '300',
        lineHeight: '1.5',
        userSelect: 'none',
        textAlign: 'left'
    },
    about:{
        paddingTop: '60px',
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'left !important',
    },
    '@media (max-width: 991px)': { 
        h1:{
            fontSize: '25px',
        },
        p:{
            fontSize: '16px',
            width: '100%',
        },
        about:{
            flexDirection: 'column',
        },
        aboutParagtaph:{
            textAlign: 'center',
            fontSize: '16px',
        },
        aboutContent:{
            width:'100%'
        },
        aboutHeading:{
            fontSize: '26px',
            textAlign:'center',
        }

    },
});

class AboutSection extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
          <h1 className={classes.h1}>Wohoo can help you in planning your trip</h1>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <div className={classes.about}>
            <div className={classes.imageWrapper}><img className={classes.image} alt="blabla" src={App}></img></div>
            <div className={classes.aboutContent}>
                <h1 className={classes.aboutHeading}>What is Wohoo?</h1>
                <p className={classes.aboutParagtaph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
          </div>  
        </div>
    );
  }
}

AboutSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutSection);
