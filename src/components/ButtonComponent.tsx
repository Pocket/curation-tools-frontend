import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as BaseButton } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core";
import Green from "@material-ui/core/colors/green";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Grey from "@material-ui/core/colors/grey";

interface Props extends ButtonProps {
  text:string;
  buttonType?: "positive" | "hollow" | "neutral";
}
const GetStyles = makeStyles((theme) => ({
  positive: { 
    background: `${Green[500]}`,
    color: "#fff",
    "&:hover": {
  	      border: `1px solid ${Green[700]}`,
        background: "Green"
      }},
  hollow: {
    border: `1px solid ${fade(Green[500], 0.5)}`,
    color: "Green",
    "&:hover": {
      border: `1px solid ${Green[500]}`
    }},
  neutral: {
    background: `${Grey[500]}`,
    color: "#fff",
    "&:hover": {
  	      border: `1px solid ${Grey[700]}`,
        background: "Grey"
      }},
}));

export const Button = ({ buttonType, ...props }: Props) => {
  return (
    <BaseButton
    className={buttonType && GetStyles()[buttonType]}
    variant={props.variant}
    size={props.size}
    color={props.color}
    {...props}>
      {props.text}
    </BaseButton>
  );
};