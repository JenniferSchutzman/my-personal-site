import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="/#">jennyschutzman@gmail.com</a>
          </div>
        </section>

        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Mount Pleasant, SC 29466
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
