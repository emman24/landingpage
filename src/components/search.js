import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Search = ({ siteTitle }) => (
    <div className="is-fullwidth header-background" style={{height:'80vh', textAlign:'center'}} >
        <div className="container-fluid" style={{top:'35%'}}>
            <div className="row">
                <div className="twelve columns">
									<div>
                    <h1 style={{color:'#fff'}}>SEARCH</h1>
                    <input type="text" style={{width: '60%', padding:'30px'}} placeholder="Search" />
										</div>
                </div>
            </div>
        </div>
    </div>
)

Search.propTypes = {
  siteTitle: PropTypes.string,
}

Search.defaultProps = {
  siteTitle: ``,
}

export default Search