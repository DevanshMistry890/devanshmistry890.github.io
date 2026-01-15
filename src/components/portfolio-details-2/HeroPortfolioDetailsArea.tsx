

'use client'
import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';

import banner_img from "@/assets/img/portfolio/book/header.jpg";
import PortfolioDownArrowIcon from '@/svg/icons/PortfolioDownArrowIcon';


const scrollTo = () => {
  scroller.scrollTo('porfolio-details', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroPortfolioDetailsArea = ({ style }: any) => {
  return (
    <>
      <div className="porfolio-details__area porfolio-details__color-customize p-relative smooth">
        <a className='pointer' onClick={scrollTo}>
          <div className="tp-hero-3__scrool-down z-index-5">
            <span className="text">Scroll</span> 
            <PortfolioDownArrowIcon />
          </div>
        </a>
        <div className="porfolio-details">
          <Image src={banner_img} alt="Project hero image"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={100}
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </div>
      </div>
    </>
  );
};

export default HeroPortfolioDetailsArea;