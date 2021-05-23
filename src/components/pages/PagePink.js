import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField, Checkbox } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import GridImage from '../../assets/images/Image1.png'
import { CheckBox } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75vw',
        borderRadius: '1rem',
        boxShadow: "3px 4px 38px -15px rgba(0,0,0,0.47)",
    },
    wrapper: {

    },
    gridContainer: {

    },
    gridItemImage: {
        position: 'relative',
    },
    gridImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
    },
    imageTextContainer: {
        zIndex: '1',
        padding: '3rem 2rem 15rem 3rem'
    },
    header: {

    },
    description: {

    },
    gridItemText: {
        position: 'relative',
        padding: '2rem 1rem'
    },
    rightTextcontainer: {

    },
    rightHeaderWrapper: {

    },
    rightTextFieldWrapper: {

    },
    emailInput: {
        borderBottom: '1px solid #700BE7',
        width: '80%',
    },
    passInput: {
        borderBottom: '1px solid #700BE7',
        width: '80%',
    },
    rightTextFieldMargin: {
        margin: '1rem 0',
    },
    rightToggleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0',
    },
    checkForgotText: {
        fontFamily: 'PopRegular',
    },
    rightBtnWrapper: {
        textAlign: 'center',
        padding: '1rem 0 2rem 0rem',
    },
    rightBtn: {
        fontFamily: 'PopSemi',
        color: '#fcfcfc',
        backgroundColor: '#700BE7',
        padding: '.5rem 3rem',
    },
    rightAccountWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        // position: 'absolute',
        // bottom: '0',
        // left: '5%',
        // right: '5%',
    },
    rightAccountText: {
        color: '#DC23A0',
        fontFamily: 'PopRegular'
    },
    rightAccountBtn: {
        marginLeft: theme.spacing(1),
        color: '#DC23A0',
        backgroundColor: 'transparent',
        border: '1px #DC23A0 solid',
        fontFamily: 'PopSemi',
    },

}));



export default function PagePink() {
    const classes = useStyles();
    const [rememberCheck, setRememberCheck] = useState(false);

    const changeCheck = () => {
        setRememberCheck(!rememberCheck);
    }

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        ms={6}
                    >
                        <div className={classes.gridItemImage}>
                            <div className={classes.imageTextContainer}>
                                <Typography className={classes.header} variant='h3'>
                                    Welcome Back
                                </Typography>

                                <Typography className={classes.description} variant='body1'>
                                    he wondered as he clicked the generate button.
                                </Typography>

                                <Button className={classes.learnBtn} variant='outlined'>Learn More</Button>
                                <Button className={classes.featureBtn} variant='contained'>Our Feature</Button>
                            </div>
                            <img className={classes.gridImage} src={GridImage} />
                        </div>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        ms={6}
                        className={classes.gridItemText}
                    >
                        {/* Check for Login Transition to Sign In */}
                        <div className={classes.rightHeaderWrapper}>
                            <Typography className={classes.rightHeader} variant='h4'>
                                Login
                            </Typography>
                            <Typography className={classes.rightDescription} variant='body1'>
                                he wondered as he clicked the generate button.
                            </Typography>
                        </div>

                        <div className={classes.rightTextFieldWrapper}>
                            <div className={classes.rightTextFieldMargin}>
                                <TextField required className={classes.emailInput} variant='standard' type='email' label='Email or UserName' />
                            </div>

                            <div className={classes.rightTextFieldMargin}>
                                <TextField required className={classes.passInput} variant='standard' type='password' label='Password' />
                            </div>
                        </div>

                        <div className={classes.rightToggleWrapper}>
                            <div>
                                <FormControl component="fieldset">
                                    <FormControlLabel control={<Checkbox checked={rememberCheck} onClick={changeCheck} style={{ color: '#700BE7' }} className={classes.checkBoxLabel} />} label={
                                        <Typography variant='body2' style={{ fontFamily: 'PopRegular' }}>Remember Me</Typography>
                                    } />
                                </FormControl>
                            </div>

                            <div>
                                <a href='#'>
                                    <Typography className={classes.checkForgotText} variant='body2'>
                                        Forget Password?
                                    </Typography>
                                </a>
                            </div>
                        </div>

                        <div className={classes.rightBtnWrapper}>
                            <Button className={classes.rightBtn} variant='contained'>Login</Button>
                        </div>

                        <div className={classes.rightAccountWrapper}>
                            <Typography className={classes.rightAccountText} variant='body2'>
                                Don't have an Account?
                            </Typography>
                            <Button className={classes.rightAccountBtn} size='small'>
                                Sign Up
                            </Button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
