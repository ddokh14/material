import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SideFilerButtons from './SideFilterButtons';
import RoutePlanner from './RoutePlanner';
import { Scrollbars } from 'react-custom-scrollbars';

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
  const { classes } = props;

  return (
      <Hidden smDown>
        
        <Drawer
          variant="permanent"
          open
          className={classes.root}
          classes = {{
              paper: classes.paper
          }}
        >
          <div className={classes.toolbar} />
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
        </Drawer>
      </Hidden>
  );
}

SideFiler.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideFiler);
