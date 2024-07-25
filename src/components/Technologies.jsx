import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiBlender } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});

const Technologies = () => {
  return( 
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
       whileInView={{opacity:1,x:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap justify-center items-center gap-4">
      <button><motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-3xl border-4 border-neutral-800 p-4"> 
          <BiLogoMongodb className="text-7xl text-green-600"/>
        </motion.div></button>
        <button><motion.div
      variants={iconVariants(3.5)}
      initial="initial"
      animate="animate"
       className="rounded-3xl border-4 border-neutral-800 p-4"> 
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div></button>
        <button><motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate" className="rounded-3xl border-4 border-neutral-800 p-4"> 
          <TbBrandNextjs  className="text-7xl text-slate-100"/>
        </motion.div></button>
        <button><motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate" className="rounded-3xl border-4 border-neutral-800 p-4"> 
        <FaNodeJs className="text-7xl text-green-700"/>
        </motion.div></button>
        <button>< motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"className="rounded-3xl border-4 border-neutral-800 p-4"> 
        <SiBlender className="text-7xl text-orange-500"/>
        </motion.div></button>
        <button>< motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" className="rounded-3xl border-4 border-neutral-800 p-4"> 
          <SiUnity className="text-7xl text-black-400"/>
        </motion.div></button>
        <button><motion.div 
         variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-3xl border-4 border-neutral-800 p-4"> 
        <SiAdobeillustrator className="text-7xl text-orange-400"/>
        </motion.div></button>
        <button><motion.div  
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" className="rounded-3xl border-4 border-neutral-800 p-4"> 
        <SiMysql className="text-7xl text-black-400"/>
        </motion.div></button>
      </motion.div>
    </div>
  )
}

export default Technologies;
