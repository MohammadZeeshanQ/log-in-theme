import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        backgroundColor: '#fcfcfc',
    },

}));

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

        </div>
    )
}
