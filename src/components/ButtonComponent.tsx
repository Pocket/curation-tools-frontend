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
    color: "white",
    "&:hover": {
      background:"darkgreen",
      boxShadow:" 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
  },

  negative: {
    background: "red",
    color: "white",
    marginRight: "10px",
    "&:hover": {
      background:"darkred",
      boxShadow:" 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
  },

  neutral: {
    background: "darkgrey",
    color: "white",
    marginRight: "10px",
    "&:hover": {
      background:"grey",
      boxShadow:" 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
  },

  hollow: {
    border: "1px solid green",
    color: "green",
    marginLeft: "10px",
    "&:hover": {
    boxShadow:" 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
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