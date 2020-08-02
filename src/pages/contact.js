import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>Email: rrajaneesh5@gmail.com</p>
        <p>Phone: +91-861-810-9137</p>
        <p>
          <a
            href="https://github.com/rajaneehs"
            target="_blank"
            title="rajaneehs"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/rajaneeshr"
            target="_blank"
            title="rajaneeshr"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
