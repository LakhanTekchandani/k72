import React, { useLayoutEffect } from "react";
import Navbar from "../Components/Navigation/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../Components/Footer/Footer";

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
        height: "80px",
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

     
      <div className="flex items-start px-4 sm:px-6 md:px-8">
        <h1 className="text-[16vw] sm:text-[14vw] md:text-[13vw] font-medium mt-[28vh] sm:mt-[32vh] md:mt-[38vh] lg:mt-[44vh] uppercase leading-none">
          Projets
        </h1>

        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-[29vh] sm:mt-[37vh] md:mt-[39vh] lg:mt-[48.5vh]">
          17
        </p>
      </div>

      
      <div className="mt-[-2vh] sm:mt-[-6vh] md:mt-[-3vh] lg:mt-[-5vh] box1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row inner-box h-auto md:h-[380px] lg:h-[500px] overflow-hidden w-full mt-[2vh] sm:mt-[3vh] gap-3 md:gap-4 px-3 sm:px-4"
          >
            {/* Left Image */}
            <div className="w-full group transition-all relative rounded-none hover:rounded-[25px] md:hover:rounded-[40px] overflow-hidden h-[280px] sm:h-[350px] md:h-full">
              <img
                src={project.image1}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
                <h2 className="uppercase text-lg sm:text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 md:border-4 px-3 md:px-5 text-white border-white rounded-full">
                  Vior le projet
                </h2>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full group transition-all relative rounded-none hover:rounded-[25px] md:hover:rounded-[40px] overflow-hidden h-[280px] sm:h-[350px] md:h-full">
              <img
                src={project.image2}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
                <h2 className="uppercase text-lg sm:text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 md:border-4 px-3 md:px-5 text-white border-white rounded-full">
                  Vior le projet
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Project;