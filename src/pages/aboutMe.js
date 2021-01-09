import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import wedding from '../assets/images/wedding.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Jenny Schutzman - About Me</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Me</h1>
          </header>
          <span className="image main">
            <img src={wedding} alt="Wedding" />
          </span>
          <p>
            Shortly after moving to Mount Pleasant 3 and a half years ago, I met my husband
            to be and knew that I'd never want to leave. We just recentely
            bought our new family home in Mount Pleasant and we feel
            blessed daily to have found our own piece of heaven on this earth.
          </p>
          <p>
            Both personally and professionaly, I'm the type of person who is
            addicted to learning and trying new things. I'm contanstly pushing
            my team to use the most progressive code standards and libraries;
            partly because I think it's important but partly because if I'm
            not being challenged and learning every week of my life, then I'm
            not being authentic myself. When software development fell into my lap, I knew
            right away that it was the perfect fit to my obsession with
            self-improvement and constant desire to learn more.
          </p>
          <p>
            Being the 2nd of 7 children, I'm a natural self-starter who
            enjoys leadership roles. I hold myself to a high standard, both with
            my work quality and how I treat others. I also hold my
            team and bosses to those same standards, so I only wish to work for teams that emphasize kindness, respect, quality, progressive code standards, and peer-to-peer learning above all
            other things. Life is short so I intend to enjoy every year of
            this life surrounded by optimistic and genuine people both inside
            the office and out.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
