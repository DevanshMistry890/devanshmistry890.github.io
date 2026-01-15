
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Count from '../common/Count';

import portfolio_details_img_1 from "@/assets/img/portfolio/edge/final_UI.png";
import portfolio_img_1 from "@/assets/img/portfolio/edge/p1.png";
import portfolio_img_2 from "@/assets/img/portfolio/edge/p2.png";
import portfolio_img_3 from "@/assets/img/portfolio/edge/p3.png";



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
  title: "Traditional NLP relies on heavy cloud APIs, introducing latency, privacy risks, and recurring costs. This project completely re-engineers the workflow by running quantized Transformer models directly inside the browser using WebAssembly and WebGPU.",
  features: [
    "Zero-Latency Inference via ONNX Runtime & WebAssembly.",
    "100% Privacy Preserved: No user data ever leaves the device.",
    "Multi-threaded processing using Web Workers to prevent UI blocking.",
  ],
  counter_data: [
    {
      counter: 100,
      title: "Data Privacy Score",
      symbol: "%"
    },
    {
      counter: 90,
      title: "Cloud Cost Reduction",
      symbol: "%"
    },
    {
      counter: 25,
      title: "Model Size (MB) - Quantized",
      symbol: "MB"
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
                <Image data-speed="0.6" src={portfolio_details_img_1} style={{ height: 'auto' }} alt="Edge AI NLP Analyzer Dashboard" />
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
                          <Image src={item} style={{ height: 'auto' }} alt="Edge AI NLP Analyzer Screenshot" />
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