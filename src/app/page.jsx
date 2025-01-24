"use client";
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import BackgroundAnimations from '../components/UI/BackgroundAnimations';
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-main font-noto-sans-jp">
      <BackgroundAnimations />
      
      <div className="relative z-10">
        <Header />
        <HeroSection 
          title="TechNews"
          subtitle="最新のテクノロジーニュース"
          description="AI、ビジネス、健康、エンタメの最新情報をお届け"
        />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
