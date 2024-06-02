import { PROJECTS } from "../constants"
import { animate, motion } from 'framer-motion'


const Projects = () => {
  return (
    <section 
    id='Projects' className="border-b border-neutral-900 pb-4">
        <motion.h1      
        whileInView={{orpacity:1, y:0}}
        initial={{orpacity:0, y:-100}}
        transition={{ duration :1}}
        className='my-20 text-center bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
            Projects
        </motion.h1>
        <div>
            {PROJECTS.map((project, index)=>
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                <motion.div 
                     whileInView={{orpacity:1, x:0}}
                     initial={{orpacity:0, x:-100}}
                     transition={{ duration :1}}
                     className="w-full lg:w-1/4">
                    <img 
                    src={project.image}
                    width={300}
                    height={380}
                    alt={project.title}
                    className="mb-6 rounded" />
                </motion.div>
                <motion.div 
                     whileInView={{orpacity:1, x:0}}
                     initial={{orpacity:0, x:100}}
                     transition={{ duration :1}}
                     className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>

                    {project.technologies.map((tech, index)=>(
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm
                         font-medium  text-pink-300">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
            )}
        </div>
      
    </section>
  )
}

export default Projects
