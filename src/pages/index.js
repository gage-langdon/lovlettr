import React from "react"
import { Link } from "gatsby"
import Button from '../components/button';
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    Home
    <div className="pt-5">
      <Link to="/compose">Create</Link>
    </div>
    <Button text={"Send for free"} />
  </Layout>
)

export default IndexPage
