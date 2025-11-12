import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en') // "en", "hi", "mr"

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center p-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon73-1323550.jpg&fm=jpg')",
        }}
      >
        {/* Translate Button */}
        <div className="flex justify-right mb-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
            onClick={() =>
              setLanguage(language === 'en' ? 'mr' : language === 'mr' ? 'hi' : 'en')
            }
          >
            Translate to {language === 'en' ? 'Marathi' : language === 'mr' ? 'Hindi' : 'English'}
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-lg mb-8">
          {language === 'en'
            ? 'My Profile'
            : language === 'hi'
            ? 'मेरा प्रोफ़ाइल'
            : 'माझं प्रोफाइल'}
        </h1>

        {/* Personal Info */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto p-6 mb-8">
          <h5 className='text-center font-thin font-extralight text-gray-400'>App is under Dev</h5>
          <h2 className="text-4xl font-semibold text-center mb-6">
            {language === 'en'
              ? 'Personal Info'
              : language === 'hi'
              ? 'व्यक्तिगत जानकारी'
              : 'वैयक्तिक माहिती'}
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en'
                  ? 'Full Name:'
                  : language === 'hi'
                  ? 'पूरा नाम:'
                  : 'पूर्ण नाव:'}
              </p>
              <p className="text-gray-800 ml-2">{language === 'en'
                  ? 'Pranav Sachin Gaikwad'
                  : language === 'hi'
                  ? 'प्राणव सचिन गायकवाड़'
                  : 'प्रणव सचिन गायकवाड'}</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en'
                  ? 'Phone Number:'
                  : language === 'hi'
                  ? 'फ़ोन नंबर:'
                  : 'फोन नंबर:'}
              </p>
              <p className="text-gray-800 ml-2">{language === 'en'
                  ? '7499167820'
                  : language === 'hi'
                  ? '७४९९१६७८२०'
                  : '७४९९१६७८२०'}</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en' ? 'Email:' : language === 'hi' ? 'ईमेल:' : 'ईमेल:'}
              </p>
              <p className="ml-2 text-blue-600 underline">
                <a href="mailto:pranavgaikwad1632@gmail.com">
                  pranavgaikwad1632@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en'
                  ? 'LinkedIn / GitHub / Social:'
                  : language === 'hi'
                  ? 'लिंक्डइन / गिटहब / सोशल:'
                  : 'लिंक्डइन / गिटहब / सोशल:'}
              </p>
              <ul className="list-disc ml-6 text-blue-600 underline space-y-1">
                <li>
                  <a
                    href="https://www.linkedin.com/in/pranav-gaikwad-7a632b288/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Pranav1632"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pranav_1632_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Social
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1KFz_qReVn0TLY4bS-pZl1G-ARGRnHzE2?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en' ? 'Location:' : language === 'hi' ? 'स्थान:' : 'ठिकाण:'}
              </p>
              <p className="text-gray-800 ml-2">Pune-Satara, India</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg max-w-4xl mx-auto p-6">
          <h2 className="text-4xl font-semibold text-center mb-6">
            {language === 'en'
              ? 'Education'
              : language === 'hi'
              ? 'शिक्षा'
              : 'शिक्षण'}
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en' ? 'Degree:' : language === 'hi' ? 'डिग्री:' : 'पदवी:'}
              </p>
              <p className="text-gray-800 ml-2">
                {language === 'en'
                  ? 'Bachelor of Engineering in Computer Science'
                  : language === 'hi'
                  ? 'कंप्यूटर साइंस में इंजीनियरिंग स्नातक'
                  : 'कॉम्प्युटर सायन्स मध्ये अभियांत्रिकी पदवी'}
              </p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en' ? 'College:' : language === 'hi' ? 'कॉलेज:' : 'महाविद्यालय:'}
              </p>
              <p className="text-gray-800 ml-2">AISSMS IOIT, Pune</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en' ? 'Year:' : language === 'hi' ? 'वर्ष:' : 'वर्ष:'}
              </p>
              <p className="text-gray-800 ml-2">2024–2028</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-700">
                {language === 'en'
                  ? 'Technical Details:'
                  : language === 'hi'
                  ? 'तकनीकी विवरण:'
                  : 'तांत्रिक माहिती:'}
              </p>
              <p className="text-gray-800 ml-2">
                {language === 'en'
                  ? 'Second-year CS student at AISSMS IOIT with strong foundations in Java, C++, and React.js. Passionate about building scalable web applications and mastering data structures. Seeking internship opportunities to apply and grow technical skills.'
                  : language === 'hi'
                  ? 'AISSMS IOIT में द्वितीय वर्ष का CS छात्र, Java, C++ और React.js में मजबूत नींव के साथ। स्केलेबल वेब एप्लिकेशन बनाने और डेटा संरचनाओं में महारत हासिल करने के लिए उत्साही। तकनीकी कौशल को लागू करने और बढ़ाने के लिए इंटर्नशिप के अवसरों की तलाश में।'
                  : 'AISSMS IOIT मध्ये दुसऱ्या वर्षाचा CS विद्यार्थी, Java, C++ आणि React.js मध्ये मजबूत पाया. स्केलेबल वेब अ‍ॅप्लिकेशन तयार करण्यात आणि डेटा स्ट्रक्चर्स समजून घेण्यात रस. इंटर्नशिपद्वारे कौशल्य वाढवण्याची संधी शोधत आहे.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App