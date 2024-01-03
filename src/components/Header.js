import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='bg-gradient-to-r from-gray-600  ' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'><img className='w-[300px] mt-2 mb-2' src={Logo} alt='Logo'/></a>
        <Link to='contact'><button className='btn btn-sm'>Work Whit me</button></Link>
      </div>
      

    </div>
  </header>;
};

export default Header;
