import React from "react" 
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Details will show up here later on. I currently teach full-time on Udemy</p>
            <p> <Link to = "/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage
