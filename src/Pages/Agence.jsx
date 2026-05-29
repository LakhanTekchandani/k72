import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function Agence({ setShowFullPage }) {
  const image = useRef(null);
  const imagechange = useRef(null);

  const imagearray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  useEffect(() => {
    imagearray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      let current = 0;
      const interval = setInterval(() => {
        current = (current + 1) % imagearray.length;
        if (imagechange.current) {
          imagechange.current.src = imagearray[current];
        }
      }, 1000);
      return () => clearInterval(interval);
    }

    const tween = gsap.to(image.current, {
      scrollTrigger: {
        trigger: image.current,
        start: "top 23%",
        end: "top -120%",
        scrub: true,
        pin: true,
        onUpdate: (ele) => {
          const index = Math.round(ele.progress * (imagearray.length - 1));
          if (imagechange.current) {
            imagechange.current.src = imagearray[index];
          }
        },
      },
    });

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".section2", {
        backgroundColor: "white",
        color: "black",
        y: 0,
      });

      gsap.set(".flow", { opacity: 0 });
      gsap.set(".flow2", { opacity: 0 });

      ScrollTrigger.create({
        trigger: ".section2",
        start: "top 10%",

        onEnter: () => {
          gsap.to(".section2", {
            backgroundColor: "black",
            color: "white",
            y: 20,
            duration: 1.5,
            ease: "power2.inOut",
          });
          gsap.to(".navbar", { color: "white", duration: 1 });
          gsap.to(".flow", { opacity: 1, delay: 1.2 });
          gsap.to(".flow2", { opacity: 1, delay: 1.2 });
        },

        onLeaveBack: () => {
          gsap.to(".section2", {
            backgroundColor: "white",
            color: "black",
            y: 0,
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(".navbar", { color: "black", duration: 1 });
          gsap.to(".flow", { opacity: 0 });
          gsap.to(".flow2", { opacity: 0 });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar setShowFullPage={setShowFullPage} logoColor="currentColor" />

      <div className="section1 relative overflow-visible min-h-screen">
              
        <div
          ref={image}
          className="
            absolute overflow-hidden
            top-[-10vh] left-[40%] -translate-x-1/2 w-[35%] h-[20vh]
            sm:w-[26%] sm:h-[20vh] sm:top-[3vh]
            md:w-[18%] md:h-[18vh] md:top-[-11vh] md:left-[30.5%]
            lg:translate-x-0 lg:left-[28.5%] lg:top-[-19vh] lg:w-[25%] lg:h-[30vh]
            xl:top-[-25vh] xl:w-[15%] xl:h-[50vh]
          "
        >
          <img
            ref={imagechange}
            className="object-cover rounded-3xl w-full h-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>

        <div className="relative">

          <div
            className="
              font-medium
              mt-[32vh]
              sm:mt-[28vh]
              md:mt-[26vh]
              lg:mt-[52vh]
              xl:mt-[57vh]
            "
          >
            <h1
              className="
                leading-[0.9] text-center text-black uppercase
                text-[23vw]
                sm:text-[21vw]
                md:text-[19vw]
                lg:text-[20vw]
              "
            >
              Soixan7e
              <br />
              Douze
            </h1>
          </div>

          
          <div
            className="
              font-medium
              px-4
              sm:px-6
              lg:px-7
            "
          >
            <p
              className="
                leading-[1]
                text-[5.8vw]
                sm:text-[5vw]
                mt-16
                md:text-[4.2vw] md:mt-[2vh]
                lg:ml-[38%] lg:text-[3.8vw] lg:mt-20
                xl:ml-[40%] xl:text-[3.48vw]
              "
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div
        className="
          section2 relative flex flex-col font-medium overflow-hidden
          mt-2 pt-[8vh] px-4 gap-10
          sm:mt-2 sm:px-5
          md:mt-0 md:pt-[8vh] md:px-[7vw]
          lg:mt-[-6rem] lg:pt-[10vh] lg:px-[10vw]
          xl:mt-[6rem]
        "
      >

        {/* EXPERTISE ROW */}
        <div
          className="
            flex flex-row
            gap-[20vw]
            md:gap-[22vw]
            lg:gap-[14vw]
            xl:gap-[20vw]
          "
        >
          <div>
            <p
              className="
                text-[4.5vw]
                sm:text-[4vw]
                md:text-[2.7vw]
                lg:text-[2vw]
                xl:text-[1.5vw]
              "
            >
              Expertise
            </p>
          </div>

          <div
            className="
              leading-[1.2]
              text-[4.5vw]
              sm:text-[4vw]
              md:text-[2.7vw]
              lg:text-[2vw]
              xl:text-[1.5vw]
            "
          >
            <p>Stratégie</p>
            <p>Publicité</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Contenu</p>
          </div>
        </div>

        {/* THREE PARAGRAPH COLUMNS */}
        <div
          className="
            flex flex-col gap-6
            sm:flex-row sm:justify-between sm:gap-[3.5vw]
            md:gap-[4vw]
          "
        >
          <p
            className="
              w-full leading-[1.2]
              text-[4vw]
              sm:text-[3.5vw]
              md:text-[2.1vw]
              lg:text-[1.7vw]
              xl:text-[1.2vw]
            "
          >
            Nos projets_ naissent dans l'humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>

          <p
            className="
              w-full leading-[1.2]
              text-[4vw]
              sm:text-[3.5vw]
              md:text-[2.1vw]
              lg:text-[1.7vw]
              xl:text-[1.2vw]
            "
          >
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d'exploser. Où on se sent libre d'être la meilleure version de
            soi-même.
          </p>

          <p
            className="
              w-full leading-[1.2]
              text-[4vw]
              sm:text-[3.5vw]
              md:text-[2.1vw]
              lg:text-[1.7vw]
              xl:text-[1.2vw]
            "
          >
            Notre culture_ c'est l'ouverture aux autres. Point. Tout l'équipage
            participe à bâtir une agence dont on est fiers.
          </p>
        </div>

        {/* CENTER IMAGE + FLOW BANDS */}
        <div>

          {/* CENTER PORTRAIT */}
          <div
            className="
              relative w-full flex items-center justify-center
              mt-16 h-[60vh]
              sm:mt-20 sm:h-[65vh]
              md:mt-10 md:h-[62vh]
              lg:mt-40 lg:h-screen
              xl:mt-96
            "
          >
            <div
              className="
                z-10 overflow-hidden rounded-3xl
                w-[78vw] h-[52vh]
                sm:w-[60vw] sm:h-[55vh]
                md:w-[44vw] md:h-[56vh]
                lg:w-[60vw] lg:h-[65vh]
                xl:w-[32vw] xl:h-[100vh]
              "
            >
              <img
                className="w-full h-full object-cover"
                src="https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca"
                alt=""
              />
            </div>
          </div>

          {/* FLOW BAND 1 — SÉBASTIEN */}
          {/*
            Art-direction: band should sit behind the portrait,
            roughly vertically centred on it. On tablet the portrait
            is inside section2 so top is relative to section2 origin.
            md:top-[60vh] places it at ~60% of viewport below section2 top,
            which lands behind the centre portrait naturally.
          */}
          <div
              className="
                absolute left-0 w-full overflow-hidden z-[-1]
               top-[55%]

min-[500px]:top-[68%]

sm:top-[58%]

md:top-[55%]

lg:top-[85vh]
xl:top-[115vh]
              "
          >
            <div className="flex flow">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="
                    flex shrink-0 whitespace-nowrap
                    gap-16 ml-16
                    md:gap-28 md:ml-28
                    lg:gap-72 lg:ml-72
                  "
                >
                  {[0, 1].map((item) => (
                    <div key={item}>
                      <p
                        className="
                          text-[#D3FD50]
                          text-3xl
                          sm:text-4xl
                          md:text-5xl
                          lg:text-8xl
                          xl:text-9xl
                        "
                      >
                        SÉBASTIEN
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* FLOW BAND 2 — ROY */}
          {/*
            Art-direction: second band sits ~30–35vh below first,
            also behind / just below the portrait's lower half.
          */}
          <div
            className="
              absolute right-0 w-full overflow-hidden z-20
              top-[88vh]
              md:top-[82vh]
              lg:top-[105vh]
              xl:top-[145vh]
            "
          >
            <div className="flex flow2">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="
                    flex shrink-0 whitespace-nowrap
                    gap-16 ml-16
                    md:gap-28 md:ml-28
                    lg:gap-72 lg:ml-72
                  "
                >
                  {[0, 1].map((item) => (
                    <div key={item} className="flex items-start">
                      <p
                        className="
                          text-[#D3FD50]
                          text-3xl
                          sm:text-4xl
                          md:text-5xl
                          lg:text-8xl
                          xl:text-9xl
                        "
                      >
                        ROY
                      </p>
                      <p
                        className="
                          mt-3 ml-1
                          text-xs
                          sm:text-sm sm:mt-4
                          md:text-base md:mt-5
                          lg:text-3xl lg:mt-16
                          xl:text-4xl
                        "
                      >
                        Directeur de création adjoint
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Agence;