import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../Components/Navigation/Navbar";

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

  // Preload images
  useEffect(() => {
    imagearray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const tween = gsap.to(image.current, {
      scrollTrigger: {
        trigger: image.current,
        start: "top 23%",
        end: "top -140%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (ele) => {
          const index = Math.round(ele.progress * (imagearray.length - 1));
          imagechange.current.src = imagearray[index];
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
      gsap.set(".flow", {
        opacity: 0,
      });
      gsap.set(".flow2", {
        opacity: 0,
      });
      // Scroll down trigger
      ScrollTrigger.create({
        trigger: ".section2",
        start: "top -30%", // Section2 half visible hone par black

        onEnter: () => {
          gsap.to(".section2", {
            backgroundColor: "black",
            color: "white",
            y: 20,
            duration: 1.5,
            ease: "power2.inOut",
          });
          gsap.to(".navbar", {
            color: "white",
            duration: 1,
          });
          gsap.to(".flow", {
            opacity: 1,
            delay: 1.2,
          });
          gsap.to(".flow2", {
            opacity: 1,
            delay: 1.2,
          });
        },

        // Scroll up trigger
        onLeaveBack: () => {
          gsap.to(".section2", {
            backgroundColor: "white",
            color: "black",
            y: 0,
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(".navbar", {
            color: "black",
            duration: 1,
          });
          gsap.to(".flow", {
            opacity: 0,
          });
          gsap.to(".flow2", {
            opacity: 0,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <Navbar setShowFullPage={setShowFullPage} logoColor="currentColor" />
      <div className="section1 ">
        <div
          ref={image}
          className="absolute top-[25vh] left-[30.5%] h-[50vh] w-[15%] overflow-hidden"
        >
          <img
            ref={imagechange}
            className="object-cover rounded-3xl w-full h-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className="relative">
          <div className="font-medium mt-[57.3vh]">
            <h1 className="text-[20vw] leading-[0.9] text-center text-black uppercase ">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="font-medium px-7">
            <p className="ml-[40%] text-[3.48vw] leading-[1] ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 flex flex-col mt-[30vh] px-[10vw] gap-10 font-medium">
        <div className=" flex flex-row gap-[20vw]">
          <div>
            <p className="text-[1.5vw]">Experties</p>
          </div>
          <div className="text-[1.5vw]">
            <p>Stratégie</p>
            <p>Publicité</p>
            <p>Branding</p>
            <p>Design </p>
            <p>Contenu</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[3.5vw]">
          <p className="text-[1.2vw] leading-[1.2]">
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>
          <p className="text-[1.2vw] leading-[1.2]">
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>
          <p className="text-[1.2vw] leading-[1.2]">
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.
          </p>
        </div>

        <div>
          <div className="mt-96 relative w-full flex items-center justify-center h-screen">
            <div className="w-auto rounded-3xl h-[100vh] z-10 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca"
                alt=""
              />
            </div>
          </div>

          <div className="absolute top-[120vh] left-0 w-full overflow-hidden z-[-1]">
            <div className="flex flow">
              <div className="flex gap-72 ml-72 shrink-0 whitespace-nowrap">
                <div>
                  <p className="text-9xl text-[#D3FD50] ">SÉBASTIEN</p>
                </div>
                <div className="text-9xl text-[#D3FD50]">
                  <p>SÉBASTIEN</p>
                </div>
              </div>
              <div className="flex gap-72 ml-72 shrink-0 whitespace-nowrap">
                <div>
                  <p className="text-9xl text-[#D3FD50]">SÉBASTIEN</p>
                </div>
                <div>
                  <p className="text-9xl text-[#D3FD50]">SÉBASTIEN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[155vh] right-0 w-full overflow-hidden z-20">
            <div className="flex flow2 ">
              <div className="flex gap-72 ml-72 shrink-0 whitespace-nowrap">
                <div className="flex ">
                  <p className="text-9xl text-[#D3FD50]">ROY</p>
                  <p className="text-4xl mt-16">
                    Directeur de création adjoint
                  </p>
                </div>
                <div className="flex ">
                  <p className="text-9xl text-[#D3FD50]">ROY</p>
                  <p className="text-4xl mt-16">
                    Directeur de création adjoint
                  </p>
                </div>
              </div>
              <div className="flex gap-72 ml-72 shrink-0 whitespace-nowrap">
                <div className="flex ">
                  <p className="text-9xl text-[#D3FD50]">ROY</p>
                  <p className="text-4xl mt-16">
                    Directeur de création adjoint
                  </p>
                </div>
                <div className="flex">
                  <p className="text-9xl text-[#D3FD50]">ROY</p>
                  <p className="text-4xl mt-16">
                    Directeur de création adjoint
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agence;
