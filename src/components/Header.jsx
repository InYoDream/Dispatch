
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";

const useStyles = makeStyles({
    logo: {
        width: 100,
        padding: 5
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    }
})

const Header = () => {
    const classes = useStyles();
    const logo = 'https://thumbs.dreamstime.com/b/icon-delivery-truck-delivery-truck-delivery-truck-163442527.jpg';

    return (
        <>
            <img src={logo} alt="logo" className={classes.logo} />    
            {/* <AppBar className={classes.navbar}>
                <Toolbar>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Header;