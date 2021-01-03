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
                Shortly after moving Charleston in 2017, I began attending any and every tech meetup.  Early on I noticed something odd; I had met close to 100 people but not a single other female software engineer.  It was lonely at times, discouraging and just kind of strange.  In my former life of non-profit I worked in a female dominated industry and genuinely enjoyed growing professionally alongside like-minded strong women.  I still craved that inspiring feminene comradery and after learning that female software engineers make up approximately 15% of the development community, I felt empowered and reassured that I could not be the only one.  Thus, I started the CHS Women Devs group.
              </p>
              <p>After about a year of monthly happy hours, I decided to add a monthly technical meetup as well. The prupose of the technical meetups are currently to share beginner knowledge about some of the tpoics that have been coming up during the happy hours, but starting in the summer I plan to start organizing more intermediate to advanced talks as well.</p>
              <p>To date we are still doing 2 meetups a month (1 online for technical topics and 1 outdoors for the happy hour).  It's been a uniquly joylful experience to create a causual group of female software engineers that would rarely get to talk code with friends in our normal out-of-work settings.  It's now mostly a sisterhood of developers to lean on and just enjoy one another's company and we seek eachother's mentoship and ideas to continue building a solid career path.  Thank you fellow CHS Women Devs for making this group fun and meaningful!</p>
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
                In 2019 I had the pleasure of acting as the Charleston Women in Tech Mentorship Program Coordinator.
                The program had gone silent for a couple of years so I took the lead as a volunteer to bring it back to life.
                Working alongside Board Members Nina Magnesson and Valerie Sessions, I paired over 100 women in tech with peer
                support in their own specific neighborhoods and directly in a chosen area of interest.  We further organized a
                large kickoff event at the College Of Charleston with breakout sessions, a full panel, a full meal, and
                cocktail hour overlooking the river.  Today this program is still going strong thanks to our efforts in 2019 and am grateful to have had the opportunity to meet countless phenomenol women in tech in the Charleston area.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button">
                    <a href="https://chswomenintech.org/">
                      CWIT -- my abbreviated blurb (scroll to middle)
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="button">
                    <a href="https://chswomenintech.org/stories/">
                      CWIT -- my full blurb (scroll to bottom)
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
