import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p><b>Page not found.</b></p>
    <p>Thank you, visitor!</p>
    <p>But this page is in another castle! </p>
  </Layout>
)

export default NotFoundPage
