import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      className={classes.textfield}
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
          underline: classes.underline,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value,suggestions) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}


const styles = theme => ({
  root: {
    height: 71,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  underline: {
    '&:before': {
        border: 'none !important',
        content: "''",
      },
    '&:after': {
      border: 'none !important',
      content: "''",

    },
    '&:hover': {
        '&:before': {},
        '&:after': {},
      },
  },
  container: {
    width:'100%',
    height: '100%',
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    marginTop: '0',
    left: 0,
    right: 0,
  },
  textfield: {
    height: '100%',
  },
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
  inputRoot: {
    flexWrap: 'wrap',
    color:'rgba(255,255,255,0.65)',
    flexGrow: '2',
    fontSize: '14px',
    paddingLeft: '80px',
    height:'100%',
    width:'100%',
    boxSizing: 'border-box',
    cursor: 'pointer !important',
  },
  inputInput: {
    width: '100%',
    cursor: 'pointer !important',
    padding:'28px 0 0 0',
  },
  divider: {
   
  },
});

function InputSuggest(props) {
  const { classes, placeholder, suggestions, name} = props;

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => (
          <div className={classes.container}>
            <label className={classes.inputLabel}>{name}</label>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: placeholder,
              }),
            })}
            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue,suggestions).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    </div>
  );
}

InputSuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputSuggest);
