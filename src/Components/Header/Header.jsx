import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png'
import LogoFull from '../../assets/logo_full.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    imgLogo: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: 204,
            width: 435,
            marginBottom: -44,
            marginTop: -42,
    },
    imgLogoMobile: {
        display: 'none'
    },
    '@media (max-width: 720px)': {
        imgLogoMobile: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
        },
        imgLogo: {
            display: 'none'
        }
    }
}));


const Header = () => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Button>    
                    <Toolbar className={classes.toolbar}>
                        <img className={classes.imgLogo} src={LogoFull} alt="logo" />
                        <img className={classes.imgLogoMobile} src={Logo} alt="logo" />
                    </Toolbar>
                </Button>
            </AppBar>
        </div>
    )
}

export default Header