

import PortfolioDetailsTwo from '@/components/portfolio-details-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "RAG Recipe Book - Smart Cooking Assistant Project",
  description: "An AI-powered cooking assistant using Retrieval-Augmented Generation to generate recipes based on available ingredients.",
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetailsTwo />
    </Wrapper>
  );
};

export default index;