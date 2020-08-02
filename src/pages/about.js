import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <ul>
          <li>Ex-Mechanical Engineer</li>
          <li>MERN Stack Developer</li>
          <li>BMSCE Alumni</li>
        </ul>

        <h3>Skills</h3>
        <ul>
          <li>JavaScript, React, Redux</li>
          <li>NodeJS, Express, MongoDB, PostgreSQL</li>
          <li>HTML, CSS</li>
        </ul>
      </Layout>
    </div>
  )
}

export default AboutPage
