import classes from './navbar.module.css'
import NavLink from "./navLink/navLink";

function Navbar({links, className}) {

    // TEMPORARY
    const session = {
        user: { 
            isAdmin:true
        }
    };
    
    return ( 
        <div className={classes.links + ' ' + className}>
            {
                links.map(link => <NavLink item={link} key={link.path} />)
            }
            {
                session?.user ? (
                <> {
                    session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }}  />}
                    <button className={classes.logout}>Logout</button>
                </>
                ) : 
                ( <NavLink item={{ title: "Login", path: "/login" }} /> )
            }
        </div>
    );
}

export default Navbar;