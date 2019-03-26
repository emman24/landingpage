import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props) => (
  <Layout>
		{console.log(props)}
    <SEO title="Page two" />
			<div className="container">
				<div className="row">
					<div className="twelve column">
					<h1>{props.location.state.articlesData.title}</h1>
					<p>{props.location.state.articlesData.body}</p>
					<Link to="/">Go back</Link>
					</div>
				</div>
			</div>
  </Layout>
)

export default SecondPage
