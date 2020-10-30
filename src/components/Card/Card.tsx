import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: 'auto',
            maxWidth: 500,
            padding: 10,
        },
        leftColumn: {
            width: '30%',
        },
        rightColumn: {
            width: '70%',
        },
        bottomLeftCell: {
            alignSelf: 'flex-end',
            paddingBottom: 0,
        },
        bottomRightCell: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        cardTitle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        bottomRightButtonsContainer: {
            '& > *': {
                margin: '0 5px',
            },
        },
    })
);

interface PocketCardProps {
    imagePath: string;
}

const PocketCard: React.FC<PocketCardProps> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container spacing={2}>
                <Grid item className={classes.leftColumn}>
                    <CardMedia component="img" image={props.imagePath} />
                </Grid>
                <Grid item className={classes.rightColumn}>
                    <Typography
                        variant="h3"
                        align="left"
                        className={classes.cardTitle}
                    >
                        Card text component title
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        align="left"
                        gutterBottom={true}
                    >
                        Publisher · Author
                    </Typography>
                    <Typography variant="subtitle1" align="left">
                        Description: Donec sed tincidunt tortor. Sed eget
                        fermentum neque. Duis faucibus lorem non.
                    </Typography>
                </Grid>
                <Grid
                    item
                    className={`${classes.leftColumn} ${classes.bottomLeftCell}`}
                >
                    <Typography variant="subtitle1" align="left">
                        Tag 1 · Tag 2
                    </Typography>
                </Grid>
                <Grid
                    item
                    className={`${classes.rightColumn} ${classes.bottomRightCell}`}
                >
                    <div className={classes.bottomRightButtonsContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            disableElevation
                        >
                            Reject
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            disableElevation
                        >
                            Snooze
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            disableElevation
                        >
                            Edit & Approve
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
};

export default PocketCard;
