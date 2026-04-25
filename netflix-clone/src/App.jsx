import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import MoreReasons from './components/MoreReasons/MoreReasons';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestuons';
import FooterHome from './components/FooterHome/FooterHome';
import LoginPage from './components/LoginPage/LoginPage';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <Home />
        <TrendingMovies />
        <MoreReasons />
        <FrequentlyAskedQuestions />
        <FooterHome /></>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<h1 className='text-center text-3xl mt-20'>404 Not Found</h1>} />
    </Routes>
  )
}

export default App

