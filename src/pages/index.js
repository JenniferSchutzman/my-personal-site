import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import cherryBlossom from '../assets/images/cherryBlossom.jpg'
import columns from '../assets/images/columns.jpg'
import parqueTyrona from '../assets/images/parqueTyrona.jpg'
import theranchfields from '../assets/images/theranchfields.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Jenny Schutzman - Software Engineer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        {/* <Helmet
  title={title}
>
  {metaTags.map((metaTag, index) => (
    <meta key={index} {...metaTag} />
  )} */}
{/* </Helmet> */}

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${cherryBlossom})` }}>
              <header className="major">
                <h3>My Other Life</h3>
                <p>Professional Experience Before software development</p>
              </header>
              <Link to="/formerLife" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${columns})` }}>
              <header className="major">
                <h3>About Me Now</h3>
                <p>Who I am and what it's like to work with me</p>
              </header>
              <Link to="/aboutMe" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${theranchfields})` }}>
              <header className="major">
                <h3>My Code</h3>
                <p>Come check out some of my stuff</p>
              </header>
              <Link to="/mycode" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${parqueTyrona})` }}>
              <header className="major">
                <h3>Tech community</h3>
                <p>
                  Creating CHS Women Devs and my leadership role with the CWIT Mentoring Program
                </p>
              </header>
              <Link to="/womenDevs" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
