import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContent: {
    maxWidth: 768,
  },
});

interface MainContentWrapperProps {
  /**
   * Any content that needs to be wrapped
   */
  children: JSX.Element | JSX.Element[];
}

/**
 * Wraps any children passed to it into a fixed width, centered container
 *
 * @param props: MainContentWrapperProps
 * @returns JSX.Element Wrapped content
 */
export const MainContentWrapper: React.FC<MainContentWrapperProps> = (
  props
): JSX.Element => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContent}>{props.children}</Container>
  );
};
