import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import projectStyles from "./project.module.scss"
import Head from "../components/head"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Projects" />
        <ul className={projectStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={projectStyles.post}>
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export default ProjectPage
