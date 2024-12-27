import React, { useState } from 'react';
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center relative' 
               key={index} 
               onMouseEnter={() => setHoveredIndex(index)} 
               onMouseLeave={() => setHoveredIndex(null)}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4 relative flex justify-center items-center'>
              <img width={250} height={190} src={project.image} alt={project.title} className='rounded' />
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center  rounded transition-all duration-300">
                  <div className="flex gap-4">
                    <a href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="p-6 bg-red-600 rounded-full hover:bg-red-800 transition-colors text-lg">
                      <FaGithub className="text-white text-xl" />
                    </a>
                    <a href={project.demo || '#'} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="p-6 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors text-lg">
                      <FaEye className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>  
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects