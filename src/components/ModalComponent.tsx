import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 300,
      height:70,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      justifyContent:"center",
      alignItems: "center"

    },
  }),
);


export const ModalComponent: React.FC<ModalProps> = ({ title, isOpen, children }) => {
    const classes = useStyles(); 
    const [modalStyle] = React.useState(getModalStyle);
return isOpen ? (
    <div style={modalStyle} className={classes.paper}>
       <div id="simple-modal-title">
          {title}
        </div>
          { children }
      </div>
  ) : null;
};