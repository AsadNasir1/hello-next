import React from "react";
import Link from 'next/link';

class Header extends React.Component{
    render(){
        return(
            <div>
        <ul>            
            <li>
            <Link href="/">
                <a>Home</a>
            </Link>
            </li>
            <li>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            </li>
        </ul>
        </div>
        )
    }
}


export default Header;