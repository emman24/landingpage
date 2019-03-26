import React, { Component } from 'react'
import { Link } from "gatsby"

export default class Articleslists extends Component {

	constructor(props){
		super(props)

		this.state = {
			articles:[]
		}
	}

	componentDidMount(){
			fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => this.setState({articles: json}));
	}

	render() {
		return (
			<div>
				{this.state.articles.slice(0, 10).map((val, key) => {
					return (
						<div style={{padding:'15px', borderBottom:'1px solid #e8e8e8'}}>
							<h3 key={key}>{val.title.toUpperCase()}</h3>
							<p style={{fontSize: '18px', margin:'0'}}>{val.body}</p>
							<Link 
							to='/page-2' 
							style={{fontWeight:'bold', fontSize:'14px', fontStyle:'italic', cursor:'pointer'}}
							state={{articlesData: val}}
							 >Continue more...</Link>
						</div>
					)
				})}
			</div>
		)
	}
}
