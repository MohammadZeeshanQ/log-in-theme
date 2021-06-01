import React, { useState, useEffect } from 'react'
import '../../assets/css/glass.css';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, TextField, InputLabel, Checkbox } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import GoogleIcon from '../../assets/images/icons/search.png';
import GlassBackground from '../../assets/images/glass.jpg';

const lightGrey = '#919190';
const lightGreen = '#3bb78f';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',

        '@media(max-width: 600px)': {
            width: '90%',
        },
    },
    wrapper: {

    },
    gridContainer: {

    },
    gridItem: {
        '@media(max-width: 600px)': {
            display: 'none',
        },
    },
    // 
    //Images Side
    imageContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#fcfcfc',
    },
    imageWrapper: {
        width: '70%',
        height: '80%',
        border: '1px red solid',
        position: 'relative',
    },
    imageBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '1',
        borderRadius: '0 2.5rem 2.5rem 0',
    },
    imageGlassHeader: {
        fontFamily: 'popRegular',
    },
    imageTextContainer: {

    },
    imageHeader: {
        fontFamily: 'popRegular',
        margin: '2rem 0 .5rem 0',
    },
    imageSubHeader: {
        fontFamily: 'popSemi',
        margin: '.5rem 0',
    },
    imageDescription: {
        fontFamily: 'popLight',
        margin: '.5rem 0',
    },
    imageAccountContianer: {
        marginTop: '4rem',
    },
    imageAccountHeader: {
        fontFamily: 'popRegular',
    },
    imageAccountButton: {
        color: '#fcfcfc',
        border: '1px #fcfcfc solid',
        fontFamily: 'popSemi',
        marginTop: '.5rem',

        '&:hover': {
            backgroundColor: '#fcfcfc',
            color: '#1c1c1c',
        }
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
        padding: '0 4rem',

        '@media(max-width: 600px)': {
            padding: '0 1rem',
        },
    },
    textFieldInputContianer: {

    },
    textFieldInputHeader: {
        fontFamily: 'popSemi',
        marginBottom: '2rem',
        color: '#2B2B2B',

        '@media(max-width: 600px)': {
            textAlign: 'center',
            margin: '0 0 3rem 0',
            fontSize: '2rem',
        },
    },
    textFieldInputLabel: {
        fontFamily: 'popSemi',
        marginBottom: '.5rem'
    },
    textFieldMargin: {
        marginTop: '1.5rem',
    },
    textFieldInput: {
        fontFamily: 'popLight',
        width: '100%',
        '&:focus': {
            border: `1px ${lightGreen} solid`,
        }
    },
    textFieldTickBoxContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    textFieldTickBox: {
        color: 'green',
    },
    textFieldTickBoxLabel: {
        marginLeft: '.3rem'
    },
    textFieldButtonContainer: {
        display: 'grid',
        placeItems: 'center',
        margin: '1rem 0 2rem 0',

        '@media(max-width: 600px)': {
            margin: '3rem 0 2rem 0',
        },
    },
    textFieldButton: {
        fontFamily: 'popSemi',
        color: '#fcfcfc',
        width: '100%',
        backgroundColor: '#3bb78f',
        backgroundImage: 'linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)',
        padding: '.7rem 0',

        '&:hover': {
            transform: 'scale(1.05)',
            transition: '.4s ease all',
        },
    },
    textFieldLineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '@media(max-width: 725px)': {
            display: 'none',
        }
    },
    textFieldLine: {
        width: '20%',
        borderBottom: '.5px #F1F0EE solid',
    },
    textFieldLineLabel: {
        fontFamily: 'popLight',
        color: lightGrey,
    },
    textFieldGoogleButtonContainer: {
        display: 'grid',
        placeItems: 'center',
        margin: '2rem 0',

        '@media(max-width: 725px)': {
            display: 'none',
        }
    },
    textFieldGoogleButton: {
        fontFamily: 'popRegular',
        width: '100%',
        border: `1px ${lightGreen} solid`,
        borderRadius: '.4rem',
        padding: '.6rem 0',

        '&:hover': {
            transform: 'scale(1.05)',
            transition: '.4s ease all',
        },
    },
    textFieldGoogleButtonMobile: {
        display: 'none',

        '@media (max-width: 725px)': {
            display: 'flex',
            fontFamily: 'popRegular',
            width: '100%',
            border: `1px ${lightGreen} solid`,
            borderRadius: '.4rem',
            fontSize: '.8rem',
            padding: '.7rem 0',
            marginTop: '1rem',
        }
    },
    textFieldGoogleIconMobile: {
        width: '1.4rem',
    },
    textFieldGoogleIcon: {
        width: '1.6rem',
    },
    mobileAccountContianer: {
        display: 'none',

        '@media(max-width: 725px)': {
            display: 'block',
            textAlign: 'center',
        },
    },
    mobileAccountHeader: {
        fontFamily: 'popLight',
        fontSize: '.9rem',
    },
    mobileAccountButton: {
        fontFamily: 'popLight',
        fontSize: '.9rem',
        border: `1px ${lightGreen} solid`,
        borderRadius: '.4rem',
        padding: '0.2rem 1rem',
        margin: '1rem 0',
    },

}));

export default function GlassTheme() {
    const classes = useStyles();
    const [signIn, setSignIn] = useState(false);


    const changeRenderView = () => {
        setSignIn(!signIn);
        console.log(signIn);
    }


    const signinRenderView = () => {
        return (
            <div className={classes.textFieldContainer}>
                <div className={classes.textFieldWrapper}>
                    <Typography className={classes.textFieldInputHeader} variant='h3'>
                        Sign up
                    </Typography>
                    <form>
                        <div>
                            <InputLabel className={classes.textFieldInputLabel} htmlFor='emailID'>Email Address</InputLabel>
                            <TextField required type='email' id='emailID' className={classes.textFieldInput} variant='outlined' placeholder='Enter your Email' autoComplete='false' />
                        </div>
                        <div className={classes.textFieldMargin}>
                            <InputLabel className={classes.textFieldInputLabel} htmlFor='passID'>Set Password</InputLabel>
                            <TextField required type='password' id='passID' className={classes.textFieldInput} variant='outlined' placeholder='Enter Password' autoComplete='false' />
                        </div>
                        <div className={classes.textFieldTickBoxContainer}>
                            <Checkbox
                                className={classes.textFieldTickBox}
                                color='default'
                                id='checkboxID'
                                size='medium'
                            />

                            <InputLabel className={classes.textFieldTickBoxLabel} htmlFor='checkboxID'>Remember Me</InputLabel>
                        </div>

                        <div className={classes.textFieldButtonContainer}>
                            <Button className={classes.textFieldButton}
                                endIcon={<ArrowRightAltIcon style={{ fontSize: '1.3rem' }} />} >
                                Sign up
                            </Button>
                            <Button className={classes.textFieldGoogleButtonMobile} variant='standard' startIcon={
                                <img className={classes.textFieldGoogleIconMobile} src={GoogleIcon} />}>
                                Continue with Google
                            </Button>
                        </div>

                        <div className={classes.mobileAccountContianer}>
                            <Typography variant='body1' className={classes.mobileAccountHeader}>
                                Already have an account?
                            </Typography>
                            <Button variant='standard' className={classes.mobileAccountButton} onClick={changeRenderView}>
                                Login
                            </Button>
                        </div>

                        <div className={classes.textFieldLineContainer}>
                            <hr className={classes.textFieldLine} />
                            <Typography className={classes.textFieldLineLabel} variant='body2'>or</Typography>
                            <hr className={classes.textFieldLine} />
                        </div>

                        <div className={classes.textFieldGoogleButtonContainer}>
                            <Button className={classes.textFieldGoogleButton} variant='standard' startIcon={
                                <img className={classes.textFieldGoogleIcon} src={GoogleIcon} />}>
                                Continue with Google
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }



    const loginRenderView = () => {
        return (
            <div className={classes.textFieldContainer}>
                <div className={classes.textFieldWrapper}>
                    <Typography className={classes.textFieldInputHeader} variant='h3'>
                        Login
                    </Typography>
                    <form>
                        <div>
                            <InputLabel className={classes.textFieldInputLabel} htmlFor='emailID'>Email Address</InputLabel>
                            <TextField required type='email' id='emailID' className={classes.textFieldInput} variant='outlined' placeholder='Enter your Email' autoComplete='false' />
                        </div>
                        <div className={classes.textFieldMargin}>
                            <InputLabel className={classes.textFieldInputLabel} htmlFor='passID'>Set Password</InputLabel>
                            <TextField required type='password' id='passID' className={classes.textFieldInput} variant='outlined' placeholder='Enter Password' autoComplete='false' />
                        </div>
                        <div className={classes.textFieldTickBoxContainer}>
                            <Checkbox
                                className={classes.textFieldTickBox}
                                color='default'
                                id='checkboxID'
                                size='medium'
                            />

                            <InputLabel className={classes.textFieldTickBoxLabel} htmlFor='checkboxID'>Remember Me</InputLabel>
                        </div>

                        <div className={classes.textFieldButtonContainer}>
                            <Button className={classes.textFieldButton}
                                endIcon={<ArrowRightAltIcon style={{ fontSize: '1.3rem' }} />} >
                                Login
                            </Button>
                            <Button className={classes.textFieldGoogleButtonMobile} variant='standard' startIcon={
                                <img className={classes.textFieldGoogleIconMobile} src={GoogleIcon} />}>
                                Continue with Google
                            </Button>
                        </div>

                        <div className={classes.mobileAccountContianer}>
                            <Typography variant='body1' className={classes.mobileAccountHeader}>
                                Are You A New Member?
                        </Typography>
                            <Button variant='standard' className={classes.mobileAccountButton} onClick={changeRenderView}>
                                Sign up
                        </Button>
                        </div>

                        <div className={classes.textFieldLineContainer}>
                            <hr className={classes.textFieldLine} />
                            <Typography className={classes.textFieldLineLabel} variant='body2'>or</Typography>
                            <hr className={classes.textFieldLine} />
                        </div>

                        <div className={classes.textFieldGoogleButtonContainer}>
                            <Button className={classes.textFieldGoogleButton} variant='standard' startIcon={
                                <img className={classes.textFieldGoogleIcon} src={GoogleIcon} />}>
                                Continue with Google
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }


    const imageSideSignInRenderView = () => {
        return (
            <div className={classes.imageAccountContianer}>
                <Typography variant='body1' className={classes.imageAccountHeader}>
                    Are you a New Member?
            </Typography>
                <Button variant='standard' className={classes.imageAccountButton} onClick={changeRenderView}>
                    sign in
            </Button>
            </div>
        )
    }



    const imageSideLogInRenderView = () => {
        return (
            <div className={classes.imageAccountContianer}>
                <Typography variant='body1' className={classes.imageAccountHeader}>
                    Already have an account?
            </Typography>
                <Button variant='standard' className={classes.imageAccountButton} onClick={changeRenderView}>
                    Login
            </Button>
            </div>
        )
    }


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    className={classes.gridContainer}
                    container
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        className={classes.gridItem}
                        item
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        <div className={classes.imageContainer}>
                            <div className={classes.imageWrapper}>
                                <div class='imageGlassContainer'>
                                    <div class='imageHeaderContainer'>
                                        <Typography className={classes.imageGlassHeader} variant='body1'>
                                            THE GOOD NETWORK
                                    </Typography>
                                    </div>
                                    <div className={classes.imageTextContainer}>
                                        <Typography variant='h5' className={classes.imageHeader}>
                                            We are
                                        </Typography>
                                        <Typography variant='h4' className={classes.imageSubHeader}>
                                            invite only right now.
                                        </Typography>
                                        <Typography variant='body1' className={classes.imageDescription}>
                                            we are the best content producer you'll ever work with.
                                        </Typography>
                                    </div>
                                    {
                                        signIn ? imageSideSignInRenderView() : imageSideLogInRenderView()
                                    }
                                </div>
                            </div>
                            <img className={classes.imageBackground} src={GlassBackground} alt='Pattern Background' />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                    >
                        {
                            signIn ? loginRenderView() : signinRenderView()
                        }
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}
