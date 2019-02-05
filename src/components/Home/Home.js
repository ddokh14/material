import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainSection from './MainSection';
import SmallSection from './SmallSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import DriversSection from './DriversSection';
import FooterSection from './FooterSection';
import UpperFooterSection from './UpperFooterSection';



const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        width: '100%',
        backgroundColor:'#f5f5f5',
    },
});

class Home extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.content}>
            <MainSection/>
            <SmallSection/>
            <AboutSection/>
            <DriversSection/>
            <ContactSection/>
            <UpperFooterSection/>
            <FooterSection/>
        </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
