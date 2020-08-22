import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import books from '../assets/images/books.jpg'
import cherryBlossom from '../assets/images/cherryBlossom.jpg'
import columns from '../assets/images/columns.jpg'
import irelandTownInWoods from '../assets/images/irelandTownInWoods.jpg'
import parqueTyrona from '../assets/images/parqueTyrona.jpg'
import theranchfields from '../assets/images/theranchfields.jpg'
//import waterfall from '../assets/images/waterfall.jpg'

import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${cherryBlossom})` }}>
              <header className="major">
                <h3>My Other Life</h3>
                <p>Professional Experience Before software development</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${columns})` }}>
              <header className="major">
                <h3>About Me Now</h3>
                <p>Learn who I am and what it like to work with me</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${theranchfields})` }}>
              <header className="major">
                <h3>My Code</h3>
                <p>Come check out some of my stuff</p>
              </header>
              <Link to="/mycode" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${books})` }}>
              <header className="major">
                <h3>Code Style</h3>
                <p>
                  What I love about software development and my coding
                  philospies
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${parqueTyrona})` }}>
              <header className="major">
                <h3>Women in Tech Mentoring Program</h3>
                <p>
                  Check out upcoming activities Women in Tech Mentoring Program
                  and join us!
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${irelandTownInWoods})` }}>
              <header className="major">
                <h3>CHS Women Devs</h3>
                <p>
                  Learn more about the group I started for female software
                  engineers in the Charleston Area
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
