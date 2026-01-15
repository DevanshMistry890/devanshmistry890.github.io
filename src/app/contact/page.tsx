
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Contact Me - Let's Build Intelligent Solutions",
  description: "Get in touch for collaboration on AI projects, tech consulting, or full-stack development. Available for opportunities in Data Science and ML Engineering.",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;