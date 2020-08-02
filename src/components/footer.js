import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        {data.site.siteMetadata.author} &copy; {new Date().getFullYear()}. Built
        with
        {` `}
        <a href="https://www.gatsbyjs.org" title="Gatsby Site">
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer
