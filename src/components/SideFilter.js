import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SideFilerButtons from '../container/SideFilterButtons';
import RoutePlanner from '../container/RoutePlanner';
import { Scrollbars } from 'react-custom-scrollbars';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const drawerWidth = 350;

const styles = theme => ({
  root: {
    height: '100%',
    overflow: 'hidden',
  },
  paper:{
    width: drawerWidth,
    position: 'relative',
  },
  filter:{
    overflow:'auto',
  },
  toolbar: theme.mixins.toolbar,
});

function SideFiler(props) {
  const { classes, width, open, onClose  } = props;
  const drawer = (
    <Fragment>
      {isWidthUp('md', width) ? <div className={classes.toolbar}/> : null }
      <Scrollbars
          autoHide
          // Hide delay in ms
          autoHideTimeout={500}
          // Duration for hide animation in ms.
          autoHideDuration={200}
        >
        <div className={classes.filter}>
          <RoutePlanner/>
          <SideFilerButtons/>
        </div>
      </Scrollbars>
    </Fragment>
  );

  return (
      <Fragment>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.root}
            classes = {{
                paper: classes.paper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden mdUp>  
        <Drawer
          variant="temporary"
          open = {open}
          onClose = {onClose}
          className={classes.root}
          classes = {{
              paper: classes.paper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

SideFiler.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(SideFiler));
