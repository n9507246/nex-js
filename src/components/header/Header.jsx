import Navbar from "./navbar/Navbar";
import classes from './header.module.css'
import MobileNavBar from "./mobileNavBar/MobileNavBar";

function Header(props) {
    const links =  [
        { title: "Homepage", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact", },
        { title: "Blog", path: "/blog", },
    ]
    return ( 
        <div className={classes.container}>
            <div className={classes.logo}>Logo</div>
            <div>
                <Navbar className={classes.links}  links={links}/>
                <MobileNavBar className={classes.mobileLinks} links={links}/>
            </div>
        </div> 
    );
}

export default Header;