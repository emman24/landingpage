import React, { Component } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default class SecondPage extends Component {
	constructor(props){
		super(props)

		this.state ={
			articles:[]
		}
	}

	componentDidMount() {
		if(this.props.location.state !== null) {
			this.setState({articles:this.props.location.state.articlesData})
		}else {
			this.setState({articles:{body:'Not Found', title:'Not Found'}})
		}
	}

	render() {
		return (
			<Layout>
			<SEO title="Articles" />
				<div className="container">
					<div className="row">
						<div className="twelve column">
						<h1>{this.state.articles.title}</h1>
						<p>{this.state.articles.body}</p>
						<Link to="/">Go back</Link>
						</div>
					</div>
				</div>
		</Layout>
		)
	}
}
