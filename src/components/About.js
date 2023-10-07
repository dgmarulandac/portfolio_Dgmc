import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  })
  return(

   <section className='section' id='about' ref={ref}>
      <div className='container mx-auto items-center'>
        <div className='flex flex-col gap-y-1 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>

          </motion.div>

          <motion.div 
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}} 
                className='flex-1'>
                  <h2 className='h2 font-bold'>About me</h2>
                  <h3 className='h3 mb-4'>I am a programmer of full stack development</h3>
                  <p className='mb-3'>
                  I am certified in a Bootcamp in Argentina called Henry, where I managed to strengthen my knowledge in programming, I am currently studying systems engineering at the Unad University in Colombia.
                  </p>
                <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                    <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-1 '>
                              {
                                inView?
                                <CountUp start={0} end={4} duration={4}/>:
                                null}
                            </div>
                            <div className='font-primary text-sm tracking-[1px] '> 
                            Years of<br/>
                            knowledge
                            </div>
                        </div>

                        <div>
                          <div className='text-[40px] font-tertiary text-gradient mb-1 '>
                            {
                              inView?
                              <CountUp start={0} end={3} duration={4}/>:
                              null}
                              +
                          </div>
                            <div className='font-primary text-sm tracking-[1px] '> 
                            Projects<br/>
                            Completed
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-x-8 items-center '>

                      <button className='btn btn-sm'>Contact me</button>
                      <a href='#' className='text-gradient btn-link'>
                        My Portfolio
                      </a>

                </div>
            </motion.div>
        </div>
        
      </div>
   </section>
  )
    
};

export default About;
