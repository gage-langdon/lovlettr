import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ComposePage = () => (
  <Layout>
    Preview
    <div className="pt-5">
      <Link to="/compose">Back</Link>
    </div>
  </Layout>
)

export default ComposePage
