import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'
import juba from '../assets/images/juba.jpg'
import petrawall from '../assets/images/petrawall.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman - Former Life</title>
      {/* <meta name="description" content="Generic Page" /> */}
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>10+ Years Working with Non-Profits</h1>
          </header>
          <span className="image main">
            <img src={petrawall} alt="Petra" />
          </span>
          <p>This is a pargraph about my former work</p>
          <p>
            This is anotherone about the places I've lived and what I learned
            from those 5 years overseas as an adult.
          </p>
          <p>Why I switched careers will go here</p>
        </div>
      </section>

      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={pic11} alt="ICRW" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>International Center for Research on Women</h3>
              </header>
              <p>While based in DC,</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://app.tallo.com/register">
                      Create a free Tallo account to see the app I work on
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic11} alt="YWCA logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>YWCA Contract</h3>
              </header>
              <p>Describe</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="">
                      Click here to learn more about the YWCA Cincinnati
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic11} alt="WCC logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Women's Crisis Center</h3>
              </header>
              <p>Describe</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="">
                      Click here to learn more about the Women's Crisis Center
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic11} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Mennonite Central Committee</h3>
              </header>
              <p>Describe</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://github.com/JenniferSchutzman/tour-planner-clean">
                      Click here to learn more about MCC in Sudan and South
                      Sudan
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Generic
