'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';


import project_img_1 from '@/assets/img/portfolio/home_promo/p1.jpg';
import project_img_2 from '@/assets/img/portfolio/home_promo/p2.jpg';
import project_img_3 from '@/assets/img/portfolio/home_promo/p3.jpg';
import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';


interface ProjectItem {
  id: number;
  img: StaticImageData;
  bg_img: string;
  title: string;
  category: string;
  link: string;
}

const project_data: ProjectItem[] = [
  {
    id: 1,
    img: project_img_1,
    bg_img: '/assets/img/portfolio/port-inner-up-1.jpg',
    title: 'Hotel AI Voice Agent',
    category: 'Voice Automation',
    link: '/portfolio-details',
  },
  {
    id: 2,
    img: project_img_2,
    bg_img: '/assets/img/portfolio/port-inner-up-2.jpg',
    title: 'RAG Recipe Book',
    category: 'AI Solutions',
    link: '/portfolio-details-2',
  },
  {
    id: 3,
    img: project_img_3,
    bg_img: '/assets/img/portfolio/port-inner-up-4.jpg',
    title: 'Edge AI NLP Analyzer',
    category: 'AI Solutions',
    link: '/portfolio-details-3',
  },

  {
    id: 4,
    img: project_img_4,
    bg_img: '/assets/img/portfolio/port-inner-up-3.jpg',
    title: 'Upcoming Project',
    category: 'AI Solutions',
    link: '#',
  }
];


const PortfolioArea = () => {
  const col_1_items = project_data.filter((_, i) => i % 2 === 0);
  const col_2_items = project_data.filter((_, i) => i % 2 !== 0);

  useEffect(() => {

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
      x: '25%'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.tp-portfolio-bg-text', {
        x: '-80%'
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-list-scroll-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.portfolio-list-scroll-text', {
        x: '-80%'
      });

  }, [])

  const ProjectCard = ({ item, index }: { item: ProjectItem, index: number }) => (
    <div className="tp-portfolio-item mb-70">
      <Link href={item.link}>
        <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
          <div className="tp-portfolio-thumb-img">
            <Image
              data-speed="0.85"
              style={{ width: '100%', height: 'auto' }}
              src={item.img}
              alt={item.title}
              placeholder="blur" // Optional: adds blur effect while loading
            />
          </div>
        </div>
        <div className="tp-portfolio-content">
          <h3 className="tp-portfolio-title">{item.title}</h3>
          <div className="tp-portfolio-meta d-flex align-items-center">
            {/* Auto-generate number based on index */}
            <span className="tp-portfolio-meta-count">
              {String(item.id).padStart(2, '0')}
            </span>
            <span className="tp-portfolio-meta-arrow">
              <svg width="42" height="13" viewBox="0 0 42 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="tp-portfolio-meta-hover">
              <span>{item.category}</span>
              <span className="tp-portfolio-meta-link">View Project</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      <div className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix  theme-bg-2 pt-80 pb-50"
        data-scrub="0.0001">
        <div className="portfolio-list-scroll-text pb-80 d-flex align-items-center">
          <p>Latest Project</p>
          <p>AI Solutions</p>
        </div>
        <div className="container">
          <div className="row grid gx-90">
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {col_1_items.map((item, index) => (
                  <ProjectCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {col_2_items.map((item, index) => (
                  <ProjectCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;