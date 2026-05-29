import React, { useEffect } from "react";
import "../App.css";
import Video from "../Components/Home/Video";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "../Components/Navigation/Navbar";


function Home({ setShowFullPage }) {
  useEffect(() => {
    const animation = gsap.context(() => {
      gsap.from(".line", {
        opacity: 0,
        y: -100,
        stagger: 0.25,
        delay: 0.8,
        rotateX: 90,
        duration: 1.5,
        ease: "power3.out",
      });
    });

    return () => animation.revert();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar setShowFullPage={setShowFullPage} logoColor="white" />

      <div className="fixed inset-0 -z-10">
        <Video />
      </div>

      <div  className="relative flex flex-col justify-evenly h-full px-4 sm:px-6 md:px-8 pt-[30vh] sm:pt-[14vh] md:pt-[12vh] lg:pt-[2vh] pb-6">
        
        <div className="lg:mt-[4vh]">
          <div className="line text-center text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.8] uppercase font-light text-white">
            L'étincelle
          </div>

          <div className="line flex justify-center items-center gap-2 sm:gap-3 md:gap-4 text-center text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.9] uppercase font-light text-white">
            qui
            <div className=" w-[24vw] h-[10vw] sm:w-[20vw] sm:h-[8vw] md:w-[17vw] md:h-[7vw] lg:w-[17vw] lg:h-[7vw] mt-[-1vw] overflow-hidden rounded-full">
              <Video rounded />
            </div>
            génère
          </div>

          <div className="line text-center text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.8] uppercase font-light text-white">
            la créativité
          </div>
        </div>

       
        <div className=" md:w-[60%] lg:w-[25%] w-[85%] sm:w-[75%] ml-auto leading-tight px-2 sm:px-4 text-white text-[3.4vw] sm:text-[2.4vw] md:text-[1.8vw] lg:text-[1vw] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </div>

       
        <div className=" flex justify-center items-center flex-wrap mt-6 sm:mt-8 md:mt-10 lg:mt-12 gap-2 sm:gap md:gap-4">
          <Link to="/projects" className=" text-white lg:py-0.5 py-[0.5vh] md:py-[0.4vh] lg:px-4 px-3 md:px-3 uppercase border-2 hover:border-[#D3FD50] font-medium lg:text-8xl text-xl
            sm:text-3xl md:text-5xl rounded-full hover:text-[#D3FD50] transition-colors">
            projects
          </Link>

          <Link to="/agence"  className=" text-white lg:py-0.5 py-[0.5vh] md:py-[0.4vh] lg:px-4 px-3 md:px-3 uppercase border-2 hover:border-[#D3FD50] font-medium lg:text-8xl text-xl
            sm:text-3xl md:text-5xl rounded-full hover:text-[#D3FD50] transition-colors">
            agence
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
