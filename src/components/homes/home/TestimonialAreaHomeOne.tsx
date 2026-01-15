'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import quote from "@/assets/img/testimonial/quote.svg";

import user_avatar_1 from "@/assets/img/users/sp.jpg";
import user_avatar_2 from "@/assets/img/users/va.jpg";
import user_avatar_3 from "@/assets/img/users/vd.jpg";
import user_avatar_4 from "@/assets/img/users/at.png";
import user_avatar_5 from "@/assets/img/users/jv.jpg";
import user_avatar_6 from "@/assets/img/users/nj.jpg";
import user_avatar_7 from "@/assets/img/users/ar.jpg";
import user_avatar_8 from "@/assets/img/users/sm.png";

import StartIcon from '@/svg/icons/StartIcon';
import { gsap } from 'gsap';



interface DataType {
  subtitle: string;
  title: string;
  info: string;
  testimonial_slider_data: {
    id: number;
    rating_text: string;
    description: string;
  }[];
  testimonial_nav_data: {
    id: number;
    img: StaticImageData;
    name: string;
    designation: string;
    company: string;
  }[];
}


const testimonial_content: DataType = {
  subtitle: "Endorsements",
  title: "What Professionals say",
  info: "Recognized for innovation, engineering depth, and design excellence.",
  testimonial_slider_data: [
    {
      id: 1,
      rating_text: "5.0 Rating",
      description: `"Devansh combines exceptional technical dedication with a strong belief in his architectural decisions. His ability to design complex systems while maintaining confidence in execution is truly commendable."`,
    },
    {
      id: 2,
      rating_text: "5.0 Rating",
      description: `"He has consistently delivered remarkable innovation through his web solutions. His approach to building intelligent tools and integrating smart features transforms standard applications into exceptional user experiences."`,
    },
    {
      id: 3,
      rating_text: "4.9 Rating",
      description: `"One of the most promising talents I have mentored. Devansh brings infectious enthusiasm and design excellence to every project, consistently outperforming expectations with his diligent work ethic."`,
    },
    {
      id: 4,
      rating_text: "5.0 Rating",
      description: `"A visionary in the making. Devansh possesses a rare, intuitive grasp of computer technology that suggests he will be a significant innovator in the future of AI and software engineering."`,
    },
    // update 
    {
      id: 1,
      rating_text: "5.0 Rating",
      description: `"It is rare to find a developer who dominates both the complex AI algorithms and the frontend user experience. Devansh delivered a seamless Next.js application where the AI integration feels native and instantaneous."`,
    },
    {
      id: 2,
      rating_text: "5.0 Rating",
      description: `"The RAG architecture Devansh implemented transformed how we handle internal knowledge. It doesn't just search our documents; it understands them, cutting our information retrieval time by half."`,
    },
    {
      id: 3,
      rating_text: "5.0 Rating",
      description: `"Devansh's approach to local AI agents was a game-changer for our data privacy. He engineered a solution that runs powerful models directly on the edge, giving us intelligence without compromising security."`,
    },
    {
      id: 4,
      rating_text: "4.9 Rating",
      description: `"We needed to move from guesswork to data-driven decisions, and Devansh made that transition seamless. His actionable insights that helped our Scrum team plan more effectively, prioritize the right work, and optimize resource allocation sprint after sprint."`,
    },
  ],
  testimonial_nav_data: [
    {
      id: 1,
      img: user_avatar_1,
      name: "Mrs. Swati Patel",
      designation: "Professor at",
      company: "LDCE",
    },
    {
      id: 2,
      img: user_avatar_2,
      name: "Mrs. Vaishali Adhwaryu",
      designation: "Professor at",
      company: "LDCE",
    },
    {
      id: 3,
      img: user_avatar_3,
      name: "Vishvdeep Dasadiya",
      designation: "Lead ML Engineer",
      company: "F(X) Data Labs",
    },
    {
      id: 4,
      img: user_avatar_4,
      name: "Mr. Mustafa Buxa",
      designation: "Founder at",
      company: "CubeT",
    },
    // update
    {
      id: 1,
      img: user_avatar_8,
      name: "Soham Modi",
      designation: "Colleague",
      company: "Peer Review",
    },
    {
      id: 2,
      img: user_avatar_5,
      name: "Chintan Chatterjee",
      designation: "Senior Engineer",
      company: "Industry Mentor",
    },
    {
      id: 3,
      img: user_avatar_6,
      name: "Miss. N Desai",
      designation: "Senior Developer",
      company: "",
    },
    {
      id: 4,
      img: user_avatar_7,
      name: "Amr El-Nowehy",
      designation: "Senior Scrum Master",
      company: "",
    }

  ]
}

const { subtitle, title, info, testimonial_slider_data, testimonial_nav_data } = testimonial_content


// slider a
const slider_a = {
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// slider b
const slider_b = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const TestimonialAreaHomeOne = ({ style }: any) => {

  const bg_img = style ? null : "/assets/img/bg/distort-bg.png"

  useEffect(() => {
    let testi_Line_1 = document.querySelectorAll('.tp-testimonial-user-border');

    testi_Line_1.forEach((line, index) => {
      gsap.set(line, {
        width: 0
      });
      gsap.to(line, {
        scrollTrigger: {
          trigger: '.tp-testimonial-user-border',
          start: 'top 90%',
          end: "bottom 80%",
          markers: false,
        },
        width: "100%"
      });
    });

  })


  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const sliderRef = useRef<Slider | null>(null);


  return (
    <>
      <section style={{ backgroundImage: `url(${bg_img})` }} className={`tp-testimonial-area ${style ? 'sv-inner__customize pb-160 black-bg-3' : 'theme-bg tp-bg-light pb-80'} pt-25`}>
        <div className="container mt-50 pt-10">
          {style ? null :
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-testimonial-section-title">
                  <div className="tp-section-title-wrapper tp_text_anim mb-50 text-center">
                    <div className="tp-section-title-inner tp_title_anim p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title">{title}</h3>
                    </div>
                    <p>{info}</p>
                  </div>
                </div>
              </div>
            </div>
          }

          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider ml-70 mr-70">

                <Slider
                  {...slider_a}
                  asNavFor={slider2 as Slider}
                  ref={(slider) => {
                    setSlider1(slider);
                    sliderRef.current = slider;
                  }}
                  className="tp-testimonial-slider-active swiper-container"
                >
                  {testimonial_slider_data.map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="tp-testimonial-item theme-bg-2"
                        style={{ backgroundImage: 'url(/assets/img/testimonial/bg-distort.png)' }}>
                        <div className="tp-testimonial-quote">
                          <Image src={quote} alt="Testimonial Quote Icon" />
                        </div>
                        <div className="tp-testimonial-item-top d-flex align-items-center">

                          <div className="tp-testimonial-rating">
                            <StartIcon />{' '}
                            <StartIcon />{' '}
                            <StartIcon />{' '}
                            <StartIcon />{' '}
                            <StartIcon />{' '}
                          </div>

                          <p>{item.rating_text}</p>
                        </div>
                        <div className="tp-testimonial-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>



                <div className="tp-testimonial-thumb-slider">

                  <Slider
                    {...slider_b}
                    asNavFor={slider1 as Slider}
                    ref={(slider) => setSlider2(slider)}
                    className="tp-testimonial-nav swiper-container"
                  >
                    {testimonial_nav_data.map((item, index) => (
                      <div key={index} className="swiper-slide">
                        <div
                          className="tp-testimonial-user-item d-flex justify-content-center align-items-center">
                          <div className="tp-testimonial-user-thumb">
                            <Image src={item.img} alt={`${item.name} - ${item.designation}`} />
                          </div>
                          <div className="tp-testimonial-user-content">
                            <h3 className="tp-testimonial-user-title">{item.name}</h3>
                            <span className="tp-testimonial-user-designation">{item.designation}
                              <a href="#"> {item.company}</a></span>
                          </div>
                          <span className="tp-testimonial-user-border"></span>
                        </div>
                      </div>
                    ))}
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;