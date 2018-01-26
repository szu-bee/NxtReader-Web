import React from 'react'
import TopContainer from '../containers/TopContainer'
import MiddleContainer from '../containers/MiddleContainer'

const Footer = () => (
  <div id="footer">
    <div>
      Contact with us: Open issues on { }
      <a href="https://github.com/NxtReader/NxtReader-Web" 
        className="underlink_hover">
        GitHub
      </a>.
    </div>
  </div>
)

const Intro = () => (
  <div id="Intro">
    <main>
      <TopContainer />
      <MiddleContainer />
    </main>
    <Footer />
  </div>
)

export default Intro
