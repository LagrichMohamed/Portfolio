import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiCsharp, SiMongodb } from "react-icons/si"
import { DiJavascript, DiMysql } from "react-icons/di"
import { DiPhp } from "react-icons/di"
import { FaNodeJs, FaPython } from "react-icons/fa"
import { FaLaravel } from "react-icons/fa"
import { motion } from 'framer-motion';
import { BsUnity } from "react-icons/bs";
import project4 from "../assets/python.svg";
import { PiAlignRightFill, PiEmpty } from "react-icons/pi"

const iconVariants = (duration) => ({
   initial : {y: -10},
   animate : {
      y: [10, -10],
   transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse",
   }
},
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity : 1, y : 0 }}
      initial={{ opacity : 0, y : -100 }}
      transition={{ duration : 0.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{ opacity : 1, x : 0 }}
      initial={{ opacity : 0, x : -100 }}
      transition={{ duration : 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(0.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
         
           <SiCsharp className="text-7xl text-purple-500 " />
        </motion.div>
        <motion.div
        variants={iconVariants(3.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <BsUnity className="text-7xl text-white " />
        </motion.div>
        <motion.div
  variants={iconVariants(1.1)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4"
>
  <img src={project4} alt="Python" style={{ width: "70px", height: "70px" }} />
  {/* <FaPython className="text-7xl text-white" /> */}
 
</motion.div>

        <motion.div
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <DiJavascript className="text-7xl text-yellow-400 " />
        </motion.div>
        <motion.div
        variants={iconVariants(1.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <DiPhp className="text-7xl text-white-400 " />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaLaravel className="text-7xl text-red-500 " />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <DiMysql className="text-7xl text-sky-700 " />
        </motion.div>
        
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <SiMongodb className="text-7xl text-green-500 " />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.0)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           < FaNodeJs className="text-7xl text-green-400 " />
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Technologies