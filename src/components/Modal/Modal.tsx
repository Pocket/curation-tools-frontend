import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Dialog } from "@material-ui/core";

interface ModalProps {
  title: string;
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 350,
      height:70,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      justifyContent:"center",
      alignItems: "center"
    },  
    picture: {
      height:100
    }
  }),
);
export const Modal: React.FC<ModalProps> = ({ title, isOpen, image, onClose}) => {
    const classes = useStyles(); 
    return (
      <Dialog open={isOpen} onBackdropClick={onClose}>
          <div className={classes.paper}>
            <div id="simple-modal-title"> {title} </div>
            <img src={image} className={classes.picture} alt="loading gif to show that data is loading"/>
          </div>
        </Dialog>
  
  )
};