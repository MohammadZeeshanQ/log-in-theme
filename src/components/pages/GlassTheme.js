import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    wrapper: {

    },
    gridContainer: {

    },
    gridItem: {

    },
    // 
    //Images Side
    imageContainer: {

    },
    imageWrapper: {

    },
    imageGlassContainer: {

    },
    imageGlassHeader: {

    },
    imageTextContainer: {

    },
    imageHeader: {

    },
    imageSubHeader: {

    },
    imageDescription: {

    },
    imageAccountContianer: {

    },
    imageimageAccountHeader: {

    },
    imageAccountButton: {

    },
    imageBall1: {

    },
    imageBall2: {

    },
    imageBall3: {

    },
    // 
    // TextField side
    textFieldContainer: {

    },
    textFieldWrapper: {

    },
    textFieldInputContianer: {

    },
    textFieldInputHeader: {

    },
    textFieldInputLabel: {

    },
    textFieldInput: {

    },
    textFieldTickBoxContainer: {

    },
    textFieldTickBox: {

    },
    textFieldTickBoxLabel: {

    },
    textFieldButtonContainer: {

    },
    textFieldButton: {

    },
    textFieldLineContainer: {

    },
    textFieldLine: {

    },
    textFieldLineLabel: {

    },
    textFieldGoogleButtonContainer: {

    },
    textFieldGoogleButton: {

    },

}));

export default function GlassTheme() {
    const classes = useStyles();
    const [signIn, setSignIn] = useState(false);
    const [tickBox, setTickBox] = useState(false);
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    className={classes.gridContainer}
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        className={classes.gridItem}
                        xs={12}
                        sm={6}
                        md={6}
                    >

                    </Grid>
                    <Grid
                        className={classes.gridItem}
                        xs={12}
                        sm={6}
                        md={6}
                    >

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
