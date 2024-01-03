import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import{FaHtml5, FaReact, FaGithub, FaYoutube, FaCss3Alt, FaGoogle, FaNodeJs} from 'react-icons/fa'
import {BiLogoTailwindCss, BiLogoPostgresql, BiLogoWordpress, BiLogoJavascript, BiLogoRedux} from 'react-icons/bi';
import {SiPhpmyadmin} from 'react-icons/si';
import {BsFiletypeSql} from 'react-icons/bs'
import { Link } from 'react-scroll';

const services = [
  {
    name: 'React Applications',
    description: 'implementations of react applications consuming APIs, databases managed with Postgrest, Backend with Express and node, front, with react and redux, implementation of marketplaces including payment gateways and others technolgies',
    
  },
  {
    name: 'Web Development',
    description: 'implementation of any web page in html and css styles, such as static page portfolios, whit integration of javascript scripts.',
    
  },
  {
    name: 'Wordpress Aplications',
    description: 'Wordpress applications, such as portfolios, business websites, ecommerce',
    
  }
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col  lg:flex-row'>
        {/* text & imagen */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-screen mb-12 lg:mb-0'>
          <h2 className='h2 text-cyan-400 font-bold mb-6' >What i Do</h2>
          <h3 className='h3 max-w-[455px] mb-16 '>
          I'm' a programmer with an emphasis on full stack web development
          </h3>
          <Link to='work'><button className='btn btn-sm'>See my Work</button></Link>
        </motion.div>
        {/* Services */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}  
        className='flex-1'>
          <div>
            {services.map((service, index) =>{
              const {name, description} = service;
              return(
                <div  className='border-b border-white/40 h-auto mb-[20px] flex 'key={index}>
                  <div className='mx-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-1'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  
                </div>
              )
            })}
          </div>
          <h1 className='h2 text-center text-gradient'>Technolgies</h1><br/>
        </motion.div>

        
          </div >
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, 
            amount:0.7}}
            className='grid grid-rows-3 grid-flow-col gap-8  text-[40px] gap-x-12  max-w-max mx-auto lg:mx-50 lg:my-0 lg:grid-rows-1' >
              
              <a href='#'>
                  <FaReact/>
                </a>
                <a href='#'>
                  <FaHtml5/>
                </a>
                <a href='#'>
                  <FaCss3Alt/>
                </a>
                <a href='#'>
                  <FaNodeJs/>
                </a>
                <a href='#'>
                  <BiLogoTailwindCss/>
                </a>
                <a href='#'>
                  <BiLogoPostgresql/>
                </a>
                <a href='#'>
                  <BiLogoWordpress/>
                </a>
                <a href='#'>
                  <BiLogoJavascript/>
                </a>
                <a href='#'>
                  <BiLogoRedux/>
                </a>
                <a href='#'>
                  <SiPhpmyadmin/>
                </a>
                <a href='#'>
                  <BsFiletypeSql/>
                </a>
                
              </motion.div>
    </div> 
  </section>
)};

export default Services;
