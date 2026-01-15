'use client'
import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import PortfolioArea from './PortfolioArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import '@/assets/custom.css';


const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
            <PortfolioArea />
          </main>
          <FooterOne style={false} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;