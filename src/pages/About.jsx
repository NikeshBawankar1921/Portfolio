import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const MotionBox = motion.div;

const skills = [
  {
    category: 'Frontend Development',
    icon: FaCode,
    items: ['React.js', 'JavaScript', 'Tailwind CSS', 'Chakra UI'],
  },
  {
    category: 'Backend Development',
    icon: FaServer,
    items: ['Node.js', 'Express', 'Mongooes','REST APIs'],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    items: ['MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Others',
    icon: FaTools,
    items: ['Git/GitHub', 'ThunderClient'],
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="flex flex-col items-center gap-12">

        {/* Header Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong
            foundation in both frontend and backend technologies, I create seamless user experiences and robust
            server-side solutions.
          </p>
        </MotionBox>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {skills.map((skill, index) => (
            <MotionBox
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 bg-gray-800 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="text-cyan-400 text-xl" />
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </MotionBox>
          ))}
        </div>

        {/* Approach Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-gray-300">
            I believe in writing clean, maintainable code and following best practices. I'm always eager to learn new
            technologies and stay up-to-date with the latest trends in web development. My goal is to create efficient,
            scalable, and user-friendly applications that solve real-world problems.
          </p>
        </MotionBox>
      </div>
    </div>
  );
};

export default About;
