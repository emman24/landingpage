import React, { Component } from 'react'

export default class Symptomslist extends Component {
	
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
				{this.state.articles.slice(0, 5).map((val, key) => {
					return (
						<div>
							<h4 key={key}>{val.title.toUpperCase()}</h4>
						</div>
					)
				})}
			</div>
		)
	}
}
