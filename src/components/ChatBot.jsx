import { useState, useRef } from 'react';
import { motion } from 'framer-motion'
import { FaFacebookMessenger, FaPlane } from 'react-icons/fa';


function ChatBot() {
  const [tioggel, setToggel] = useState(false);
  const [loading,setLoading]=useState(false)
  const [chattext, setChat] = useState([
    { message: '', response: 'Hi, You can ask Info about Me' },
  ]);
  const AdminData= `
    Admin Name: Nikesh bawankar,
    Education:  "Btech: Yeshwantrao Chavan College of Engineering, Nagpur, Branch: Electronics, Year: 2021-2024 completed" ,
                "Diploma: Government Polytechnic,Nagpur, Branch: Electronics & teleCom, Year: 2018-2021" ,
                 "HSC: St. John Highschool, Pulgaon, Branch: Science, Year: 2016-2018" ,
    Location: "Wardha",
    Skills: 
        Frontend: React.js, JavaScript, Tailwind CSS,
        backend: Node.js, Express, Mongooes, REST APIs,
        Database: MongoDB, Firebase,
        Tools: Git/GitHub, ThunderClient,
    ,
    About: I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong
            foundation in both frontend and backend technologies, I create seamless user experiences and robust
            server-side solutions.,
    Certificate:  "Course: Internshala Fullstack Development Course (MERN Stack), Duration: Six-Month" ,
    Portfolio_Details:"This PortFolio is developed by Nikesh Bawankar using React.js."`

  const [inText, setInText] = useState('');
  const APIKey = import.meta.env.VITE_CHATBOT_API;
  const bottomRef = useRef(null);

  async function sendMessage() {

    
    if (!inText.trim()) {
      alert('Please enter a message.');
      return;
    }

    setLoading(true)
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${APIKey}`,
          'HTTP-Referer': 'https://www.sitename.com',
          'X-Title': 'SiteName',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free',
          messages: [{ role: 'user', content: `based on the given data give respones to the asked Question if question is not related to Admin resopnse "Asked about Nikesh", "if someone ask about contact details tell them to click on the contact tab present on the header",data: ${AdminData},Question:,${inText}` }],
        }),
      });

      const data = await response.json();
      const markdownText =
        data.choices?.[0]?.message?.content || 'No response received.';

      setChat(prev => [...prev, { message: inText, response: markdownText }]);
      setInText('');

      // Scroll to bottom after new message is rendered
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.log(error);
    }

    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <motion.div
      drag
      whileDrag={{
        scale: 0.8,

      }}
      dragConstraints={{
        left:0,
        right:0,
        top:0,
        bottom:0
      }}
      className='fixed bottom-12 right-10  rounded-2xl'>
      {tioggel ? (
        <div className='relative  transform rounded-2xl w-80 h-96 bg-gray-900 border border-amber-50 z-50'>
          <div
            className='absolute right-0 top-0 text-xl font-bold w-10 h-10 text-white flex items-center justify-center cursor-pointer'
            onClick={() => setToggel(false)}
          >
            X
          </div>

          <div className='overflow-y-auto h-4/5 p-2 hide-scrollbar'>
            {chattext.map((chat, index) => (
              <div key={index}>
                {chat.message && (
                  <div className='w-4/5 rounded-2xl ml-16 mt-4 border bg-gray-800 text-cyan-300 p-2'>
                    {chat.message}
                  </div>
                )}
                <div className='w-4/5 rounded-2xl ml-3 mt-2 border bg-gray-800 text-cyan-300 p-2'>
                  {chat.response}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className='absolute bottom-0 w-full flex p-2 bg-gray-900 rounded-2xl'>
            <input
              type='text'
              value={loading ? 'Thinking... ': inText}
              onChange={(e) => setInText(e.target.value)}
              onKeyDown={handleKeyDown}
              className='flex-grow p-2 rounded-2xl bg-gray-800 text-white outline-none'
              placeholder='Type your message...'
            />
            <FaPlane
              className='rotate-235 size-6 text-white ml-2 mt-2 cursor-pointer'
              onClick={sendMessage}
            />
          </div>
        </div>
      ) : (
        <div
          className='text-amber-300 cursor-pointer'
          onClick={() => setToggel(true)}
        >
          <FaFacebookMessenger className='size-20' />
        </div>
      )}
    </motion.div>
  );
}

export default ChatBot;
