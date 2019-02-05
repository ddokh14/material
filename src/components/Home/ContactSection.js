import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        width: '100%',
        backgroundColor:'white',
        padding:'60px 0',

    },
    p:{
        fontSize: '16px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        lineHeight: '1.5',
        width:'80%',
        margin:'auto'
    },
    link:{
        fontSize: '16px',
        color: '#263238',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        lineHeight: '1.5',
        textDecoration: 'none',
        fontWeight: '500'
    }
});

class ContactSection extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <p className={classes.p}>*If you have any questions, please do not hesitate to <a className={classes.link} href="mailto:contact@wohoo.ge?Subject=Hello%20Wohoo">email us</a> or just call us at <a className={classes.link} href="tel:+995555555555">(+995) 555-55-55-55</a>.</p>
        </div>
    );
  }
}

ContactSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactSection);
