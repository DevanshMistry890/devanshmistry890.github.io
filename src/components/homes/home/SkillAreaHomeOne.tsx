'use client'
import React, { useEffect } from 'react';
// skill images
import skill_img_1 from "@/assets/img/skill/nextjs.png";
import skill_img_2 from "@/assets/img/skill/react.png";
import skill_img_3 from "@/assets/img/skill/doc.png";
import skill_img_4 from "@/assets/img/skill/fast.png";
import skill_img_5 from "@/assets/img/skill/mongo.png";
import skill_img_6 from "@/assets/img/skill/git.png";

import skill_img_7 from "@/assets/img/skill/ic_1.png";
import skill_img_8 from "@/assets/img/skill/ic_2.png";
import skill_img_9 from "@/assets/img/skill/ic_9.png";
import skill_img_10 from "@/assets/img/skill/ic_4.png";
import skill_img_11 from "@/assets/img/skill/ic_5.png";
import skill_img_12 from "@/assets/img/skill/ic_6.png";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  info: string;
  skill_data: {
    tab_id: string;
    items: {
      img: StaticImageData;
      title: string;
      percent: number;
    }[];
  }[];
}
const skill_content: DataType = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: "A hybrid blend of Data Science research and Fullstack engineering.",
  skill_data: [
    {
      tab_id: "Tech",
      items: [
        {
          img: skill_img_1,
          title: "Next.js",
          percent: 90
        },
        {
          img: skill_img_2,
          title: "React",
          percent: 92
        },
        {
          img: skill_img_3,
          title: "Docker",
          percent: 91
        },
        {
          img: skill_img_4,
          title: "FastAPI & Flask",
          percent: 95
        },
        {
          img: skill_img_5,
          title: "MongoDB",
          percent: 88,
        },
        {
          img: skill_img_6,
          title: "CI/CD & Git",
          percent: 90
        }
      ],
    },
    {
      tab_id: "AI-ML",
      items: [
        {
          img: skill_img_7,
          title: "Python",
          percent: 98,
        },
        {
          img: skill_img_8,
          title: "Azure AI",
          percent: 92
        },
        {
          img: skill_img_9,
          title: "LLMs & RAG",
          percent: 88
        },
        {
          img: skill_img_10,
          title: "TensorFlow",
          percent: 88
        },
        {
          img: skill_img_11,
          title: "NumPy",
          percent: 90
        },
        {
          img: skill_img_12,
          title: "Visualization",
          percent: 88
        }

      ],
    }
  ]
}
const { subtitle, title, info, skill_data } = skill_content

const SkillAreaHomeOne = () => {

  useEffect(() => {
    function tpTabLine2() {
      const marker = document.querySelector('#lineMarker') as HTMLElement;
      const item = document.querySelectorAll('.tp-marker-tab button') as NodeListOf<HTMLButtonElement>;

      // Find the initially active element
      const initiallyActive = document.querySelector('.tp-marker-tab .nav-link.active') as HTMLElement;

      // Set the initial width of the marker based on the initially active element
      if (initiallyActive) {
        marker.style.left = initiallyActive.offsetLeft + 'px';
        marker.style.width = initiallyActive.offsetWidth + 'px';
      }

      function indicator(e: HTMLElement) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
      }

      item.forEach(link => {
        link.addEventListener('click', (e) => {
          indicator(e.target as HTMLElement);
        });
      });

      marker.style.display = 'block';

      function anchorWidthCounter() {
        let anchorWidths = 0;
        let a: HTMLElement;
        let aWidth: number;
        let aPadLeft: number;
        let aPadRight: number;
        let aTotalWidth: number;

        item.forEach((elem) => {
          const activeTest = elem.classList.contains('active');

          if (activeTest) {
            // Break out of the loop.
            return;
          }

          a = elem.parentElement as HTMLElement; // Get the parent element
          aWidth = a.offsetWidth;
          aPadLeft = parseFloat(getComputedStyle(a).paddingLeft);
          aPadRight = parseFloat(getComputedStyle(a).paddingRight);
          aTotalWidth = aWidth + aPadLeft + aPadRight;

          anchorWidths = anchorWidths + aTotalWidth;
        });

        return anchorWidths;
      }
    }

    tpTabLine2();
  }, []);



  return (
    <>
      <section className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2" style={{ backgroundImage: 'url(/assets/img/skill/bg-distort.png)' }}>
        <div className="tp-skill-shape">
          <span className="tp-skill-shape-1"></span>
          <span className="tp-skill-shape-2"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                <nav>
                  <div className="nav nav-tabs tp-marker-tab" id="nav-tab" role="tablist">
                    {skill_data.map((item, i) =>
                      <button key={i} className={`nav-link ${i === 1 ? 'active' : ''}`} id={`nav-${item.tab_id}-tab`} data-bs-toggle="tab"
                        data-bs-target={`#nav-${item.tab_id}`} type="button" role="tab" aria-controls={`nav-${item.tab_id}`}
                        aria-selected={`${i === 0 ? 'false' : 'true'}`} tabIndex={-1}> {item.tab_id}
                      </button>
                    )}
                    <span id="lineMarker"></span>
                  </div>
                </nav>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">

                {skill_data.map((item, i) =>
                  <div key={i} className={`tab-pane fade ${i === 1 ? 'show active' : ''}`}
                    id={`nav-${item.tab_id}`} role="tabpanel" aria-labelledby={`nav-${item.tab_id}-tab`} tabIndex={0}>
                    <div className="tp-skill-tab-content tp-skill-radius">
                      <div className="row">
                        {item.items.map((inner_item, index) =>
                          <div key={index} className="col-xl-2 col-lg-3 col-md-3 col-6">
                            <div className="tp-skill-item text-center">
                              <div
                                className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                                <div className="tp-skill-icon">
                                  <span>
                                    <Image src={inner_item.img} alt={`${inner_item.title} logo`} />
                                  </span>
                                </div>
                                <h3 className="tp-skill-count"><span>{inner_item.percent}</span>%</h3>
                              </div>
                              <div className="tp-skill-content">
                                <h3 className="tp-skill-title">{inner_item.title}</h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillAreaHomeOne;