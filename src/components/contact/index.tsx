'use client'
import React from 'react';
import ContactArea from './ContactArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';



const Contact = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <FooterOne style={false} />
        </div>
      </div>

    </>
  );
};

export default Contact;