import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const Contact = () => {
  return (

  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
          <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 traking-wide'>Get in touch</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12  '>
            Let's work <br/> together!
          </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start bg-cyan-700 mb-[700px] lg:mb-4 '
          action="https://formsubmit.co/danielmarulanda9@gmail.com" 
          method="POST">
          <input className="bg-transparent border-b py-3 outline-none w-full
           placeholder:text-white focus:border-accent transition-all mb-10" type="text" name='name' 
          placeholder='Your name' required/>

          <input  className="bg-transparent border-b py-3 outline-none w-full
           placeholder:text-white focus:border-accent transition-all mb-10" type="email" name='email'
          placeholder='Your email' required/>

          <textarea className='bg-transparent border-b py-3 outline-none w-full
           placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
           placeholder='Your message' name="comments">

           </textarea>

           <button type="submit" className='btn btn-lg  lg:mb-5 '>Send message</button>

        </motion.form>
      </div>
    </div>
  </section>

  )
};

export default Contact;
