import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

interface Props extends ButtonProps {
  buttonType:
    | 'positive' // solid green
    | 'negative' // solid red/brown
    | 'neutral' // solid grey
    | 'hollow' // white with green border
    | 'hollow-neutral'; // white with grey border
  buttonRef?: React.RefObject<HTMLButtonElement>;
  component?: any;
  to?: string;
}

export const Button = ({
  buttonType,
  size = 'medium',
  children,
  ...props
}: Props): JSX.Element => {
  const variant: ButtonProps['variant'] = [
    'positive',
    'negative',
    'neutral',
  ].includes(buttonType)
    ? 'contained'
    : 'outlined';

  let color: ButtonProps['color'] = ['positive', 'hollow'].includes(buttonType)
    ? 'primary'
    : undefined;
  color = buttonType === 'negative' ? 'secondary' : color;

  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      ref={props.buttonRef}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    'positive',
    'negative',
    'neutral',
    'hollow',
    'hollow-neutral',
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  buttonType: 'positive',
  size: 'medium',
  children: 'Submit',
};
