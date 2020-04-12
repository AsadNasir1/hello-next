import React from "react";
import Link from 'next/link';

var style1 = {
    
    margin: '10px'
};


var style2 = {
    
    display: 'block'
};

class Header extends React.Component{
    render(){
        return(
            <div style={style2}>
        <ul>            
            <li style={style1}>
            <Link href="/">
                <a>Home</a>
            </Link>
            </li>
            <li style={style1}>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            </li>
        </ul>
        <br></br>
        <br></br>
        </div>
        
        )
    }
}


export default Header;