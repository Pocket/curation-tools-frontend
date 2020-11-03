import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';

/**
 * Creation of specific styles for specific class names.
 */
const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: 'white',
        boxShadow: 'none',
    },
    tabs: {
        boxShadow: '0px 2px 3px -3px black',
    },
}));

/**
 * Creation of a customized "Tab" Material-UI component.
 * Creation of a customized "Badge" Material-UI component.
 */
const StyledTab = withStyles({
    root: {
        textTransform: 'none',
        fontWeight: 600,
        '&.Mui-selected span.MuiBadge-badge': {
            backgroundColor: '#3F51B5',
        },
    },
})(Tab);

const StyledBadge = withStyles({
    anchorOriginTopRightRectangle: {
        transform: 'translate(115%, 15%)',
    },
    colorSecondary: {
        backgroundColor: '#777777',
    },
})(Badge);

/**
 * Creation of TypeScript interfaces.
 */
interface TabContent {
    NameTab: string;
    BadgeTab: number;
}

interface TabNavigationProps {
    children: Array<TabContent>;
}

/**
 * Creation of the "TabsNavigation" component.
 */
const TabsNavigation: React.FC<TabNavigationProps> = (props) => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    /**
     * The component creates as many tabs as elements indicated in the child array.
     *
     * Each element of the array consists of an object. Each of those objects should have 2
     * properties:
     *
     * 1.- The name of the tab ("NameTab");
     * 2.- he number contained in the badge ("BadgeTab").
     */
    const setTabs = () => {
        const tabs = [];
        for (let i = 0; i < props.children.length; i++) {
            tabs.push(
                <StyledTab
                    label={
                        <StyledBadge
                            badgeContent={props.children[i].BadgeTab}
                            max={999}
                            color="secondary"
                        >
                            {props.children[i].NameTab}
                        </StyledBadge>
                    }
                    key={i}
                />
            );
        }
        return tabs;
    };

    /**
     * Callback function required by the props "onChange" of the "Tabs" Material-UI component.
     */
    const tabChangeHandler = (
        event: React.ChangeEvent<{}>,
        newValue: number
    ) => {
        setValue(newValue);
    };

    /**
     * Renders the component.
     */
    return (
        <AppBar className={classes.appBar} color="default" position="static">
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={tabChangeHandler}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                {setTabs()}
            </Tabs>
        </AppBar>
    );
};

export default TabsNavigation;
