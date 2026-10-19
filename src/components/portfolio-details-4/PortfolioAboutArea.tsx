
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Intelligent Recipe RAG: Transforming Ingredients into Culinary Actions.",
  description: "A Retrieval-Augmented Generation (RAG) system engineered to solve the 'what's for dinner' dilemma. Unlike standard recipe search engines, this application allows users to input their available ingredients. It leverages MongoDB Atlas Vector Search to retrieve semantically relevant culinary data and uses Google Gemini to synthesize safe, step-by-step cooking instructions. This architecture eliminates hallucinations and ensures recipes are actually cookable with the user's current inventory.",
  live_link: "https://www.airecipebook.me",
}

const { subtitle, title, description, live_link } = portfolio_content

const PortfolioAboutArea = () => {
  return (
    <>
      <div id="porfolio-details" className="porfolio-details__info-wrap theme-bg-2 pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4">
              <div className="porfolio-details__left-info">
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Project Type</h4>
                  <span>GenAI & Full Stack Web App</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role</h4>
                  <span>AI Engineer & Full Stack Dev</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Tech Stack</h4>
                  <span>Google Gemini API</span>
                  <span>MongoDB Atlas (Vector Search)</span>
                  <span>React.js / Vite</span>
                  <span>Firebase Auth</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2025</span>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="porfolio-details__right-info">
                <div className="porfolio-details__right-title-box">
                  <h4 className="tp-section-title-4 mb-35">{title}</h4>
                  <p>{description}</p>
                </div>
                <div className="porfolio-details__right-btn">
                  <a className="tp-btn-border-md" href={live_link} target="_blank" rel="noopener noreferrer">
                    View Website

                    <span>
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1H10V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioAboutArea;