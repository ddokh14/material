/* eslint-disable react/no-multi-comp */
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const options = [
  'Any',
  'Sedan',
  'Jeep',
  'Van',
];

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    '& h6': {
      color: 'white !important',
    },
  },
  paper: {
    minWidth: '310px',
    maxHeight: 435,
  },
  content: {
    padding: '24px',
  }
});

class DialogPopUp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
    };
  }

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleEntering = () => {
    this.radioGroupRef.focus();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes,value, open, title } = this.props;

    return (
      <Dialog
        classes = {{ paper: classes.paper}}
        open={open}
        onClose={this.handleCancel}
        value={value}
      >
        <DialogTitle classes = {{root: classes.root}} id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent className={classes.content}>
          <RadioGroup
            ref={ref => {
              this.radioGroupRef = ref;
            }}
            aria-label="vehType"
            name="vehtype"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {options.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio color="primary"/>} label={option} />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogPopUp.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

export default withStyles(styles)(DialogPopUp);
