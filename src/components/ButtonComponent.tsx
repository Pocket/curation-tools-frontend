import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  body: {
    margin :0,
    padding: "20px"
  },
  column:{
    display: "flex",
    flexDirection: "column",
    marginTop: "10px"
    

  },
  nav: {
    display: "flex",
    justifyContent: "flex-end"
    
    
  },
  threebuttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  },
  positive : {
    backgroundColor:"  #17bbbc",
    border: "1px solid  #17bbbc",
    padding: "10px",
    borderRadius: "4px",
    color: "white",
    "&:hover":{
      backgroundColor: "white",
      color: "#17bbbc"
    }
  },
  negative : {
    backgroundColor:" #b74a0e",
    border: "1px solid #b74a0e",
    marginRight: "20px",
    padding: "10px",
    borderRadius: "4px",
    color: "white",
    "&:hover":{
      backgroundColor: "white",
      color: "#b74a0e"
    }
    
  }, 
  neutral : {
    backgroundColor:" #686767",
    border: "1px solid #686767",
    marginRight: "20px",
    padding: "10px",
    borderRadius: "4px",
    color: "white",
    "&:hover":{
      backgroundColor: "white",
      color: "#686767"
    }
  },
  hollow: {
    backgroundColor: "white",
    color: "#17bbbc",
    padding: "10px",
    marginLeft: "20px",
    border: "1px solid #17bbbc",
  }
}); 

function ButtonComponent() {
  const classes = useStyles();
    return (
<div className= {classes.column}>
         <div className = {classes.nav}>
           <Button className={classes.positive} > Add Story </Button>
          <Button className={classes.hollow} > Log Out </Button>
        </div>
        <div className = {classes.threebuttons}>
        <Button className={classes.negative} > Reject </Button>
        <Button className={classes.neutral} > Snooze </Button>
        <Button className={classes.positive} > Edit & Approve </Button>
      </div>
      </div>
    );
  }
  
  export default ButtonComponent;