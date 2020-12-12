import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton, ButtonProps } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Green from '@material-ui/core/colors/green';
import Grey from '@material-ui/core/colors/grey';

interface Props extends ButtonProps {
  buttonType?: 'positive' | 'hollow' | 'neutral';
  variant: 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
}

const getStyles = makeStyles(() => ({
  positive: {
    background: `${Green[500]}`,
    color: '#fff',
    '&:hover': {
      background: `${Green[700]}`,
    },
  },
  hollow: {
    border: `1px solid ${fade(Green[500], 0.5)}`,
    color: 'Green',
  },
  neutral: {
    background: `${Grey[500]}`,
    color: '#fff',
    '&:hover': {
      background: `${Grey[700]}`,
    },
  },
}));

export const Button = ({ buttonType, ...props }: Props): JSX.Element => {
  return (
    <BaseButton className={buttonType && getStyles()[buttonType]} {...props}>
      {props.children}
    </BaseButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['positive', 'hollow', 'neutral']),
  variant: PropTypes.oneOf(['contained', 'outlined']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  children: 'Submit',
};
