import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Label from "../components/label"

const IndexPage = () => (
  <Layout>
    Home
    <div className="pt-5">
      <Label cursive>Be Mine?</Label>
      <Link to="/compose">Create</Link>
    </div>
  </Layout>
)

export default IndexPage
