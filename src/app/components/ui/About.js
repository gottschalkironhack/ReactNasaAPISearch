import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className='col-6 m-auto'>
        <h2 className='mb-4'>About</h2>
        <p className='about'>
          This application implements NASA's API in order to enable people 
          to search information and images about all that has been documented around space and
          space science by NASA. 
          NASA's goal is to make their data available to the broader public, following a White House mandate. 
        </p>
      </div>
    )
  }
}

export default About