import Navbar from "./navbar/Navbar";
import classes from './header.module.css'
import MobileNavBar from "./mobileNavBar/MobileNavBar";
import Link from "next/link";

function Header(props) {
    const links =  [
        { title: "Homepage", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact", },
        { title: "Blog", path: "/blog", },
    ]
    return ( 
        <div className={classes.container}>
            <Link className={classes.logo} href='/'>Logo</Link>
            <div>
                <Navbar className={classes.links}  links={links}/>
                <MobileNavBar className={classes.mobileLinks} links={links}/>
            </div>
        </div> 
    );
}

export default Header;