import Link from "next/link";
import classes from './navbar.module.css'
import NavLink from "./navLink/navLink";

function Navbar(props) {
    const links = [
        { title: "Homepage", path: "/", },
        { title: "About", path: "/about", },
        { title: "Contact", path: "/contact", },
        { title: "Blog", path: "/blog", },
    ]
          
    // TEMPORARY
    const session = {
        user: { 
            isAdmin:true
        }
    };
    
    return ( 
        <div className={classes.container}>
            <div className={classes.logo}>Logo</div>
            <div className={classes.links}>
                {
                    links.map(link => <NavLink item={link} />)
                }
                {
                    session?.user ? (
                    <> {
                        session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={classes.logout}>Logout</button>
                    </>
                    ) : 
                    ( <NavLink item={{ title: "Login", path: "/login" }} /> )}
            </div>
        </div> 
    );
}

export default Navbar;