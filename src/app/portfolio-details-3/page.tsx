

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import PortfolioDetailsThree from '@/components/portfolio-details-3';


export const metadata = {
  title: "Edge AI NLP Analyzer - Privacy-First AI Project",
  description: "Runs quantized Transformer models directly in the browser via WebAssembly for zero-latency, private text analysis.",
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetailsThree />
    </Wrapper>
  );
};

export default index;