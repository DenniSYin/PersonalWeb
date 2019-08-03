import React from "react" 
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout";
import blogStyle from './blog.module.scss'
import Head from "../components/head"

// query{
//     allMarkdownRemark{
//         edges {
//           node{
//             frontmatter {
//               title
//               date
//             }
//             fields{
//                 slug
//             }
//           }
//         }
//       }
//     }
const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publisheedDate,
            order: DESC
          }
        ){
          edges {
            node {
              title
              slug
              publisheedDate (formatString: "MMMM Do, YYYY")
            }
          }
        }
      }`
    )

    console.log(data)

    return (
        <Layout>
          <Head title = "Blog"/>
            <h1>Blog</h1>
            {/* <h2>Posts will show up here later on.</h2> */}
            <ol className = {blogStyle.posts}>
                {data.allContentfulBlogPost.edges.map((edge) =>{
                    return (
                        <li className = {blogStyle.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publisheedDate}</p>
                            </Link>
                        </li>
                    )
                } )}
            </ol>
        </Layout>
    )
}

export default BlogPage

