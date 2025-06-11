import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion.div;

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/NikeshBawankar1921' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/nikesh-bawankar-a3a4bb230/' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:nikeshbawankar1921@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '2.5rem', color: '#00f3ff' }}>Get in Touch</h1>
          <p style={{ fontSize: '1.25rem', color: '#ccc' }}>
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </MotionBox>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', width: '100%' }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ padding: '32px', background: '#2d3748', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={8}
                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical' }}
                  ></textarea>
                  <button
                    type="submit"
                    style={{ padding: '12px', backgroundColor: '#3182ce', color: '#fff', borderRadius: '6px', border: 'none' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ padding: '32px', background: '#2d3748', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>Connect with Me</h2>
                <p style={{ color: '#ccc' }}>
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your vision.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {socialLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => window.open(link.url, '_blank')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        border: '1px solid #3182ce',
                        borderRadius: '6px',
                        background: 'transparent',
                        color: '#3182ce',
                        cursor: 'pointer'
                      }}
                    >
                      <link.icon /> {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </MotionBox>
        </div>
      </div>
    </div>
  );
};

export default Contact;
