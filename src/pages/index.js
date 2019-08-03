import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Header from '../components/header'
// import '../styles/index.css'
import Head from "../components/head"

const IndexPage = () =>{
    return(
        <Layout>
            <Head title = "Home"/>
            <h1>Hello.</h1>
            <h2>I'm Denis, a full-stack developer living in Sydney</h2>
            {/* <p>Need a developer?<a href="/contact">Contact me.</a></p> */}
            <p>Need a developer? <Link to ="/contact">Contact me.</Link></p>
        </Layout>
    )
    // return (
    //     <div>
    //          <Header />
    //         <h1>Hello.</h1>
    //         <h2>I'm Denis, a full-stack developer living in Sydney</h2>
    //         {/* <p>Need a developer?<a href="/contact">Contact me.</a></p> */}
    //         <p>Need a developer? <Link to ="/contact">Contact me.</Link></p>
    //         <Footer />
    //     </div>
    // )
}
// export default () => <div>Hello world!</div>


export default IndexPage