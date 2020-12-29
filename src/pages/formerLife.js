import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import petrawall from '../assets/images/petrawall.jpg'
import ICRW from '../assets/images/ICRW.png'
import ywca from '../assets/images/ywca.png'
import WCC from '../assets/images/WCC.jpg'
import MCC from '../assets/images/MCC.jpeg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman - Former Life</title>
    </Helmet>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>10+ Years Working with Non-Profit Data Systems</h1>
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
            <img src={ICRW} alt="ICRW" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Monitoring And Evaluation Data Specialist</h3>
              </header>
              <p>•	Leading technical guidance of data systems in 8 countries for world-renown private foundations, universities, governmental agencies, private research companies and corporations </p>
              <p>•	Training international data handlers on research design, creation of data collection tools, data storage, database management, and data analysis for research projects in Jordan, India, Tanzania, Kenya, Uganda, South Africa and Guyana </p>
              <p>•	Facilitating 10-20-person workshops, focus group discussions, in-depth interviews, key informant interviews, and survey collection in various countries</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://www.icrw.org/">
                      Learn more about ICRW
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={ywca} alt="YWCA logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Outcomes and Evaluation Coordinator</h3>
              </header>
              <p>•	Led activities across data mining, analysis, and report writing for funders and high-level decision makers to better understand their process and results data</p>
              <p>•	Managed a multimillion dollar qualitative and quantitative database</p>
              <p>•	Worked across 5 different departments developing the data collection tools and database input storage systems for social workers and community contributors</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://www.ywcacincinnati.org/">
                      Learn more about the YWCA Cincinnati
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={WCC} alt="WCC logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Women's Crisis Center</h3>
              </header>
              <p>•	Surveyed the challenges of undocumented survivors in the region to improve strategic planning</p>
              <p>•	Formulated winning proposals contributing to the growth of the department</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://www.wccky.org/">
                      Learn more about the Women's Crisis Center
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={MCC} alt="MCC logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Program Support Officer, Data Monitoring & Evaluations</h3>
              </header>
              <p>• Managed research design and data analysis 10+ projects</p>
              <p>• Designed and trained local staff to implement effective data collection systems, analysis and reporting</p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://mcc.org/learn/what/relief/south-sudan">
                      Learn more about MCC South Sudan
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://mcc.org/learn/where/africa/sudan">
                      Learn more about MCC Sudan
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout >
)

export default Generic
