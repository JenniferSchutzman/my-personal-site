import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import '../assets/css/addons.css'

import womenDevs from '../assets/images/womenDevs.jpeg'
import CWIT from '../assets/images/CWIT.png'


const Landing = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman -- Tech Community </title>
    </Helmet>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Tech Community Engagement</h1>
          </header>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <a href="https://www.meetup.com/Charleston-women-devs/">
              <img src={womenDevs} alt="CHS Women Devs logo" />
            </a>
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>CHS Women Devs</h3>
              </header>
              <p>
                Shortly after moving Charleston in 2017, I began attending any and every tech meetup.  Early on I noticed something odd; I had met so many people and yet not a single female software engineer!  In my former life of non-profit I worked in a female-dominated industry and I had genuinely enjoyed growing professionally alongside like-minded driven women.  I still craved that inspiring female comradery and after learning that female software engineers make up approximately 15% of the development community, I felt encouraged to the CHS Women Devs group to find some of people in this 15%.
              </p>
              <p>CHS Women Devs has been going strong since the summer of 2018 and to date we are still doing 2 meetups a month (1 online for technical topics and 1 outdoors for the happy hour).  It's been a uniquly wonderful experience to create a causual group of female software engineers that would rarely get to talk code with friends in our normal out-of-work settings.  It's now mostly a sisterhood of developers to lean on and just enjoy one another's company.  We seek eachother's mentorship and ideas to continue building a solid career path. </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://app.tallo.com/register">
                      Check out our upcoming events
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={CWIT} alt="Charleston Women in Tech logo" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>
                  Charleston Women in Tech Mentorship Program
                </h3>
              </header>
              <p>
                In 2019 I had the pleasure of acting as the CHSWIT Mentorship Program Coordinator.
                The program had gone silent for a couple of years so I volunteered to take the lead and bring it back to life.
                Working alongside CHSWIT Board Members Nina Magnesson and Valerie Sessions, I paired over 100 women in tech with peer
                support and mentorship in their own specific neighborhoods and directly in a chosen area of interest.  We further organized a
                large kickoff event at the College Of Charleston with breakout sessions, a panel of 5 experts, a full meal, and
                cocktail hour overlooking the river.  Today this program is still going strong thanks to our efforts in 2019 and am grateful to have had the opportunity to meet countless phenomenol women in tech in the Charleston area.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://chswomenintech.org/">
                      Abbreviated comments on CHSWIT (scroll to mid page)
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://chswomenintech.org/stories/">
                      Full commentary on CHSWIT (scroll to bottom of page)
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
