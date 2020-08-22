import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import tallo from '../assets/images/tallo.jpg'
import gotcha from '../assets/images/gotcha.png'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman's Code</title>
      {/* <meta name="description" content="Landing Page" /> */}
    </Helmet>

    {/* <BannerLanding /> */}

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Professional and personal coding experience</h2>
          </header>
          <p>
            Not sure what to say here. Will ask for David's help. Nullam et orci
            eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
            rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas
            massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu
            lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et
            orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
            rhoncus condimentum sem. In efficitur ligula tate urna.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <a href="https://app.tallo.com/register">
              <img src={tallo} alt="Tallo" />
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
                to front for over one million users and an additional admin
                site. Main highlights of my direct involvement include: took
                part in complete resign of the Tallo app profile functionality
                utlizing AngularJS, Java, MySQL and LESS; personally created
                dozens of React components for the new ui kit; central in the
                transition to React Hooks; and currently starting to convert the
                entire existing from AngularJS to React with Redux.
              </p>
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
            <img src={gotcha} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>
                  Gotcha (best known locally for hosting Holy Spokes Bike Share)
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
                  <Link to="/generic" className="button">
                    <a href="https://ridegotcha.com/">
                      Click here to see the marketing website I built.
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
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
