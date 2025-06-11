import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaUser, FaEnvelope } from 'react-icons/fa';

const MotionDiv = motion.div;

const Navbar = () => {
  const location = useLocation();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'Projects', icon: FaCode, path: '/projects' },
    { name: 'About', icon: FaUser, path: '/about' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' },
  ];

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold text-cyan-400">
            Portfolio
          </Link>
        </MotionDiv>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navItems.map((item, index) => (
            <MotionDiv
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-cyan-600 text-white'
                    : 'hover:bg-cyan-700 hover:text-white text-gray-300'
                }`}
              >
                <item.icon className="text-lg" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
