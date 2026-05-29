import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-black text-white xl:p-10 p-5 mt-60">
      <div className="flex justify-between">
        <div className="flex xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 gap-2">
            <p className="border-2 border-white xl:p-2 lg:p-2 sm:p-2 p-1 font-medium rounded-3xl hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase xl:text-6xl lg:text-5xl md:text-4xl sm:text3xl text-1xl">fb</p>
            <p className="border-2 border-white xl:p-2 lg:p-2 sm:p-2 p-1 font-medium rounded-3xl hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase xl:text-6xl lg:text-5xl md:text-4xl sm:text3xl text-1xl">ig</p>
            <p className="border-2 border-white xl:p-2 lg:p-2 sm:p-2 p-1 font-medium rounded-3xl hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase xl:text-6xl lg:text-5xl md:text-4xl sm:text3xl text-1xl">in</p>
            <p className="border-2 border-white xl:p-2 lg:p-2 sm:p-2 p-1 font-medium rounded-3xl hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase xl:text-6xl lg:text-5xl md:text-4xl sm:text3xl text-1xl">be</p>
        </div>
        <div>
            <p className="border-2 border-white xl:p-2 p-1  font-medium rounded-3xl uppercase hover:text-[#D3FD50] hover:border-[#D3FD50] xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-1xl">contact</p>
        </div>
      </div>
      <div className='w-full flex flex-col xl:flex-row items-center justify-center xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-2 mt-60'>
        <p className='uppercase text-1xl mt-2 xl:mt-0 hover:text-[#D3FD50]'>Politique de confidentialité</p>
        <p className='uppercase text-1xl mt-2 xl:mt-0 hover:text-[#D3FD50]'>Avis de confidentialité</p>
        <p className='uppercase text-1xl mt-2 xl:mt-0 hover:text-[#D3FD50]'>Rapport éthique</p>
        <p className='uppercase text-1xl mt-2 xl:mt-0 hover:text-[#D3FD50]'>options de consentement</p>
      </div>
    </div>
  )
}

export default Footer