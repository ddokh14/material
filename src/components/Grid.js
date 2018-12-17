import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'
import { Scrollbars } from 'react-custom-scrollbars';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  },
  gridWrapper: {
      overflow: 'auto',
      flexGrow: 1,
  },
  grid: {
    margin: 0,
    width: '100%',
    justifyContent: 'space-around',
    '&:after': {
        content: "",
        flex: 'auto',
    },
  },
  toolbar: theme.mixins.toolbar,
});

class DriversGrid extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Scrollbars 
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}
            >
            <div className={classes.gridWrapper}>
            <Grid container className={classes.grid} spacing={16}>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((index) => 
                    <Grid item key={index} xs={12} sm={6} lg={4}>
                    <Card/>
                    </Grid>
                )}
            </Grid>
            </div>
            </Scrollbars>
        </div>
    );
  }
}

DriversGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DriversGrid);
