import React from "react";
import "../App.css";
import Video from "../Components/Home/Video";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../Components/Navigation/Navbar";

function Home({ setShowFullPage }) {

  useEffect(()=>{
    const animation=gsap.context(()=>{
      gsap.from('.line',{
        opacity:0,
        y:-100,
        stagger:0.3,
        delay:1,
        rotateX:90,
        duration:2,
        ease:'power2.out'
      })
    })
    return ()=>animation.revert()
  },[])


  return (
    <div className="h-screen w-screen">
       <Navbar
        setShowFullPage={setShowFullPage}
        logoColor="white"
      />
      <div className="w-full h-full object-cover fixed">
        <Video />
      </div>
      <div className="relative flex flex-col md:pt-[200px]  pt-[350px] lg:pt-0 lg:gap-[50vh] h-full px-4 py-1">
        <div className="md:mt-20 ">
          <div className="top-0 line text-center lg:text-[9vw] md:text-[10vw] text-[12vw] leading-[0.8] uppercase font-light pt-4  text-white">
            L'étincelle
          </div>
          <div className="line text-center lg:text-[9vw] md:text-[10vw] text-[12vw] leading-[0.9] uppercase font-light text-white flex justify-center items-center gap-4">
            qui
            <div className="w-[17vw] h-[7vw] mt-[-1vw] overflow-hidden rounded-full ">
              <Video rounded />
            </div>
            génère
          </div>
          <div className="line text-center lg:text-[9vw] text-[12vw] md:text-[10vw] leading-[0.8] uppercase font-light text-white">
            la créativité
          </div>
        </div>
        <div className=" md:w-[60%] lg:w-[25%] w-[70%] ml-auto leading-tight px-4 text-white text-1xl lg:mt-[-5vw] md:mt-2 mt-0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </div>
        <div className="flex justify-center lg:pb-0 pb-2 items-center lg:gap-4 md:gap-4 gap-2">
          <Link to="/projects" className=" text-white lg:py-0.5 py-[0.2vh] md:py-[0.4vh] lg:px-4 px-2 md:px-3 uppercase border-2 hover:border-[#D3FD50] font-medium lg:text-8xl text-2xl md:text-5xl rounded-full hover:text-[#D3FD50] transition-colors">
            projects
          </Link>
          <Link to="/agence" className=" text-white lg:py-0.5 py-[0.2vh] md:py-[0.4vh] lg:px-4 px-2 md:px-3 uppercase border-2 hover:border-[#D3FD50] font-medium lg:text-8xl text-2xl md:text-5xl rounded-full hover:text-[#D3FD50] transition-colors">
            agence
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
