import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as BaseButton } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core";

interface Props extends ButtonProps {
  text:string;
  buttonType?: "positive" | "negative" | "neutral" | "hollow";
}

const GetStyles = makeStyles((theme) => ({
  
  positive: {
    background: "green",
    color: "white"
  },

  negative: {
    background: "red",
    color: "white",
    marginRight: "10px"
  },

  neutral: {
    background: "grey",
    color: "white",
    marginRight: "10px"
  },

  hollow: {
    border: "1px solid green",
    color: "green",
    marginLeft: "10px"
  }

}));

export const Button = ({ buttonType, ...props }: Props) => {
  return (
    <BaseButton
    className={buttonType && GetStyles()[buttonType]}
    variant={props.variant}
    size={props.size}
    {...props}>
      {props.text}
    </BaseButton>
  );
};