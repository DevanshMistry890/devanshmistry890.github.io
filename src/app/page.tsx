import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Home - Devansh Mistry",
  description:
    "Devansh Mistry is an Azure Certified AI Engineer & Data Scientist based in Waterloo Kitchener, Ontario, Canada. Specializing in building scalable Machine Learning, Deep Learning, and Generative AI solutions. Explore projects in Computer Vision, NLP, and Cloud AI integration.",
  // Keywords, authors, openGraph are now inherited from layout.tsx
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;