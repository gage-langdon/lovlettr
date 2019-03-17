import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ComposePage = () => (
  <Layout>
    Compose
    <div className="pt-5">
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/preview">Preview</Link>
    </div>
  </Layout>
)

export default ComposePage
