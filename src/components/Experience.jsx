import { EXPERIENCES } from "../constants"
import { animate, motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.section
    id="Experience" 
    whileInView={{orpacity:1, y:0}}
    initial={{orpacity:0, y:-100}}
    transition={{ duration :1.5}}
    className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Experience</h1>

        <div>{EXPERIENCES.map((experience ,index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                            whileInView={{orpacity:1, x:0}}
                            initial={{orpacity:0, x:-100}}
                            transition={{ duration :1}}
                            className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400"> {experience.year}</p>
                    <img src={experience.img} alt="Company logo" className="mb-4 bg-white p-3 rounded" />
                </motion.div>
                <motion.div 
                            whileInView={{orpacity:1, x:0}}
                            initial={{orpacity:0, x:100}}
                            transition={{ duration :1}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {experience.role} - {" "}
                        <span className="text-sm text-purple-100">{experience.company} </span> 
                    </h6>

                    {experience.description.map((description, index)=>(
                        <li key={index}>
                            {description}
                        </li>
                    ))}

                        
                        {experience.technologies.map((tech,index)=> (
                            <span key={index}
                            className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-300">
                                {tech}
                            </span>
                        ))}
                </motion.div>
            </div>
        ))}</div>
      
    </motion.section>
  )
}

export default Experience
