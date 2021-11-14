import * as React from 'react';
import TextField from '@mui/material/TextField';

const Textinput = (props) => {
  return (
    <TextField
      label={props.label}
      variant='standard'
      fullWidth={true}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default Textinput;
