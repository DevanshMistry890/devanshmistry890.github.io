
import React from 'react';
import Image from 'next/image';
import MobileMenus from '@/layouts/headers/menu/mobile-menus';

import bg_shape from "@/assets/img/offcanvas/bg-shape-3.png";
import logo_white from "@/assets/img/logo/logo.png";
import logo_black from "@/assets/img/logo/logo-black.png";

import EmailIconFooter from '@/svg/home/FooterIcons/EmailIconFooter';
import LinkedInIconFooter from '@/svg/home/FooterIcons/LinkedInIconFooter';
import GitHubIconFooter from '@/svg/home/FooterIcons/GitHubIconFooter';

import offcanvas_1 from "@/assets/img/offcanvas/offcanvas-1.jpg";
import offcanvas_2 from "@/assets/img/offcanvas/offcanvas-2.jpg";
import offcanvas_3 from "@/assets/img/offcanvas/offcanvas-3.jpg"; 

const Offcanvas2 = ({ showCanvas, setShowCanvas }: any) => {
  return (
    <>
      <div className={`tp-offcanvas-area-2 tp-menu-2 ${showCanvas ? 'opened' : ''}`}>
        <div className="tp-offcanvas-shape">
          <Image className="tp-offcanvas-shape-2" src={bg_shape} alt="image" />
        </div>
        <div className="tp-offcanvas-circle-1">
          <span></span>
        </div>
        <div className="tp-offcanvas-circle-2">
          <span></span>
        </div>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top-2 d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo-2">
              <a href="#">
                <Image className="logo-white" src={logo_white} style={{height: 'auto'}} alt="image" />
                <Image className="logo-black" src={logo_black} style={{height: 'auto'}} alt="image" />
              </a>
            </div>
            <div className="tp-offcanvas-close-2">
              <button className="tp-offcanvas-close-btn-2 tp-offcanvas-open-btn-2" onClick={() => setShowCanvas(false)}>
                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main-2">
            <div className="tp-offcanvas-content-2">
              <h3 className="tp-offcanvas-content-title-2">Hello There!</h3>
              <p>I am Devansh Mistry <br /> Data Scientist & AI Developer</p>
            </div>
            <div className="tp-main-menu-mobile d-lg-none">
              <nav>
                <MobileMenus />
              </nav>
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                <div className="col-md-3 col-3">
                  <div className="tp-offcanvas-gallery-img fix">
                    <a href="#"><Image src={offcanvas_1} alt="image" /></a>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="tp-offcanvas-gallery-img fix">
                    <a href="#"><Image src={offcanvas_2} alt="image" /></a>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="tp-offcanvas-gallery-img fix">
                    <a href="#"><Image src={offcanvas_3} alt="image" /></a>
                  </div>
                </div>
                <div className="col-md-3 col-3">
                  <div className="tp-offcanvas-gallery-img fix">
                    <a href="#"><Image src={offcanvas_2} alt="image" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-offcanvas-contact-2">
              <h3 className="tp-offcanvas-contact-title-2">Information</h3>

              <ul>
                <li><a href="mailto:devanshmistry890@gmail.com">devanshmistry890@gmail.com</a></li>
                <li><a href="#">Kitchener, Ontario, Canada</a></li>
              </ul>
            </div>
            <div className="tp-offcanvas-social-2">
              <h3 className="tp-offcanvas-contact-title-2">Follow Me</h3>
              <ul>
                <li>
                  <a href="mailto:devanshmistry890@gmail.com">
                    <EmailIconFooter />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DevanshMistry890" target="_blank" rel="noopener noreferrer">
                    <GitHubIconFooter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/devansh-mistry/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIconFooter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas2;