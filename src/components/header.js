import React from 'react'
import { Link } from "gatsby"
// import './header.module.scss'
import headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header className = {headerStyle.header}>
            <h1>
                <Link className = {headerStyle.title} to = "/" >
                    Denis YIN.
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyle.link} to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to ="/about">About</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}


export default Header