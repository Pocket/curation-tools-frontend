import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    /* note: these classes are only needed to demo the component on the home page */
    maxWidth: 375,
    margin: "auto",
    border: "1px solid #cccccc",
    /* end of demo classes */
    borderRadius: 0,
    boxShadow: "none",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  url: {
    color: "#000000",
    textDecoration: "none",
  },
});

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
   * The URL of the article
   */
  url: string;
  /**
   * The title of the article
   */
  title: string;
  /**
   * A short summary of the article
   */
  shortDesc: string;
}

/**
 * A card component that displays information about a news article.
 *
 * @param props: CardTextProps
 * @returns JSX.Element The rendered card
 */
export const CardText = (props: CardTextProps): JSX.Element => {
  const { publisher, author, url, title, shortDesc } = props;
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <Typography
          className={classes.title}
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
          </Typography>{" "}
          &middot;{" "}
          <Typography variant="caption" component="span">
            {author}
          </Typography>
        </Typography>
        <Typography variant="body1" component="p" align="left">
          {shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

CardText.propTypes = {
  publisher: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
};

CardText.defaultProps = {
  publisher: "Publisher",
  author: "Author",
  url: "https://www.test.com/",
  title: "The title of this article is missing",
  shortDesc: "This article does not have a description provided.",
};
