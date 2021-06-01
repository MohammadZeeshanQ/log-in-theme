import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import PagePink from './pages/GlassTheme.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fcfcfc',
        display: 'grid',
        placeItems: 'center',
        paddingTop: '2rem',

        '@media(max-width: 600px)': {
            paddingTop: '1rem',
        },
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
