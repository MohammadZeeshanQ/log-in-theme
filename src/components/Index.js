import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import PagePink from './pages/PagePink';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fcfcfc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

}));

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PagePink />
        </div>
    )
}
