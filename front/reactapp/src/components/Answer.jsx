// import Button from '@mui/material/Button';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const Answer = (props) => {
  return (
    <Button variant='contained' color='primary'>
      {props.content}
    </Button>
  );
};

export default Answer;
