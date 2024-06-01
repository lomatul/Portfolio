import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { SiOracle } from "react-icons/si"
import { animate, motion } from 'framer-motion'


const iconVariants = (duration) => ({
  initial : {y :-10},
  animate : {
    y:[10, -10],
    transition : {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{orpacity:1, y:0}}
        initial={{orpacity:0, y:-100}}
        transition={{ duration :1.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h1>
        <motion.div 
            whileInView={{orpacity:1, x:0}}
            initial={{orpacity:0, x:-100}}
            transition={{ duration :1.5}}
            className="flex flex-wrap items-center justify-center gap-4">

            <motion.div
             variants={iconVariants(2.5)}
             initial="initital"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className=" text-7xl text-cyan-400 "/>
            </motion.div>

             <motion.div
             variants={iconVariants(3)}
             initial="initital"
             animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className=" text-7xl text-cyan-400 "/>
              </motion.div>

              <motion.div
              variants={iconVariants(5)}
              initial="initital"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className=" text-7xl text-cyan-400 "/>
              </motion.div>

              <motion.div
              variants={iconVariants(2)}
              initial="initital"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <TbBrandNextjs className=" text-7xl text-cyan-400 "/>
              </motion.div>

              <motion.div
              variants={iconVariants(6)}
              initial="initital"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiHtml5 className=" text-7xl text-cyan-400 "/>
              </motion.div>

              <motion.div
              variants={iconVariants(2.5)}
              initial="initital"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiCss3 className=" text-7xl text-cyan-400 "/>
              </motion.div>

              <motion.div
              variants={iconVariants(4)}
              initial="initital"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiOracle className=" text-7xl text-cyan-400 "/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
