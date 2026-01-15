
import PortfolioDetails from '@/components/portfolio-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Voice AI Agent - Intelligent Orchestrator Project",
  description: "A secure, low-latency Voice AI Agent integrating Gemini 2.5, RAG, and logic tools for real-time customer support.",
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;