"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Count from '../common/Count';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { useLayoutEffect } from 'react';

import portfolio_ui from "@/assets/img/portfolio/voice/voice_final_UI.png";
import portfolio_img_1 from "@/assets/img/portfolio/voice/p1.png";
import portfolio_img_2 from "@/assets/img/portfolio/voice/p2.png";
import portfolio_img_3 from "@/assets/img/portfolio/voice/p3.png";



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
  title: "Standard chatbots often fail at complex tasks. This system acts as an Intelligent Orchestrator, dynamically routing user intent between deterministic booking tools, probabilistic Generative AI (Gemini 2.5), and a Local Knowledge Base (RAG). The result is a secure, 24/7 Tier-1 support agent that handles reservations and policy questions in real-time.",
  features: [
    "Sub-Second Latency (<500ms) via Gemini 2.5 Flash Lite & EdgeTTS.",
    "Hybrid Orchestration: Seamlessly switches between General Chat, RAG, and Logic Tools.",
    "Event-Driven CRM: Asynchronous call logging to Google Sheets without UI blocking.",
    "Zero Cold-Start: Knowledge base leverages offline ingestion for instant availability."
  ],
  counter_data: [
    {
      counter: 500,
      title: "Voice-to-Voice Latency",
      symbol: "ms"
    },
    {
      counter: 100,
      title: "Call Logging Automation",
      symbol: "%"
    },
    {
      counter: 24,
      title: "Support Availability",
      symbol: "x7"
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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const panels = document.querySelectorAll('.portfolio-panel');
      const tl = gsap.timeline();

      panels.forEach((section) => {
        gsap.set(section, { scale: 1 });

        tl.to(section, {
          scale: 0.8,
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: 'top 10%',
            end: "bottom 60%",
            endTrigger: '.tp-project-3__area',
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="porfolio-details__overview-wrapper theme-bg-2 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="porfolio-details__overview-thumb mb-120">
                <Image data-speed="0.6" src={portfolio_ui} style={{ height: 'auto' }} alt="Voice AI Agent Dashboard UI" />
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
                            <Count number={item.counter} />
                          </em>
                          {item.symbol}
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
                          <Image src={item} style={{ height: 'auto' }} alt="Voice AI Agent Screenshot" />
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