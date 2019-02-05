import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import App from './app.png';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    content:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        padding: '40px',
    },
    aboutCard:{
        width:'48%',
        height:'200px',
        backgroundColor: 'white',
        boxShadow: '1px 1px 2px 1px rgba(219,218,219,0.5)',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    half:{
        width:'50%',
        padding: '5% 0 5% 10%',
    },
    image:{
        maxWidth: '100%',
        height: 'auto',
        width:'70%',
        margin:'auto',
        userSelect: 'none',
        userDrag: 'none'
    },
    text:{
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        lineHeight: '1.2',
        userSelect: 'none',
    },
    button:{
        width: 'fit-content',
        marginTop: '10px'
    },
    '@media (max-width: 991px)': { 
        content:{
            flexDirection: 'column',
        },
        aboutCard:{
            width:'100%',
            marginBottom: '20px',
        },
        text:{
            fontSize: '14px'
        },
        button:{
            marginTop:'5px',
            fontSize: '10px'
        }
    },
});

class SmallSection extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <div className={classes.aboutCard}>
                <div className={classes.half}>
                    <p className={classes.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur.
                    </p>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        More
                    </Button>
                </div>
                <div className={classes.half}>
                    <img className={classes.image} alt='app' src={App}/>
                </div>
            </div>
            
            
            <div className={classes.aboutCard}>
                <div className={classes.half}>
                    <p className={classes.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur.
                    </p>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        For Drivers
                    </Button>
                </div>
                <div className={classes.half}>
                    <img className={classes.image} alt='app' src="https://beta.techcrunch.com/wp-content/uploads/2014/08/uber-navigation.png?w=249"/>
                </div>
            </div>
        </div>
    );
  }
}

SmallSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallSection);
