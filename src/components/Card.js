import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Star from '@material-ui/icons/Star';
import AirlineSeatReclineExtra from '@material-ui/icons/AirlineSeatReclineExtra';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LocalGasStation from '@material-ui/icons/LocalGasStation';
import Language from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  card: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    padding: '16px 12px',
  },
  avatar: {
    backgroundColor: red[500],
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: '2px solid white',
  },
  button:{
    marginLeft: 'auto',
  },
  iconButton: {
    marginRight: '10px',
  },
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
});

class RecipeReviewCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar 
                aria-label="Avatar" 
                className={classes.avatar} 
                src="https://gotrip.ge/api/image/get.php?id=5b76fe24c5eb7a063f4a4583"
              />
            }
            action={
              <Tooltip title="EN,RU,GE" classes={{ tooltip: classes.lightTooltip }} placement="left">
                <IconButton>
                  <Language />
                </IconButton>
              </Tooltip>
            }
            title="Mazda Ragaca"
            subheader="Gocha Chertkoevi"
          />
          <CardMedia
            className={classes.media}
            image="https://gotrip.ge/api/image/get.php?id=5bcca1a0c5eb7a28c0045e32"
            title="Contemplative Reptile"
          />
          <CardActions className={classes.actions} disableActionSpacing>
              <IconButton className={classes.iconButton}> 
                <Badge classes={{ badge: classes.badge }} badgeContent={5} color="primary">
                  <Star />
                </Badge>
              </IconButton>
              <IconButton className={classes.iconButton}>
                <Badge classes={{ badge: classes.badge }} badgeContent={4} color="primary">
                  <AirlineSeatReclineExtra />
                </Badge>
              </IconButton>
              <IconButton className={classes.iconButton}> 
                <Badge classes={{ badge: classes.badge }} badgeContent={"G"} color="primary">
                  <LocalGasStation />
                </Badge>
              </IconButton>
              <Button className={classes.button} size="small" color="primary">
                Book 203USD
              </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
