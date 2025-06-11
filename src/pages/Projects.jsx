import { useState } from 'react';
import { FaStar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.div;

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
    rating: 4.5,
    comments: [],
  },
  // Add more projects here...
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState({ name: '', text: '', rating: 5 });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCommentSubmit = () => {
    if (selectedProject && newComment.name && newComment.text) {
      const comment = {
        id: Date.now(),
        ...newComment,
      };
      selectedProject.comments.push(comment);
      setNewComment({ name: '', text: '', rating: 5 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Header */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my favorite projects showcasing my skills in full-stack development, UI/UX, and more.
        </p>
      </MotionBox>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <MotionBox
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0, 243, 255, 0.3)' }}
            className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    aria-label="GitHub Repository"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                    aria-label="Live Project Link"
                    className="hover:text-purple-500 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </button>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                  <FaStar />
                  <span>{project.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </MotionBox>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-start pt-16 px-4 overflow-auto">
          <div className="bg-gray-900 text-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(0,243,255,0.4)]">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-400 focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {selectedProject.title}
            </h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-md mb-6"
            />
            <p className="mb-6">{selectedProject.description}</p>

            {/* Comments Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Comments</h3>
              {selectedProject.comments.length === 0 && (
                <p className="text-gray-400 mb-6">No comments yet.</p>
              )}
              {selectedProject.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-800 p-4 rounded-md mb-4 shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">{comment.name}</span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <span>{comment.rating}</span>
                    </div>
                  </div>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Add Comment</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Your Comment"
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows={5}
              />
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setNewComment({ ...newComment, rating })}
                    className={`text-3xl focus:outline-none transition-colors ${
                      rating <= newComment.rating ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                    aria-label={`Rate ${rating} star${rating > 1 ? 's' : ''}`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
              <button
                onClick={handleCommentSubmit}
                className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-6 py-3 rounded font-semibold w-full"
              >
                Submit Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
