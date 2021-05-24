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
        width: '70vw',
        borderRadius: '1rem',
        boxShadow: "3px 4px 38px -15px rgba(0,0,0,0.47)",
    },
    wrapper: {

    },
    gridContainer: {
    },
    gridItemImage: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    gridImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '1',
    },
    imageTextContainer: {
        position: 'relative',
        zIndex: '4',
        padding: '3rem 2rem 15rem 2rem',
        color: '#fcfcfc',
    },
    header: {
        padding: '1rem 0 0 0',
        fontFamily: 'PopSemi',
        letterSpacing: '1px',
        textShadow: '4px 4px 21px rgba(0,0,0,0.6)',
    },
    description: {
        padding: '.5rem 0',
        fontFamily: 'popRegular',
        letterSpacing: '1px',
        textShadow: '4px 4px 21px rgba(0,0,0,0.6)',
    },
    imageButtonWrapper: {
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'row',

        '@media(max-width: 725px)': {
            flexDirection: 'column',
        }
    },
    learnBtn: {
        fontFamily: 'PopSemi',
        textTransform: 'none',
        padding: '.5rem 1rem',
        backgroundColor: 'transparent',
        border: '1px #fcfcfc solid',
        color: '#fcfcfc',
    },
    featureBtn: {
        fontFamily: 'PopSemi',
        textTransform: 'none',
        marginLeft: '1.5rem',
        padding: '.5rem 1rem',
        backgroundColor: '#fcfcfc',
        color: '#700BE7',

        '@media(max-width: 725px)': {
            marginLeft: '0',
        }
    },
    gridItemText: {
        position: 'relative',
        padding: '2rem'
    },
    rightTextcontainer: {

    },
    rightHeaderWrapper: {

    },
    rightHeader: {
        fontFamily: 'PopSemi',
        padding: '.5rem 0',
    },
    rightDescription: {
        fontFamily: 'PopRegular',
        padding: '.5rem 0',
    },
    rightTextFieldWrapper: {

    },
    emailInput: {
        borderBottom: '1px solid #700BE7',
        width: '100%',
    },
    passInput: {
        borderBottom: '1px solid #700BE7',
        width: '100%',
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
    const [newUser, setNewUser] = useState(false);


    const changeUserStatus = () => {
        setNewUser(!newUser);
    }


    const changeCheck = () => {
        setRememberCheck(!rememberCheck);
    }


    const signInWrapper = () => {
        return (
            <div>

                <div className={classes.rightHeaderWrapper}>
                    <Typography className={classes.rightHeader} variant='h4'>
                        Sign In
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

                    <div className={classes.rightTextFieldMargin}>
                        <TextField required className={classes.passInput} variant='standard' type='password' label='Confirm Password' />
                    </div>
                </div>

                <div className={classes.rightToggleWrapper}>
                    <div>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                control={<Checkbox checked={rememberCheck} onClick={changeCheck} style={{ color: '#700BE7' }}
                                    className={classes.checkBoxLabel}
                                />}
                                label={
                                    <Typography variant='body2' style={{ fontFamily: 'PopRegular' }}>Remember Me</Typography>
                                }
                            />
                        </FormControl>
                    </div>

                </div>

                <div className={classes.rightBtnWrapper}>
                    <Button className={classes.rightBtn} variant='contained'>Sign In</Button>
                </div>

                <div className={classes.rightAccountWrapper}>
                    <Typography className={classes.rightAccountText} variant='body2'>
                        Already have an Account?
                                </Typography>
                    <Button className={classes.rightAccountBtn} size='small'
                        onClick={() => setNewUser(false)}
                    >
                        Login
                    </Button>
                </div>

            </div>
        )
    }


    const logInWrapper = () => {
        return (
            <div>

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
                            <FormControlLabel
                                control={<Checkbox checked={rememberCheck} onClick={changeCheck} style={{ color: '#700BE7' }}
                                    className={classes.checkBoxLabel}
                                />}
                                label={
                                    <Typography variant='body2' style={{ fontFamily: 'PopRegular' }}>Remember Me</Typography>
                                }
                            />
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
                    <Button className={classes.rightAccountBtn} size='small'
                        onClick={() => setNewUser(true)}
                    >
                        Sign Up
                    </Button>
                </div>

            </div>
        )
    }


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.gridContainer}
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
                                    Welcome
                                </Typography>

                                <Typography className={classes.description} variant='body1'>
                                    he wondered as he clicked the generate button.
                                </Typography>

                                <div className={classes.imageButtonWrapper}>
                                    <Button className={classes.learnBtn} variant='outlined'>Learn More</Button>
                                    <Button className={classes.featureBtn} variant='contained'>Our Feature</Button>
                                </div>
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
                        {
                            newUser ? signInWrapper() : logInWrapper()
                        }

                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
