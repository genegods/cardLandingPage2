import React from 'react'
import HeroPage from './HeroPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className=" md:w-2/3 md:mx-auto md:relative">
        <HeroPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage