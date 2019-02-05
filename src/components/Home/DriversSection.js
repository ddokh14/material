import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tour from './Tour';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const styles = theme => ({
    content:{
        minHeight: '100vh',
        padding: '60px 5%',
        boxSizing: 'border-box',
        display:'flex',
        alignItems: 'center',
        flexDirection:'column'
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
    drivers:{
        padding: '60px 0',
        width:'100%',
        position:'relative',
    },
    button:{
        width: 'fit-content',
    },
    cardWrapper:{
        padding:"0 15px",
        boxSizing: "border-box",
        outline:"none"
    },
    '@media (max-width: 991px)': { 
        h1:{
            fontSize: '25px',
        },
        p:{
            fontSize: '16px',
            width: '100%',
        },
        content:{
            minHeight:'auto'
        }
    },
});

class DriversSection extends React.Component {

    render() {
    const { classes } = this.props;
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
    };


    return (
        <div className={classes.content}>
            <h1 className={classes.h1}>Look up for drivers</h1>
            <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            <div className={classes.drivers}>
                <Slider {...settings}>
                    <div className={classes.cardWrapper}><Tour/></div>
                    <div className={classes.cardWrapper}><Tour/></div>
                    <div className={classes.cardWrapper}><Tour/></div>
                    <div className={classes.cardWrapper}><Tour/></div>
                    <div className={classes.cardWrapper}><Tour/></div>
                </Slider>
            </div>
            <Button variant="contained" color="primary" className={classes.button}>
                Explore
            </Button>
        </div>
    );
  }
}

DriversSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DriversSection);
