import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: 64,
    },
    wrapper: {

    },
    logoWrapper: {

    },
    logoText: {
        fontFamily: 'PopBold',
        fontSize: '1.6rem',
        letterSpacing: '3px',
        color: '#700BE7'
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} elevation={4} style={{ backgroundColor: '#fcfcfc', }}>
            <Toolbar className={classes.wrapper}>
                <div className={classes.logoWrapper}>
                    <h4 className={classes.logoText}>WILLOW</h4>
                </div>
            </Toolbar>
        </AppBar>
    )
}
