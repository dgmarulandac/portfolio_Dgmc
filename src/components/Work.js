import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';


const Work = () => {
  return (

  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-8'>
          {/* text */}
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}>
            <h2 className='h2 leading-tight text-accent'>
              My Latest<br/>
              Work.
            </h2>
            <p className='max-w-sm mb-16'>
            I've developed three projects, of which 2 are full stack development, one of them uses an API and the other has a payment gateway configured, Auth with Google, libraries for sending emails
            </p>
            
            <button className='btn btn-sm'>
              <a href='https://github.com/dgmarulandac'>View all projects</a>
            </button>
          </motion.div>
          {/* imagen */}
          <a href='https://pf-ptb-grupo-06.vercel.app/'>
          <motion.div
          variants={fadeIn('right', 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
           className='group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-xl shadow-cyan-500/50'>
            <div className='group-hover:bg-sky-300/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img  className="group-hover:scale-125 transition-all duration-500"src={img1} alt="img1"/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 font-bold text-xl'>
              <span>Marketplace</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 font-bold text-3xl'>
              <span>BOHO Buy and sell tikets</span>
            </div>
           
          </motion.div>
          </a>
        </div>
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10 lg:gap-y-20'>
           {/* imagen */}
           <a href='https://pi-countries-main-nu.vercel.app/home'>
           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-xl shadow-cyan-500/50'>
            <div className='group-hover:bg-sky-300/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img className="group-hover:scale-125 transition-all duration-500"src={img2} alt="img1"/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 font-bold text-xl'>
              <span>API'S Aplication</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 font-bold text-3xl'>
              <span>COUNTRIES APP</span>
            </div>
          </div>
           </a>

           {/* imagen */}
            <a href='https://portfolio-dgmc.vercel.app/'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-xl shadow-cyan-500/50'>
            <div className='group-hover:bg-sky-300/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img  className="group-hover:scale-125 transition-all duration-500"src={img3} alt="img1"/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 font-bold text-xl'>
              <span>PORTFOLO TAILWIND DESIGN</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 font-bold text-3xl'>
              <span>PORTFOLIO DANIEL MARULANDA CRUZ</span>
            </div>
          </div>
            
            </a>
        
        </motion.div>
      </div>
    </div>
  </section>

  )
};

export default Work;
