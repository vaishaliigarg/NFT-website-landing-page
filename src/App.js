import React from 'react'
import './App.css'
import Footer from "./components/Footer"
import InfoSection from "./components/InfoSection"
import TopFold from "./components/TopFold"
import TrendingNfts from "./components/TrendingNfts"
import Header from "./components/Header"
import Brands from './components/Brands'


const App = () => {
  return (
    <div className="max-width">
      <Header/>
      <TopFold/>
      <Brands/>
      <TrendingNfts/>
      <InfoSection/>
      <Footer/>
    </div>
  )
}

export default App