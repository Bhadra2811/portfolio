import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/photo1.jpg";
import { motion } from "framer-motion";
// import { constants } from "fs/promises";

const container =(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{delay:delay, duration:0.5}

  }
})
const Hero = () => {
  return (
  <div  id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2'>
    <div className='flex flex-col items center lg:itemss'>
      <motion.h1 
     variants={container(0)}
     initial="hidden"
     animate="visible"
      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
      >
      G Bhadra nair
      </motion.h1>
        <motion.span 
         variants={container(0.5)}
         initial="hidden"
         animate="visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
        bg-clip-text text-3xl tracking-tight text-transparent"
        >
        Full stack Developer
        </motion.span>
        <motion.p 
         variants={container(1.0)}
         initial="hidden"
         animate="visible"
         className="my-2 max-w-xl py-6 font-light tracking-tighter">
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-20">
  <div className="flex justify-center">
    <motion.img 
      initial={{x:100,opacity:0}} 
      animate={{x:0,opacity:1}}
      transition={{duration:1,delay:1}}
      className="rounded-5xl"
      src={profilePic}
      alt="G Bhadra nair"
      style={{ width: '400px', height: '400px', objectFit: 'cover' }}
    />
  </div>
</div>

  </div>
</div>
  );
};

export default Hero;
