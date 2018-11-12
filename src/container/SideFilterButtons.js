import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DateRange from '@material-ui/icons/DateRange';
import Language from '@material-ui/icons/Language';
import LocalGasStation from '@material-ui/icons/LocalGasStation';
import Settings from '@material-ui/icons/Settings';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import DatePicker from 'material-ui-pickers/DatePicker';
import { withStyles } from '@material-ui/core/styles';
import format from 'date-fns/format';
import RadioDialog from './RadioDialog';
import Commute from '@material-ui/icons/Commute';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });


  const styles = theme => ({
    root: {
      display: 'none'
    },
  });

class SideFilerButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDate: "",
    };
  }
  
  getformatedDate = (date) => {
    return format(date, 'd MMM YYYY');
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: this.getformatedDate(date) });
  }

  openPicker = (e) => {
    // do not pass Event for default pickers
    this.picker.open(e);
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;

    return (
          <MuiThemeProvider theme={theme}>
            <List component="nav">

              <DatePicker
                disablePast
                value={selectedDate}
                onChange={this.handleDateChange}
                classes= {{root: classes.root}}
                ref={(node) => {
                  this.picker = node;
                }}
              />

              <ListItem button onClick={this.openPicker}>
                <ListItemIcon>
                  <DateRange />
                </ListItemIcon>
                <ListItemText primary="Date" secondary={selectedDate ? selectedDate.toString() : "Choose the trip date"}/>
              </ListItem>

              <RadioDialog name = "Vehicle">
                <Commute />
              </RadioDialog>

              <RadioDialog name = "Fuel">
                <LocalGasStation />
              </RadioDialog>

              <RadioDialog name = "Language">
                <Language />
              </RadioDialog>

              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Extra" secondary="Choose the extra options"/>
              </ListItem>

            </List>
          </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(SideFilerButtons);
