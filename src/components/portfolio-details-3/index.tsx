
import React from 'react';
import HeroPortfolioDetailsArea from './HeroPortfolioDetailsArea';
import PortfolioAboutArea from './PortfolioAboutArea';
import PortfolioDetailsArea from './PortfolioDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const PortfolioDetailsThree = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroPortfolioDetailsArea style={false} />
            <PortfolioAboutArea />
            <PortfolioDetailsArea />
          </main>
          <FooterOne style={false} />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsThree;