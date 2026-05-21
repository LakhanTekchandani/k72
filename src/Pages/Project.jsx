import React, { useLayoutEffect } from "react";
import Navbar from "../Components/Navigation/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Project({ setShowFullPage }) {
  // Har row ke liye alag images
  const projects = [
    {
      image1:
      "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93",
      image2:
      "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".inner-box", {
        height: "80px", // original example ke jaisa
        ease: "none",
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: ".box1",
          start: "top 100%",
          end: "top -150%",
          scrub: true,
        },
      });
       window.addEventListener("load", ScrollTrigger.refresh);
    });

    return () => {
    window.removeEventListener("load", ScrollTrigger.refresh);
    ctx.revert();
  };
  }, []);

  return (
    <div>
      <Navbar
        setShowFullPage={setShowFullPage}
        logoColor="black"
      />

      <div className="flex">
        <h1 className="text-[13vw] font-medium mt-[44vh] uppercase">
          Projets
        </h1>
        <p className="text-5xl mt-[52.5vh]">17</p>
      </div>

      <div className="mt-[-10vh] box1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex inner-box h-[500px] overflow-hidden w-full mt-[3vh] gap-4 px-4"
          >
            <div className="w-full group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden h-full">
              <img
                src={project.image1}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4  px-5 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
            </div>

            <div className="w-full group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden h-full">
              <img
                src={project.image2}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4  px-5 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
            </div>

          </div>
        ))}
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}

export default Project;