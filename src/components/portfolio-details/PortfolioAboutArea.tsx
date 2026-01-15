
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Hotel Voice RAG Agent: Real-Time AI Orchestrator",
  description: "An enterprise-grade voice orchestrator designed to reduce operational overhead by delivering 24/7 Tier-1 support. This system seamlessly blends generative conversation (Gemini 2.5 Flash) with deterministic business logic for secure room reservations. It features sub-500ms latency, local RAG (ChromaDB) for policy retrieval, and an event-driven CRM pipeline that syncs call logs to Google Sheets in real-time.",
}

const { subtitle, title, description } = portfolio_content

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
                  <span>Voice AI & RAG Agent</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role</h4>
                  <span>AI Engineer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Tech Stack</h4>
                  <span>Next.js 14 / Tailwind</span>
                  <span>FastAPI (Python)</span>
                  <span>Gemini 2.5 Flash Lite</span>
                  <span>ChromaDB (RAG)</span>
                  <span>EdgeTTS / WebSpeech</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2026</span>
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
                  <a className="tp-btn-border-md" href="https://github.com/DevanshMistry890/hotel-voice-agent" target="_blank" rel="noreferrer">
                    View Code/Demo

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