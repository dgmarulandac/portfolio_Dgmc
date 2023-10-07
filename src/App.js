import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import WhatsAppButton from "./components/WhatsAppButton";


const App = () => {
  return (
    <div className='bg-site bg-repeat bg-contain overflow-hidden'>
      <WhatsAppButton />
      <Header />
      <Banner />          
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[100%]'></div>
    </div>
  );
};

export default App;
