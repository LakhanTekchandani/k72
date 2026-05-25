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

  // preload images
  useEffect(() => {
    imagearray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // pinned image
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

  // section animation
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

      ScrollTrigger.create({
        trigger: ".section2",
        start: "top -30%",

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
    <div className="overflow-hidden">
      <Navbar
        setShowFullPage={setShowFullPage}
        logoColor="currentColor"
      />

      {/* SECTION 1 */}
      <div className="section1 relative overflow-hidden min-h-screen">

        {/* pinned image */}
        <div
          ref={image}
          className="absolute top-[25vh] left-[30.5%] h-[50vh] w-[15%] overflow-hidden

          max-[1200px]:w-[18%]
          max-[1200px]:left-[36%]

          max-[950px]:w-[22%]
          max-[950px]:left-1/2
          max-[950px]:-translate-x-1/2
          max-[950px]:top-[18vh]
          max-[950px]:h-[42vh]

          max-[768px]:w-[24%]
          max-[768px]:h-[38vh]
          max-[768px]:top-[16vh]

          max-[600px]:w-[34%]
          max-[600px]:h-[32vh]
          max-[600px]:top-[14vh]

          max-[430px]:w-[42%]
          max-[430px]:h-[28vh]"
        >
          <img
            ref={imagechange}
            className="object-cover rounded-3xl w-full h-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>

        <div className="relative">

          {/* heading */}
          <div
            className="font-medium mt-[57vh]

            max-[1200px]:mt-[54vh]

            max-[950px]:mt-[52vh]

            max-[768px]:mt-[48vh]

            max-[600px]:mt-[42vh]

            max-[430px]:mt-[38vh]"
          >
            <h1
              className="text-[20vw] leading-[0.9] text-center text-black uppercase

              max-[1200px]:text-[20vw]

              max-[950px]:text-[18vw]

              max-[768px]:text-[19vw]

              max-[600px]:text-[21vw]

              max-[430px]:text-[23vw]"
            >
              Soixan7e
              <br />
              Douze
            </h1>
          </div>

          {/* paragraph */}
          <div
            className="font-medium px-7

            max-[768px]:px-6

            max-[430px]:px-4"
          >
            <p
              className="ml-[40%] text-[3.48vw] leading-[1]

              max-[1200px]:ml-[38%]
              max-[1200px]:text-[3.8vw]

              max-[950px]:ml-0
              max-[950px]:text-center
              max-[950px]:text-[4vw]
              max-[950px]:mt-[8vh]

              max-[768px]:text-[4.5vw]
              max-[768px]:mt-[6vh]

              max-[600px]:text-[5vw]

              max-[430px]:text-[5.8vw]"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante.
              Elle a des valeurs, une personnalité, une histoire. Si on oublie
              ça, on peut faire de bons chiffres à court terme, mais on la tue
              à long terme. C’est pour ça qu’on s’engage à donner de la
              perspective, pour bâtir des marques influentes.
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 2 */}
      <div
        className="section2 relative flex flex-col mt-[30vh] px-[10vw] gap-10 font-medium overflow-hidden

        max-[1200px]:mt-[24vh]

        max-[950px]:mt-[18vh]
        max-[950px]:px-[7vw]

        max-[600px]:mt-[12vh]
        max-[600px]:px-5

        max-[430px]:px-4"
      >

        {/* expertise */}
        <div
          className="flex flex-row gap-[20vw]

          max-[1200px]:gap-[14vw]

          max-[950px]:justify-between
          max-[950px]:gap-0"
        >

          <div>
            <p
              className="text-[1.5vw]

              max-[1200px]:text-[2vw]

              max-[950px]:text-[2.7vw]

              max-[600px]:text-[4vw]

              max-[430px]:text-[4.5vw]"
            >
              Expertise
            </p>
          </div>

          <div
            className="text-[1.5vw] leading-[1.2]

            max-[1200px]:text-[2vw]

            max-[950px]:text-[2.7vw]

            max-[600px]:text-[4vw]

            max-[430px]:text-[4.5vw]"
          >
            <p>Stratégie</p>
            <p>Publicité</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Contenu</p>
          </div>

        </div>

        {/* paragraphs */}
        <div
          className="flex flex-row justify-between gap-[3.5vw]

          max-[950px]:gap-[4vw]

          max-[600px]:flex-col
          max-[600px]:gap-6"
        >

          <p
            className="w-full text-[1.2vw] leading-[1.2]

            max-[1200px]:text-[1.7vw]

            max-[950px]:text-[2.1vw]

            max-[600px]:text-[3.5vw]

            max-[430px]:text-[4vw]"
          >
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>

          <p
            className="w-full text-[1.2vw] leading-[1.2]

            max-[1200px]:text-[1.7vw]

            max-[950px]:text-[2.1vw]

            max-[600px]:text-[3.5vw]

            max-[430px]:text-[4vw]"
          >
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>

          <p
            className="w-full text-[1.2vw] leading-[1.2]

            max-[1200px]:text-[1.7vw]

            max-[950px]:text-[2.1vw]

            max-[600px]:text-[3.5vw]

            max-[430px]:text-[4vw]"
          >
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.
          </p>

        </div>

        <div>

          {/* center image */}
          <div
            className="mt-96 relative w-full flex items-center justify-center h-screen

            max-[1200px]:mt-72

            max-[950px]:mt-56

            max-[600px]:mt-40"
          >

            <div
              className="w-[32vw] rounded-3xl h-[100vh] z-10 overflow-hidden

              max-[1200px]:w-[40vw]
              max-[1200px]:h-[85vh]

              max-[950px]:w-[50vw]
              max-[950px]:h-[72vh]

              max-[600px]:w-[68vw]
              max-[600px]:h-[55vh]

              max-[430px]:w-[78vw]
              max-[430px]:h-[50vh]"
            >
              <img
                className="w-full h-full object-cover"
                src="https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca"
                alt=""
              />
            </div>

          </div>

          {/* flow 1 */}
          <div
            className="absolute top-[120vh] left-0 w-full overflow-hidden z-[-1]

            max-[950px]:top-[105vh]

            max-[600px]:top-[90vh]"
          >

            <div className="flex flow">

              <div
                className="flex gap-72 ml-72 shrink-0 whitespace-nowrap

                max-[950px]:gap-40
                max-[950px]:ml-40

                max-[600px]:gap-20
                max-[600px]:ml-20"
              >

                <div>
                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    SÉBASTIEN
                  </p>
                </div>

                <div>
                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    SÉBASTIEN
                  </p>
                </div>

              </div>

              <div
                className="flex gap-72 ml-72 shrink-0 whitespace-nowrap

                max-[950px]:gap-40
                max-[950px]:ml-40

                max-[600px]:gap-20
                max-[600px]:ml-20"
              >

                <div>
                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    SÉBASTIEN
                  </p>
                </div>

                <div>
                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    SÉBASTIEN
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* flow 2 */}
          <div
            className="absolute top-[155vh] right-0 w-full overflow-hidden z-20

            max-[950px]:top-[138vh]

            max-[600px]:top-[118vh]"
          >

            <div className="flex flow2">

              <div
                className="flex gap-72 ml-72 shrink-0 whitespace-nowrap

                max-[950px]:gap-40
                max-[950px]:ml-40

                max-[600px]:gap-20
                max-[600px]:ml-20"
              >

                <div className="flex items-start">

                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    ROY
                  </p>

                  <p
                    className="text-4xl mt-16

                    max-[1200px]:text-3xl

                    max-[950px]:text-xl
                    max-[950px]:mt-8

                    max-[600px]:text-sm
                    max-[600px]:mt-4"
                  >
                    Directeur de création adjoint
                  </p>

                </div>

                <div className="flex items-start">

                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    ROY
                  </p>

                  <p
                    className="text-4xl mt-16

                    max-[1200px]:text-3xl

                    max-[950px]:text-xl
                    max-[950px]:mt-8

                    max-[600px]:text-sm
                    max-[600px]:mt-4"
                  >
                    Directeur de création adjoint
                  </p>

                </div>

              </div>

              <div
                className="flex gap-72 ml-72 shrink-0 whitespace-nowrap

                max-[950px]:gap-40
                max-[950px]:ml-40

                max-[600px]:gap-20
                max-[600px]:ml-20"
              >

                <div className="flex items-start">

                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    ROY
                  </p>

                  <p
                    className="text-4xl mt-16

                    max-[1200px]:text-3xl

                    max-[950px]:text-xl
                    max-[950px]:mt-8

                    max-[600px]:text-sm
                    max-[600px]:mt-4"
                  >
                    Directeur de création adjoint
                  </p>

                </div>

                <div className="flex items-start">

                  <p
                    className="text-9xl text-[#D3FD50]

                    max-[1200px]:text-8xl

                    max-[950px]:text-6xl

                    max-[600px]:text-4xl"
                  >
                    ROY
                  </p>

                  <p
                    className="text-4xl mt-16

                    max-[1200px]:text-3xl

                    max-[950px]:text-xl
                    max-[950px]:mt-8

                    max-[600px]:text-sm
                    max-[600px]:mt-4"
                  >
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