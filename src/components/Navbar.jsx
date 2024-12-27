import React, { useState } from 'react';
import logo1 from "../assets/ML Logo.png"    
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { CONTACT } from '../constants'

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className=' mb-20 flex  items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-2 w-25" src={logo1} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            
            <a href="https://www.linkedin.com/in/mohamed-lagrich-04553a25b/"><FaLinkedin /></a>
            <a href="https://github.com/LagrichMohamed"> <FaGithub /></a>
            <div className=""><button onClick={scrollToContact} className="p-4 bg-black rounded-2xl hover:bg-red-600 transition-colors text-sm">Contact Me</button></div>
            <div className=""><button onClick={toggleModal} className="p-4 bg-black rounded-2xl hover:bg-purple-700 transition-colors text-sm">Download CV</button></div>
            {/* <FaSquareXTwitter />
            <FaInstagram /> */}
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-lg  font-bold mb-4">Download CV</h2>
            <div className="flex justify-around">
              <a href="https://drive.google.com/uc?export=download&id=1ZqculBiwy997-2kIu0AgFJCODWyWQS_b" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 m-5 text-white rounded">Download CV (French)</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 m-5 text-white rounded" >Download CV (English)</a>
            </div>
            <button onClick={toggleModal} className="mt-4 p-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar