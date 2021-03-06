import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer'
import Header from '../components/header'
import index from '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className = {layoutStyles.container}>
            <div className = {layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout