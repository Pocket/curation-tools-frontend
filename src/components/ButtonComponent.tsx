import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Green from "@material-ui/core/colors/green";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(theme => ({
  root:{
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  positive: {
    background: `${Green[500]}`,
    color: "#fff",
    
    "&:hover": {
      border: `1px solid ${Green[700]}`,
      background: "Green"
    }
    },
    positiveOutlined: {
      border: `1px solid ${fade(Green[500], 0.5)}`,
      "&:hover": {
        border: `1px solid ${Green[500]}`
      }
    }
})
);
    
function ButtonComponent( ) {
  const classes = useStyles();
  return(
  <div className={classes.root}>
    <div className={classes.root}>
    <Button variant="contained" className={classes.positive}>  Add Story </Button>
    <Button variant="outlined" className={classes.positiveOutlined}>  Log Out </Button>
    </div>
    <div className={classes.root}>
    <Button variant="contained" color="secondary"> Reject </Button>
    <Button variant="contained"> Snooze </Button>
    <Button variant="contained" className={classes.positive}>
      Edit & Approve
    </Button>
    </div>
  </div>
  );
  }
  
  export default ButtonComponent;