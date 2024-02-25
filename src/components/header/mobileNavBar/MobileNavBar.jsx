"use client";
import {useState} from 'react'
import NavLink from '@/components/header/navbar/navLink/navLink';
import classes from './mobileNavBar.module.css'
import Image from 'next/image';

export default function MobileNavBar({links, className}) {

    const [open,setOpen] = useState(false)

    // TEMPORARY
    const session = {
        user: { 
            isAdmin:true
        }
    };
    return (
        
        <div className={className}>
            <button className={classes.menuButton} onClick={()=>setOpen(!open)}>      
            <Image src="/menu.png" alt="" width={30} height={30} />
        </button>
            {
                
                open && <div className={classes.mobileLinks}> 
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
            }
        </div>
    )
}
