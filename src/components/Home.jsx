import React from 'react'
import Follow from '../Page/Follow'
import Header from '../Page/Header'
import Topbar from '../Page/Topbar'
import Download from '../Page/Download'

function Home() {
  return (
    <div>
        <Header/>
        <Topbar/>
        <Follow/>
      <Download/>
    </div>
  )
}

export default Home
