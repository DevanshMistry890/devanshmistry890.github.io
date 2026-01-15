
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Count from '../common/Count';

import portfolio_details_img_1 from "@/assets/img/portfolio/book/final_UI.png";
import portfolio_img_1 from "@/assets/img/portfolio/book/p1.png";
import portfolio_img_2 from "@/assets/img/portfolio/book/p2.png";
import portfolio_img_3 from "@/assets/img/portfolio/book/p3.png";


interface DataType {
  title: string;
  features: string[];
  counter_data: {
    counter: number;
    title: string;
    symbol?: string;
  }[];
  images: StaticImageData[];
}

const portfolio_detaisl_content: DataType = {
  title: "We built an AI-powered cooking assistant that eliminates “Fridge Paralysis” when ingredients are available but inspiration isn’t. Using Retrieval-Augmented Generation and vector search, the system understands ingredient context and generates creative, realistic recipes using only what the user has on hand, delivering instant, practical meal ideas without relying on exact recipe searches.",
  features: [
    "Context-Aware RAG: Grounds AI responses in verified recipe data.",
    "Ingredient Matching: Semantic vector search via MongoDB Atlas.",
    "Hallucination Control: Drastically reduces fake or unsafe recipes.",
    "Dynamic Instruction: Gemini generates step-by-step cooking guides.",
    "Nutritional Verification: Cross-referenced with Spoonacular API."
  ],
  counter_data: [
    {
      counter: 95,
      title: "Ingredient Relevance",
      symbol: " "
    },
    {
      counter: 99,
      title: "Safe Output Rate",
      symbol: "%"
    },
    {
      counter: 80,
      title: "Time Saved vs Browsing",
      symbol: "%"
    }
  ],
  images: [
    portfolio_img_1,
    portfolio_img_2,
    portfolio_img_3,
  ]
}

const { title, features, counter_data, images } = portfolio_detaisl_content

const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="porfolio-details__overview-wrapper theme-bg-2 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="porfolio-details__overview-thumb mb-120">
                <Image data-speed="0.6" src={portfolio_details_img_1} style={{ height: 'auto' }} alt="RAG Recipe Book App Interface" />
              </div>
            </div>
            <div className="porfolio-details__overview-box mt-120 pb-135">
              <div className="row">
                <div className="col-xl-5 col-lg-4">
                  <div className="porfolio-details__overview-left">
                    <h4 className="porfolio-details__overview-title mb-40">Overview</h4>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-8">
                  <div className="porfolio-details__overview-right">
                    <p>{title}</p>
                    <div className="porfolio-details__overview-list">
                      <ul>
                        {features.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="porfolio-details__result-box pb-70">
              <div className="row">
                <div className="col-xl-5 col-lg-4">
                  <div className="porfolio-details__result-left">
                    <h4 className="porfolio-details__overview-title mb-40">Results</h4>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-8">
                  <div className="porfolio-details__result-right">
                    {counter_data.map((item, index) => (
                      <div className="porfolio-details__result d-flex align-items-end" key={index}>
                        <span className="child-1 d-inline-block d-flex">
                          <em data-purecounter-duration=".7" className="purecounter" style={{ display: 'inline-block' }}>
                            <Count number={item.counter} /></em>%
                        </span>
                        <span className="child-2">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="porfolio-details__thumb-box tp-project-3__area">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-portfolio-item-wrapper-3">

                    {images.map((item, index) => (
                      <div key={index} className="tp-portfolio-item-3 portfolio-panel mb-80 tp-hover-reveal-text">
                        <a href="#">
                          <Image src={item} style={{ height: 'auto' }} alt="RAG Recipe Book Screenshot" />
                          <span></span>
                        </a>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{ height: '250px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;