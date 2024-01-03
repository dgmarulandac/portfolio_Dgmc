import React from 'react';
import Image from '../assets/imgavatar.png'
import{FaGithub, FaYoutube, FaDribbble, FaLinkedin} from 'react-icons/fa'
import {TypeAnimation } from 'react-type-animation';
import {AiOutlineIdcard} from 'react-icons/ai';
import{motion} from 'framer-motion';
import {fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center ' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-1 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[40px] font-bold leading-[0.8] lg-text-[110px] '>
            DANIEL <span>MARULANDA</span>
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
            <span className='mr-4'>I'm</span>
            <TypeAnimation sequence={[
              'A Full Stack Developer',
              2000,
              'Passionate',
              2000,
              'engaged',
              2000,
            ]}
            speed={50}
            className='text-white font-bold '
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}className='mb-8 max-w-lg mx-auto lg:mx-0'>
            I am a full stack developer from Henry bootcamp, I am currently also studying systems engineering at the Unad University in Colombia, I have very good foundations in programming which allows me to carry out any type of project that I have the opportunity to develop.            </motion.p>

            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact'><button className='btn btn-lg'>Contact me</button></Link>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>

            <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, 
            amount:0.7}}
            className='flex text-[40px] gap-x-12 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/dgmarulandac'>
                  <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/danielgustavomarulandacruz'>
                  <FaLinkedin/>
                </a>
                <a href='https://www.youtube.com/@elmarulo1'>
                  <FaYoutube/>
                </a>
                <a href='https://drive.google.com/file/d/1a8l5wWhniWYWR91wz7hDn1WFEe3A_-el/view?usp=sharing'>
                  <AiOutlineIdcard/>
                </a>
              </motion.div>
          </div>

        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} className='max-w-md mx-auto' alt='imgprofile' />
        </motion.div>


      </div>
    </div>
   
    </section>;
};

export default Banner;
