import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    mainSection:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
    },
    MainSectionTitle:{
        width:'50%',
        display:'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:'10%',
        boxSizing: 'border-box',
    },
    MainSectionImage:{
        backgroundImage: 'url("https://www.fresh-meat.ro/wp-content/uploads/2017/10/snow-gudauri-carving-2018-set-1-1-transparen-reverse.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
        width:'50%',
        height: '100%',
    },
    h1:{
        fontSize:'64px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        fontWeight: '300',
        lineHeight: '1.2',
        margin:'0',
        userSelect: 'none',
    },
    h6:{
        maxWidth:'80%',
        fontSize: '1.375rem',
        fontWeight:'300',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        lineHeight: '1.2',
        userSelect: 'none',
    },
    button:{
        width: 'fit-content',
        marginTop: '50px'
    },
    '@media (max-width: 991px)': { 
        h1:{
            fontSize: '25px',
        },
        h6:{
            fontSize: '16px',
            maxWidth:'100%',
            padding:'0 10%'
        },
        button:{
            marginTop: '20px'
        },
        MainSectionTitle:{
            width:'100%',
            textAlign:'center',
            paddingLeft:'0%',
            alignItems:'center'
        },
        MainSectionImage:{
            width:0
        }
    },
});

class MainSection extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.mainSection}>
            <div className={classes.MainSectionTitle}>
                <h1 className={classes.h1}>Wohoo! Welcome to the App</h1>
                <p className={classes.h6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <Button variant="contained" color="primary" className={classes.button}>
                    Explore
                </Button>
            </div>
            <div className={classes.MainSectionImage}></div>
        </div>
    );
  }
}

MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSection);
