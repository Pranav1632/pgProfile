import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center p-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon73-1323550.jpg&fm=jpg')",
        }}
      >
        <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-lg mb-8">
          My Profile
        </h1>

        {/* Personal Info Section */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto p-6 mb-8">
          <h2 className="text-4xl font-semibold text-center mb-6">Personal Info</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg text-gray-700">Full Name:</p>
              <p className="text-gray-800 ml-2">Pranav Sachin Gaikwad</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">Phone Number:</p>
              <p className="text-gray-800 ml-2">7499167820</p>
            </div>
            <div>
             <p className="font-bold text-lg text-gray-700">Email:</p>
<p className="ml-2 text-blue-600 underline">
  <a href="mailto:pranavgaikwad1632@gmail.com">pranavgaikwad1632@gmail.com</a>
</p>

<p className="font-bold text-lg text-gray-700">LinkedIn / GitHub </p>
<ul className="list-disc ml-6 text-blue-600 underline space-y-1">
  <li>
    <a href="https://www.linkedin.com/in/pranav-gaikwad-7a632b288/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </li>
  <li>
    <a href="https://github.com/pgcode32" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </li>
 
</ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">Location:</p>
              <p className="text-gray-800 ml-2">Pune-Satara, India</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto p-6">
          <h2 className="text-4xl font-semibold text-center mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg text-gray-700">Degree:</p>
              <p className="text-gray-800 ml-2">Bachelor of Engineering in Computer Science</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">College:</p>
              <p className="text-gray-800 ml-2">AISSMS IOIT, Pune</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">Year:</p>
              <p className="text-gray-800 ml-2">2024–2028</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">Technical Details:</p>
              <p className="text-gray-800 ml-2">
                Second-year Information Technology student at AISSMS IOIT with strong foundations in Java, C++, and React.js. Passionate about building scalable web applications and mastering data structures. Seeking internship opportunities to apply and grow technical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App