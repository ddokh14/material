import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

const customStyles = {
  container: () => ({
    width: '100%',
    height: '71px',
    flexGrow: '2',
    cursor: 'pointer !important',
  }),
  control: () => ({
    color:'rgba(255,255,255,0.65)',
    fontSize: '14px',
    paddingLeft: '80px',
    boxSizing: 'border-box',
    display:'flex',
    justifyContent:'center',
    width:'100%',
    height:'100%',
  }),
  singleValue: (provided) => ({
    ...provided,
    color:'rgba(255,255,255,0.65)',
    paddingTop: '28px',
    margin: 0,
  }),
  valueContainer: () => ({
    padding: '0',
    width:'100%',
    color:'white',
    position:'relative',
    boxAlign:'center',
    display: 'flex',
    alignItems:'center',
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }),
  input: () => ({
    color:'rgba(255,255,255,0.65)',
    paddingBottom: '2px',
    paddingTop: '2px',
    visibility: 'visible',
    boxSizing: 'border-box',
    marginTop: '28px',
  }),
  placeholder: () => ({
    color:'rgba(255,255,255,0.65)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    boxSizing: 'border-box',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    lineHight: '1.5',
    letterSpacing: '0.01071em',
    paddingTop: '28px',
  }),
  
  dropdownIndicator: () => ({
    display: 'none',
  }), 
  indicatorsContainer: () => ({
    display: 'none',
  }), 
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex:1000,
    borderRadius: 0,
    marginTop: 0,
  }), 
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: 'white',
    padding: '15px',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color:'rgba(0, 0, 0, 0.54)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    }
  }),
}


const styles = theme => ({
  inputLabel:{
    position: 'absolute',
    left: '80px',
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.75',
    letterSpacing: '0.00938em',
    top: '11px',
  },
})

class InputSuggest extends Component {
 
  render() {
    const { classes, placeholder, suggestions, name} = this.props;

    return (
      <Fragment>
        <label className={classes.inputLabel}>{name}</label>
        <Select
          styles={customStyles}
          placeholder={placeholder}
          options={suggestions}
        />
      </Fragment>
    );
  }
}


export default withStyles(styles)(InputSuggest);