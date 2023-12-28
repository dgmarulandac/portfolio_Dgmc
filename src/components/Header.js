import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='bg-gradient-to-r from-gray-600  ' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'><img className='w-[200px] mt-4 mb-4' src={Logo} alt='Logo'/></a>
        <button className='btn btn-sm'>Work Whit me</button>
      </div>
      

    </div>
  </header>;
};

export default Header;
