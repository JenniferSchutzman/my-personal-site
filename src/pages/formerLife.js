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
          <p>After spending a summer volunteering in Uganda during my junior year of college,
          I officially caught the "travel bug" and was hooked on international work for social good.
          I went back to Uganda for a full year immediately following my undergrad, followed by an additional year and
          a half in Cali, Colombia while also remotely earning my Masters in International Relations.
          After completing my post-grad degree, I lived in Sudan and South Sudan for 2 years and an additional 4 years in Washington DC
            before stumbling upon Charleston by chance.  </p>
          <p>
            Professionally during that decade I was always in some capacity designing data collection
            and analysis systems for both qualitative and quantitive undertakings.  This work mostly took place
            under the category of program and/or project evaluation.  In laymans terms, when non-profits wanted
            to win or keep funding I designed the data systems and analysis to either help them better understand and assess their impact of
            social change in the community.  Often I also helped funders evaluate whether these projects were indeed creating the
            lasting and impactful social behavioural change for sustainable community improvement that they intended.
          </p>
          <p>During that time I worked mostly in Advanced Excel.  But over the final years I started to move
          from Tableau, Power BI, and Excel, onto more technical statistical analysis packages like STATA and R
          programming.  It was during this transition to using more sophisticated statistical analysis tools that
          I started to discover my newfound passion for programming. I remember saying repeatedly in DC and abroad
          how "I wished I could get on projects where all I did was work in STATA and R programming".  Then it finally hit me that it
          might be time for a serious career change.  After visitng a friend in Charleston and seeking out
          information about JRS code school in Shem Creek, I made the easy, yet drastic, pivot to change my
          whole life.  Now 3 and a half years later I can hontesly still say I've never once regretted the change and
          it's one of the best decisions I've ever made.  Software development is my perfect match and
              I'm grateful daily (well when I'm not stuck!) to have found this exciting career.</p>
          <p> See below more detailed descriptions per each position where I worked before starting code camp, if curious.</p>
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
                <h3>Monitoring And Evaluation Data Specialist, Washington D.C. based with extensive international travel</h3>
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
                <h3>Outcomes and Evaluation Coordinator, remote based for Cincinnati company</h3>
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
                <h3>Women's Crisis Center, KY </h3>
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
                <h3>Program Support Officer, Data Monitoring & Evaluations, South Sudan</h3>
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
