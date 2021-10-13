import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
// import logo from '../public/next.png'

const NavBar = () => {
    return (
        <div>
     
            <nav>
              <div className='logo'>
                <Image
                 src="/next.png"
                 height={60}
                 width={60}
                 ></Image>
              </div>
                <ul>

                <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/data">
          <a>user</a>
        </Link>
      </li>
                
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;