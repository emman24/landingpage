import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props) => {
 if(props.location.state !== null) {
		return(
		<Layout>
			<SEO title="Articles" />
				<div className="container">
					<div className="row">
						<div className="twelve column">
						<h1>{props.location.state.articlesData.title }</h1>
						<p>{props.location.state.articlesData.body}</p>
						<Link to="/">Go back</Link>
						</div>
					</div>
				</div>
		</Layout>
		)
 }else{
	return(
		<Layout>
			<SEO title="Articles" />
				<div className="container">
					<div className="row">
						<div className="twelve column">
						<h1>Not Found</h1>
						<Link to="/">Go back</Link>
						</div>
					</div>
				</div>
		</Layout>
		)
 }
}

export default SecondPage
