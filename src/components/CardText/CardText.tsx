import React from 'react';
import PropTypes from 'prop-types';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    padding: 0,
  },
  headline: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  url: {
    color: theme.palette.grey[900],
    textDecoration: 'none',
  },
}));

export interface CardTextProps {
  /**
   * The name of the publisher
   */
  publisher: string;

  /**
   * The name of the author
   */
  author: string;

  /**
   * The URL of the story
   */
  url: string;

  /**
   * The title of the story
   */
  title: string;

  /**
   * A short summary of the story
   */
  excerpt: string;
}

/**
 * A card component that displays information about a story/news article.
 *
 * @param props: CardTextProps
 * @returns JSX.Element The rendered card
 */
export const CardText: React.FC<CardTextProps> = (props): JSX.Element => {
  const { publisher, author, url, title, excerpt } = props;
  const classes = useStyles();

  return (
    <CardContent className={classes.root}>
      <Typography
        className={classes.headline}
        variant="h3"
        align="left"
        gutterBottom
      >
        <a className={classes.url} href={url}>
          {title}
        </a>
      </Typography>
      <Typography
        component="p"
        align="left"
        color="textSecondary"
        display="block"
        gutterBottom
      >
        <Typography variant="caption" component="span">
          {publisher}
        </Typography>{' '}
        &middot;{' '}
        <Typography variant="caption" component="span">
          {author}
        </Typography>
      </Typography>
      <Typography variant="body1" component="p" align="left">
        {excerpt}
      </Typography>
    </CardContent>
  );
};

CardText.propTypes = {
  publisher: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
