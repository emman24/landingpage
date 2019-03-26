import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"

import Articleslists from "../components/Lists/articleslists";
import Symptomlists from "../components/Lists/symptomslists";
import SpecialtyLists from "../components/Lists/specialtylists";

const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Search />
      <div className="container-fluid">
        <div className="row">
          <div className="eight columns">
						<h2 style={{color:'#005a9e', padding: '15px'}}>Essentials Readings</h2>
						<hr />
            <Articleslists />
          </div>
          <div className="four columns">
					<h2 style={{color:'#005a9e', padding: '15px'}}>Know The Symptoms</h2>
						<hr />
            <Symptomlists />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="twelve columns">
            <SpecialtyLists />
          </div>
        </div>
      </div>

  </Layout>
)

export default IndexPage
