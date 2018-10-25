import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DateRange from '@material-ui/icons/DateRange';
import Commute from '@material-ui/icons/Commute';
import Language from '@material-ui/icons/Language';
import LocalGasStation from '@material-ui/icons/LocalGasStation';
import Settings from '@material-ui/icons/Settings';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });

function SideFilerButtons(props) {

  return (
        <MuiThemeProvider theme={theme}>
          <List component="nav">

            <ListItem button>
              <ListItemIcon>
                <DateRange />
              </ListItemIcon>
              <ListItemText primary="Date" secondary="Choose the pick up date"/>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Commute />
              </ListItemIcon>
              <ListItemText primary="Vehicle" secondary="Choose the vehicle type"/>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocalGasStation />
              </ListItemIcon>
              <ListItemText primary="Fuel" secondary="Choose the fuel type"/>
            </ListItem>


            <ListItem button>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText primary="Language" secondary="Choose the language"/>
            </ListItem>


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

export default SideFilerButtons;
