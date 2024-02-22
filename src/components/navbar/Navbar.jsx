import Link from "next/link";

function Navbar(props) {
    return ( 
        <div>
            <div>Logo</div>
            <div>
                <Link href='/'>Homepage</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div> 
    );
}

export default Navbar;