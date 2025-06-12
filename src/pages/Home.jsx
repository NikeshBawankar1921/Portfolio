import { useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaJs} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'Database', icon: FaDatabase, level: 80 },
  { name: 'JavaScript', icon: FaJs, level: 85 },
  
];

const MotionDiv = motion.div;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto hide-scrollbar">
        
     
      <div className="text-center mb-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex   bg-gradient-to-r via-gray-400 opacity-70  '><img className="justify-center  rounded-lg  w-50  rotate-y-180 pt-3 ml-2 saturate-0" src="https://i.ibb.co/GQw08r1s/1749654036541.png" />
          <div className="  bg-clip-text w-full relative"> <h1 className='text-2xl md:text-5xl font-bold text-cyan-300 mt-25'>Nikesh Bawankar</h1>
          <div className='justify-center align-middle text-white md:text-2xl'>Full Stack and Embedded Software Developer</div></div>
          </div>

      <br/>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-4">
            Full Stack Developer
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            Building modern web applications with cutting-edge technologies
          </p>
        </MotionDiv>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {skills.map((skill, index) => (
          <MotionDiv
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4"
          >
            <div className="text-cyan-400">
              <skill.icon size={28} />
            </div>
            <div className="flex-1">
              <span className="block font-semibold">{skill.name}</span>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div
                  className="bg-cyan-400 h-2 rounded-full "
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

      {/* Projects Section */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Project One</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              A modern web application with React, Node.js and MongoDB.
            </p>
            <span className="text-blue-500 cursor-pointer hover:underline">
              View Details →
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Project Two</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              A real-time chat application built with WebSocket and Express.
            </p>
            <span className="text-blue-500 cursor-pointer hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </MotionDiv>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <p className="text-lg font-medium mb-4 text-white">Interested in working together?</p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition">
         <Link to="contact">Contact Me</Link> 
        </button>
      </div>
    </div>
  );
};

export default Home;
