import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    Home
    <div className="pt-5">
      <Link to="/compose">Create</Link>
    </div>
  </Layout>
)

export default IndexPage
