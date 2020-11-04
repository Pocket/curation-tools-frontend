import React from "react";
import { Button as BaseButtton} from "@material-ui/core";
import { ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Green from "@material-ui/core/colors/green"

 
interface Props extends ButtonProps {
 text: string;
 buttonType?: "positive" ;
}
 
const GetStyles = makeStyles((theme) => ({
 positive: {
   background: `${Green[500]}`,
   color: "#fff",
   "&:hover": {
     background: `${Green[700]}`
   }
 }
}));
 
export const Button = ({ buttonType, ...props }: Props) => {
 return (
   <BaseButtton
     className={buttonType && GetStyles()[buttonType]}
     variant={props.variant}
     {...props}
   >
     {props.text}
   </BaseButtton>
 );
};
export default Button;