import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonInput from '../components/ButtonInput';


const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: "8px 0",
    position: 'relative',
  },
});

class RoutePlanner extends React.Component {

    constructor(){
      super();
      this.id = 0;
      this.state = {
        locations: []
      }
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleAdd(){
      this.setState({
        locations: [...this.state.locations, {id: this.id, locId: -1}]
      })
      this.id++;
      console.log(this.state.locations);
    }

    handleChange(event, locId){
      
    }

    handleRemove(event){
      const filteredLocations = this.state.locations.filter(
          location =>
              !(parseInt(location.id,10) === parseInt(event.currentTarget.id,10))
      );
      this.setState({
          locations: filteredLocations
      });
      console.log(this.state.locations);
    }

    render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>  
          <ButtonInput suggestions = {suggestions} name="From" placeholder="Enter pick up location"/>
          {this.state.locations.map((location) => 
            <ButtonInput key={location.id} id={location.id} onClick={this.handleRemove} suggestions = {suggestions} name="Point" placeholder="Enter location" del/>
          )}
          <ButtonInput onClick={this.handleAdd} suggestions = {suggestions} name="To" placeholder="Enter drop off location" last/>
        </div>
    );
  }
}

export default withStyles(styles)(RoutePlanner);
