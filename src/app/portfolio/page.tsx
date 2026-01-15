
import Portfolio from '@/components/portfolio';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Projects - AI & Machine Learning Portfolio",
  description: "Explore my latest projects in Generative AI, RAG Systems, Computer Vision, and Predictive Analytics. See how I bridge the gap between research and production.",
};


const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;