import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import '../assets/css/addons.css'

import tallo from '../assets/images/tallo.jpg'
import gotcha from '../assets/images/gotcha.png'
import vizbii from '../assets/images/vizbii.png'
import fountain from '../assets/images/fountain.jpeg'
import reactHooks from '../assets/images/reactHooks.png'
import github from '../assets/images/github.jpeg'
import JRS from '../assets/images/JRS.png'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman -- Tech Community </title>
    </Helmet>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Professional and personal coding experience</h1>
          </header>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <a href="https://app.tallo.com/register">
              <img src={tallo} alt="Tallo logo" />
            </a>
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Tallo</h3>
              </header>
              <p>
                For the past 2 years I've been a Full Stack Software Engineer at
                the Mount Pleasant based tech company Tallo. On a team with 5
                other developers, we maintain the Tallo tech product from back
                to front for millions of users. Main highlights of my
                direct involvement include: took part in complete redesign of the
                Tallo app profile functionality utlizing AngularJS, Java, MySQL
                and LESS; personally created dozens of React components for the
                new ui kit; central in the transition to React Hooks; and
                currently starting to convert the entire existing from AngularJS
                to React with Redux.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://app.tallo.com/register">
                      Create a free Tallo account to see the app I work on
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="button button-spacing">
                    <a href="https://github.com/STEMPremier/celula">
                      See the UI kit where I created dozens of components
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={gotcha} alt="Gotcha logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>
                  Gotcha (Holy Spokes Bike Share)
                </h3>
              </header>
              <p>
                Before settling into a permanent position at Tallo, I did a
                couple of full time consultancy projects for other local tech
                companies. For 3 months I worked full-time to build a marketing
                website for the downtown Charleston based company Gotcha. Using
                React, Redux, and CSS, I drafted their new marketing website.
                This was built in bare bones CSS. It was too custom to allow for
                outside style libraries or templates. This contract gave me the
                opportunitiy to drastically improve my CSS skills; launching me
                into a new level of design code understanding and appreciation
                for further front-end expertise. Click below to check it out.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://ridegotcha.com/">
                      View the marketing website I built
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={vizbii} alt="Vizbii logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Vizbii</h3>
              </header>
              <p>
                My first full-time contract after code camp was for another
                local company in downtown Charleston called Vizbii. I was with that
                team for 5 months on a temporary full-time contract. There I
                built the front-end of the their new admin app, along with a
                couple of other tiny things. Utilizing AuthO, React, Redux, CSS,
                Axios, and more, I was the sole front-end developer on the admin
                app. Personal highlights for me at this project were getting to
                plug in Auth0, working with styled React components for the
                first time, and developing my React skills form management
                and lots of API calls. Unfortunately the client admin app is not
                publicly accessible, but click below to learn more about this
                ground-breaking company. (I believe the company now just goes by
                the name "Morphii".)
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://morphii.com/">
                      Check out Morphii
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={fountain} alt="Pineapple Park Fountain" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Charleston Tour Finder</h3>
              </header>
              <p>
                At the end of code camp, each student was responsible for
                building their own app from back to front utilizing
                CouchDB/PouchDB, React, and Redux. I also chose to use Material
                UI. In those last 2 weeks I worked completely by myself to
                create this "Charleston Tour Finder App". I've recentely updated
                the code using hooks. I also converted the DB to a fake api
                because I've found CouchDB to be unreliable. Plus it's not
                active so hooking it up to a new permanent DB did not seem
                necessary. Feel free to pull it down and run it in mobile view
                in your localhost inspect window. It will recommend specific
                tours for you based off of your responses to a couple of
                questions!
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://github.com/JenniferSchutzman/tour-planner-clean">
                      View my code for the Charleston Tour Finder
                      app demo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={JRS} alt="Jack Russell Software logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jack Russell Software</h3>
              </header>
              <p>Under Tom Wilson's and Trip Ottinger's leadership, I attended the 3 month code bootcamp in Shem Creek.  In this fullstack bootcamp we dove into Javascript, NodeJS (with full CRUD), React, Redux, MySQL, PouchDB/CouchDB, Material UI and much more!  </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://www.harborec.com/jrs-coding-school">
                      Learn more about the coding bootcamp
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={reactHooks} alt="React Hooks" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>
                  React Hooks
                </h3>
              </header>
              <p>
                This past year I created a demo on React hooks and presented it the CTO and Senior Dev.  We soon after implementented hooks into the react components we were building in the new UI kit.  You can follow along with my comments and examples inside the components directory.


              </p>
              <p>I also created a second more intermediate demo and presented in live on zoom to the CHS Women Devs group in December of 2020. </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://github.com/JenniferSchutzman/hooks-practice">
                      Check out the basic intro to react hooks demo
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="button button-spacing">
                    <a href="https://github.com/JenniferSchutzman/live-coding-demo-to-share">
                      Check out the "Helpful Hooks" live coding demo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={github} alt="Github" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>
                  Github
                </h3>
              </header>
              <p>
                While the majority of my code is proprietary, you can still see the regular activity and professional flow of commits.  This January will mark 3 years of full-time software development.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://github.com/JenniferSchutzman">
                      My github page
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

export default Landing
