import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import MoreReasons from './components/MoreReasons/MoreReasons';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestuons';
import FooterHome from './components/FooterHome/FooterHome';



function App() {
  return (
    <>
    <Home />
    <TrendingMovies />
    <MoreReasons />
    <FrequentlyAskedQuestions />
    <FooterHome />
    </>
  )
}

export default App

