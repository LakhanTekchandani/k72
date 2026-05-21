import React, { useRef } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const FullPage = ({ setShowFullPage }) => {
   

     useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline()

            tl.from('.stair1', {
                scaleY: 0,
                transformOrigin: 'top',
                stagger: {
                    amount: -0.25
                }
            })

            tl.from('.link',{
                rotateX: -90,
                delay: 0.3,
                transformOrigin: 'top',
                stagger: {
                    amount: 0.5
                }
            })
            tl.from('.nav',{
                opacity: 0,
            })
        })

        return () => ctx.revert()
    })

  return (
    <div className='bg-black-2 h-screen w-full absolute'>
         <div>
            <div className='fixed top-0 left-0 h-screen w-full'>
                <div className='flex h-full w-full'>
                    <div className='stair1 h-full w-1/5 bg-black'></div>
                    <div className='stair1 h-full w-1/5 bg-black'></div>
                    <div className='stair1 h-full w-1/5 bg-black'></div>
                    <div className='stair1 h-full w-1/5 bg-black'></div>
                    <div className='stair1 h-full w-1/5 bg-black'></div>
                </div>
         </div>
         <div className="flex p-4 items-start w-full justify-between  z-10 fixed top-0 left-0">
            <div className="nav  lg:w-[20vh] md:w-[13vh] w-[11vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg  "
          className="w-full"
          viewBox="0 0 103 44"
        >
          <path fill="white"
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
            </div>
            <div onClick={()=>setShowFullPage(false)} className='nav  relative lg:w-20 md:w-20 w-16 lg:h-[110px] md:h-[110px] h-[90px] cursor-pointer '> 
                <div className='h-full lg:w-1 md:w-1 w-0.5 absolute origin-top -rotate-45 top-0 bg-white'></div>
                <div className='h-full lg:w-1 md:w-1 w-0.5 absolute origin-top rotate-45 right-0 bg-white'></div>
            </div>
         </div>
         <div className='lg:mt-[25vh] md:mt-[32.5vh] mt-[320px]'>
                <Link to="/projects" onClick={() => setShowFullPage(false)} >
                    <div className='overflow-hidden relative link font-medium text-center border-t-2 origin-top'>
                        <h1 className='text-white lg:text-8xl md:text-6xl text-4xl   uppercase'>projects</h1>
                    <div className='moveLink flex absolute text-black top-0 bg-[#D3FD50]'>
                        <div className='moveX flex items-center'>
                               <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:4xl text-3xl   text-center lg:pt-4   p-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-24 md:h-14 h-10 rounded-full shrink-0 lg:w-60 w-32 lg:pb-3 md:pb-1 pb-2  object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:4xl  text-3xl  text-center  lg:pt-4 p-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-24 md:h-14 h-10 rounded-full shrink-0 lg:w-60 w-32 lg:pb-3 md:pb-1 pb-2 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                        </div>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:4xl text-3xl  text-center lg:leading-[0.8] lg:pt-4 p-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-24 md:h-14 h-10 rounded-full shrink-0 lg:w-60 w-32 lg:pb-3 md:pb-1 pb-2 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:4xl text-3xl  text-center lg:leading-[0.8] lg:pt-4 p-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-24 md:h-14 h-10 rounded-full shrink-0 lg:w-60 w-32 lg:pb-3 md:pb-1 pb-2 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </Link>
                <Link to="/agence" onClick={() => setShowFullPage(false)}>
                    <div className='overflow-hidden relative link font-medium text-center border-t-2 origin-top'>
                    <h1 className='text-white  lg:text-8xl md:text-6xl text-4xl uppercase'>agence</h1>
                    <div className='moveLink flex absolute text-black top-0 bg-[#D3FD50]'>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Pour Tout Savoir</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" alt=""/>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Pour Tout Savoir</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"/>
                        </div>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Pour Tout Savoir</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" alt=""/>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Pour Tout Savoir</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"/>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to="/contact" onClick={() => setShowFullPage(false)}> 
                <div className='overflow-hidden relative link font-medium text-center border-t-2 origin-top'>
                    <h1 className='text-white  lg:text-8xl md:text-6xl text-4xl uppercase'>contact</h1>
                    <div className='moveLink flex absolute text-black top-0 bg-[#D3FD50]'>
                        <div className='moveX flex items-center'>
                           <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'> Pour envoyer un fax</h2>
                           <img className='lg:h-24 h-14 shrink-0 lg:w-40 w-32 p-1 object-fill'  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='black' d='M50 90 L15 55 V25 L35 5 L50 20 L65 5 L85 25 V55 Z'/%3E%3C/svg%3E"/>
                           <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'> Pour envoyer un fax</h2>
                           <img className='lg:h-24 h-14 shrink-0 lg:w-40 w-32 p-1 object-fill'  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='black' d='M50 90 L15 55 V25 L35 5 L50 20 L65 5 L85 25 V55 Z'/%3E%3C/svg%3E"/>
                        </div>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'> Pour envoyer un fax</h2>
                           <img className='lg:h-24 h-14  shrink-0 lg:w-40 w-32 p-1 object-fill'  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='black' d='M50 90 L15 55 V25 L35 5 L50 20 L65 5 L85 25 V55 Z'/%3E%3C/svg%3E"/>
                           <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'> Pour envoyer un fax</h2>
                           <img className='lg:h-24 h-14  shrink-0 lg:w-40 w-32 p-1 object-fill'  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='black' d='M50 90 L15 55 V25 L35 5 L50 20 L65 5 L85 25 V55 Z'/%3E%3C/svg%3E"/>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to="/blogue" onClick={() => setShowFullPage(false)}>
                    <div className='overflow-hidden relative link font-medium text-center border-t-2 border-b-2 origin-top'>
                    <h1  className='text-white  lg:text-8xl md:text-6xl text-4xl uppercase'>blogue</h1>
                    <div className='moveLink flex absolute text-black top-0 bg-[#D3FD50]'>
                        <div className='moveX flex items-center' >
                            <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Lire les articles</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"/>
                             <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Lire les articles</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a"/>
                        </div>
                        <div className='moveX flex items-center'>
                             <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Lire les articles</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"/>
                             <h2 className='whitespace-nowrap font-medium lg:text-[7vw] md:5xl text-3xl  text-center lg:pt-4 p-2 uppercase'>Lire les articles</h2>
                            <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-60 w-32 p-1 object-left-top' src="https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a"/>
                        </div>
                    </div>
                </div>
                </Link>
         </div>
         </div>
    </div>
  )
}

export default FullPage