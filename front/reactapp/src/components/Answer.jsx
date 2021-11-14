// import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import Button from "@material-ui/core/Button";

const Answer = (props) => {
  const useStyles = makeStyles({
    button: {
      borderColor: "#FFB549",
      color: "#FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff",
      },
    },
  });
  const classes = useStyles();
  return (
    <Button
      variant='outlined'
      onClick={() => props.select(props.content, props.nextId)}
      className={classes.button}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
