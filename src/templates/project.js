import React from "react"
import { graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Project = props => {
  return (
    <Layout>
      {/* markdown */}

      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Project
