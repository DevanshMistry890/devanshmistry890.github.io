'use client';
import React from 'react';
import { CopyRight } from '@/components/common/SocialLinks';
import Link from 'next/link';

// Import the new icons we created
import LinkedInIconFooter from '@/svg/home/FooterIcons/LinkedInIconFooter';
import GitHubIconFooter from '@/svg/home/FooterIcons/GitHubIconFooter';
import EmailIconFooter from '@/svg/home/FooterIcons/EmailIconFooter';

interface DataType {
  title: string;
  title_2: JSX.Element;
  btn_text_1: string;
  btn_text_2: string;
  footer_data: {
    id: number;
    name: string;
    user_name: string;
    link: string;
    icon: React.JSX.Element;
  }[];
}

const footer_content: DataType = {
  // Updated title to sound more Engineering focused
  title: "Let's engineer the future",
  title_2: <>Let's engineer <br /> scalable AI solutions</>,

  // Updated Buttons for Recruitment context
  btn_text_1: 'Contact Me',
  btn_text_2: 'View Resume',

  footer_data: [
    {
      id: 1,
      name: "LinkedIn",
      user_name: "Devansh-Mistry",
      link: "https://www.linkedin.com/in/devansh-mistry/",
      icon: <LinkedInIconFooter />,
    },
    {
      id: 2,
      name: "GitHub",
      user_name: "DevanshMistry890",
      link: "https://github.com/DevanshMistry890",
      icon: <GitHubIconFooter />,
    },
    {
      id: 3,
      name: "Email",
      user_name: "devanshmistry890",
      link: "mailto:devanshmistry890@gmail.com",
      icon: <EmailIconFooter />,
    },
  ]
}

const { btn_text_1, btn_text_2, title_2, footer_data } = footer_content

const FooterOne = ({ style }: any) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";

  return (
    <>
      <footer>
        <div className={`tp-footer-bg ${style ? "tp-footer__customize  black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}>

          {/* Animated Circles */}
          <div className="tp-footer-circle-1"><span></span></div>
          <div className="tp-footer-circle-2"><span></span></div>
          <div className="tp-footer-circle-3" data-speed=".7"><span></span></div>

          <div className={`tp-footer-area ${style ? "tp-footer-inner__customize" : ""} pb-80 pt-120`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3 className={`tp-footer-title ${style ? "" : "big"} tp_title_anim`}>{title_2}</h3>
                  </div>
                </div>
              </div>

              {/* Button Section */}
              {style ?
                // This block is for "Dark/Alternative" style footer
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        {/* Link to Resume or About Page */}
                        <Link className="tp-btn-white-xl w-100" href="/about">
                          <div><span>{btn_text_2}</span></div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <a className="tp-btn-grey-xl w-100" href="/contact">
                          <div><span>{btn_text_1}</span></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                :
                // This block is for "Light/Default" style footer
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <a className="tp-btn-green w-100" href="/contact">
                          <div><span>{btn_text_1}</span></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        {/* Link to Resume Page (Make sure /about or /resume page exists) */}
                        <Link className="tp-btn-white-xl w-100" href="/assets/img/cv/Mistry_Devansh.pdf" target="_blank" rel="noopener noreferrer">
                          <div><span>{btn_text_2}</span></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }

              {/* Social Links Section */}
              <div className="row gx-50">
                {footer_data.map((item, index) => (
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
                    {/* Added target="_blank" to open links in new tab */}
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <div className="tp-footer-social-item d-flex align-items-center justify-content-between">
                        <span className="tp-footer-anim-border"></span>
                        <div className="tp-footer-social-text z-index-1">
                          <span className="child-1">{item.name}</span>
                          <span className="child-2">{item.user_name}</span>
                        </div>
                        <div className="tp-footer-social-icon z-index-1">
                          <span>
                            {item.icon}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="tp-copyright-area pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-left text-center text-md-start">
                    <p><CopyRight /></p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-right text-center text-md-end">
                    <span>{new Date().getFullYear()} Devansh Mistry | Azure AI Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;