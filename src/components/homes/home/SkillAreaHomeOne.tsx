'use client'
import React, { useEffect, useState } from 'react';
// skill images
import skill_img_1 from "@/assets/img/skill/nextjs.png";
import skill_img_2 from "@/assets/img/skill/typescript.png";
import skill_img_3 from "@/assets/img/skill/doc.png";
import skill_img_4 from "@/assets/img/skill/fast.png";
import skill_img_5 from "@/assets/img/skill/mongo.png";
import skill_img_6 from "@/assets/img/skill/git.png";

import skill_img_7 from "@/assets/img/skill/ic_1.png";
import skill_img_8 from "@/assets/img/skill/ic_2.png";
import skill_img_9 from "@/assets/img/skill/vertexai.png";
import skill_img_10 from "@/assets/img/skill/pytorch.png";
import skill_img_11 from "@/assets/img/skill/hf.png";
import skill_img_12 from "@/assets/img/skill/ollama.png";
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
  title: "Skills & Ecosystem",
  info: "Combining Data Science depth, Full-Stack engineering, and AI-Native development workflows.",
  skill_data: [
    {
      tab_id: "Engineering & Cloud",
      items: [
        {
          img: skill_img_1,
          title: "Next.js",
          percent: 90
        },
        {
          img: skill_img_2,
          title: "TypeScript",
          percent: 92
        },
        {
          img: skill_img_3,
          title: "Docker",
          percent: 91
        },
        {
          img: skill_img_4,
          title: "FastAPI",
          percent: 95
        },
        {
          img: skill_img_5,
          title: "MongoDB",
          percent: 88,
        },
        {
          img: skill_img_6,
          title: "GitHub Actions",
          percent: 90
        }
      ],
    },
    {
      tab_id: "AI & Data Science",
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
          title: "Vertex AI",
          percent: 88
        },
        {
          img: skill_img_10,
          title: "PyTorch",
          percent: 88
        },
        {
          img: skill_img_11,
          title: "Hugging Face",
          percent: 90
        },
        {
          img: skill_img_12,
          title: "Ollama",
          percent: 88
        }
      ],
    }
  ]
}
const { subtitle, title, info, skill_data } = skill_content

const SkillAreaHomeOne = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    function tpTabLine2() {
      const marker = document.querySelector('#lineMarker') as HTMLElement;
      const item = document.querySelectorAll('.tp-marker-tab button') as NodeListOf<HTMLButtonElement>;
      const initiallyActive = document.querySelector('.tp-marker-tab .nav-link.active') as HTMLElement;

      if (initiallyActive && marker) {
        marker.style.left = initiallyActive.offsetLeft + 'px';
        marker.style.width = initiallyActive.offsetWidth + 'px';
        marker.style.display = 'block';
      }

      function indicator(e: HTMLElement) {
        if (marker) {
          marker.style.left = e.offsetLeft + 'px';
          marker.style.width = e.offsetWidth + 'px';
        }
      }

      item.forEach(link => {
        link.addEventListener('click', (e) => {
          indicator(e.currentTarget as HTMLElement);
        });
      });
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
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`nav-link ${activeTab === i ? 'active' : ''}`}
                        id={`nav-tab-${i}`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-pane-${i}`}
                        aria-selected={activeTab === i}
                      >
                        {item.tab_id}
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
                  <div
                    key={i}
                    className={`tab-pane fade ${activeTab === i ? 'show active' : ''}`}
                    id={`nav-pane-${i}`}
                    role="tabpanel"
                    aria-labelledby={`nav-tab-${i}`}
                    tabIndex={0}
                  >
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