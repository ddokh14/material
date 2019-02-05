import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { relative, isAbsolute } from 'path';

const styles = theme => ({
    content: {
        backgroundColor:'white',
        height:'100px',
        position:'relative',
        paddingTop: '100%',
        boxSizing:'border-box',
        overflow:'hidden'
    },
    image:{
        position:'absolute',
        top:'50%',
        minWidth:'100%',
        minHeight:'100%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    },
    overlay:{
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.35)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        textShadow: '1px 1px #333',
        fontSize: '30px',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    }
});

class Tour extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <img className={classes.image} src="http://georgiavoyage.ge/wp-content/uploads/2016/06/gudauri.jpg" alt="tour"></img>
            <div className={classes.overlay}>
                <p className={classes.title}>Gudauri</p>
            </div>
        </div>
    );
  }
}

Tour.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tour);
