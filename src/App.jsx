import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en') // "en", "hi", "mr"

  const translations = {
    en: {
      heading: 'My Profile',
      translateBtn: (lang) => `Translate to ${lang === 'en' ? 'Marathi' : lang === 'mr' ? 'Hindi' : 'English'}`,
      personalInfo: 'Personal Info',
      fullName: 'Full Name:',
      phoneNumber: 'Phone Number:',
      email: 'Email:',
      socialLinks: 'LinkedIn / GitHub / Social:',
      location: 'Location:',
      education: 'Education',
      degree: 'Degree:',
      college: 'College:',
      year: 'Year:',
      technicalDetails: 'Technical Details:',
      underDev: 'App is under Dev',
      name: 'Pranav Sachin Gaikwad',
      phone: '7499167820',
      locationText: 'Pune-Satara, India',
      degreeText: 'Bachelor of Engineering in Computer Science',
      collegeText: 'AISSMS IOIT, Pune',
      yearText: '2024–2028',
      bioText: 'Second-year CS student at AISSMS IOIT with strong foundations in Java, C++, and React.js. Passionate about building scalable web applications and mastering data structures.',
    },
    hi: {
      heading: 'मेरा प्रोफ़ाइल',
      translateBtn: (lang) => `अनुवाद करें ${lang === 'en' ? 'मराठी' : lang === 'mr' ? 'हिंदी' : 'अंग्रेजी'}`,
      personalInfo: 'व्यक्तिगत जानकारी',
      fullName: 'पूरा नाम:',
      phoneNumber: 'फ़ोन नंबर:',
      email: 'ईमेल:',
      socialLinks: 'लिंक्डइन / गिटहब / सोशल:',
      location: 'स्थान:',
      education: 'शिक्षा',
      degree: 'डिग्री:',
      college: 'कॉलेज:',
      year: 'वर्ष:',
      technicalDetails: 'तकनीकी विवरण:',
      underDev: 'ऐप विकास के अधीन है',
      name: 'प्राणव सचिन गायकवाड़',
      phone: '७४९९१६७८२०',
      locationText: 'पुणे-सतारा, भारत',
      degreeText: 'कंप्यूटर साइंस में इंजीनियरिंग स्नातक',
      collegeText: 'AISSMS IOIT, पुणे',
      yearText: '2024–2028',
      bioText: 'AISSMS IOIT में द्वितीय वर्ष का CS छात्र, Java, C++ और React.js में मजबूत नींव के साथ। स्केलेबल वेब एप्लिकेशन बनाने और डेटा संरचनाओं में महारत हासिल करने के प्रति उत्सुक।',
    },
    mr: {
      heading: 'माझं प्रोफाइल',
      translateBtn: (lang) => `अनुवाद करा ${lang === 'en' ? 'मराठी' : lang === 'mr' ? 'हिंदी' : 'इंग्रजी'}`,
      personalInfo: 'वैयक्तिक माहिती',
      fullName: 'पूर्ण नाव:',
      phoneNumber: 'फोन नंबर:',
      email: 'ईमेल:',
      socialLinks: 'लिंक्डइन / गिटहब / सोशल:',
      location: 'ठिकाण:',
      education: 'शिक्षण',
      degree: 'पदवी:',
      college: 'महाविद्यालय:',
      year: 'वर्ष:',
      technicalDetails: 'तांत्रिक माहिती:',
      underDev: 'अ‍ॅप विकास अधीन आहे',
      name: 'प्रणव सचिन गायकवाड',
      phone: '७४९९१६७८२०',
      locationText: 'पुणे-सतारा, भारत',
      degreeText: 'कॉम्प्युटर सायन्स मध्ये अभियांत्रिकी पदवी',
      collegeText: 'AISSMS IOIT, पुणे',
      yearText: '2024–2028',
      bioText: 'AISSMS IOIT मध्ये दुसऱ्या वर्षाचा CS विद्यार्थी, Java, C++ आणि React.js मध्ये मजबूत पाया आहे। स्केलेबल वेब अनुप्रयोग तयार करण्यास आणि डेटा संरचना आत्मसात करण्यास उत्सुक।',
    },
  }

  const t = translations[language]

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pranav-gaikwad-7a632b288/', icon: '💼', color: 'hover:text-blue-600' },
    { name: 'GitHub', url: 'https://github.com/Pranav1632', icon: '🐙', color: 'hover:text-gray-800' },
    { name: 'X (Twitter)', url: 'https://x.com/PranavSG32', icon: '𝕏', color: 'hover:text-black' },
    { name: 'Email', url: 'mailto:pranavgaikwad1632@gmail.com', icon: '✉️', color: 'hover:text-red-600' },
  ]

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon73-1323550.jpg&fm=jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header with Language Toggle */}
          <div className="flex justify-between items-center mb-12">
            <div className="text-white font-bold text-2xl flex items-center gap-2">
              💻
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                setLanguage(language === 'en' ? 'mr' : language === 'mr' ? 'hi' : 'en')
              }
            >
              {t.translateBtn(language)}
            </button>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-extrabold text-white drop-shadow-2xl mb-4 animate-fade-in">
              {t.heading}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Personal Info Card */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6 pb-6 border-b-2 border-gray-200">
                <h5 className="text-center font-light text-gray-500 text-sm mb-2">{t.underDev}</h5>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.personalInfo}
                </h2>
              </div>

              {/* Quick Contact Icons with Names */}
              <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {socialLinks.map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                      className={`flex flex-col items-center gap-1 ${link.color} transition-all duration-300 transform hover:scale-110 p-3 rounded-lg bg-gray-100 hover:bg-gray-200`}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-xs font-semibold text-gray-700">{link.name}</span>
                    </a>
                  )
                })}
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl font-bold text-blue-600">👤</div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-700">{t.fullName}</p>
                    <p className="text-gray-800 text-lg font-semibold">{t.name}</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl text-green-600">📱</div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-700">{t.phoneNumber}</p>
                    <p className="text-gray-800 text-lg font-semibold">{t.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl text-red-600">✉️</div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-700">{t.email}</p>
                    <a
                      href="mailto:pranavgaikwad1632@gmail.com"
                      className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2"
                    >
                      pranavgaikwad1632@gmail.com
                      →
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl text-red-500">📍</div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-700">{t.location}</p>
                    <p className="text-gray-800 text-lg font-semibold">{t.locationText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6 pb-6 border-b-2 border-gray-200">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
                  📚
                  {t.education}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Degree */}
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-purple-600">
                  <p className="font-bold text-lg text-gray-700">{t.degree}</p>
                  <p className="text-gray-800 text-lg font-semibold mt-2">{t.degreeText}</p>
                </div>

                {/* College */}
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-blue-600">
                  <p className="font-bold text-lg text-gray-700">{t.college}</p>
                  <p className="text-gray-800 text-lg font-semibold mt-2">{t.collegeText}</p>
                </div>

                {/* Year */}
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-green-600">
                  <p className="font-bold text-lg text-gray-700">{t.year}</p>
                  <p className="text-gray-800 text-lg font-semibold mt-2">{t.yearText}</p>
                </div>

                {/* Bio */}
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-orange-600 bg-gradient-to-r from-orange-50 to-transparent">
                  <p className="font-bold text-lg text-gray-700 mb-3">{t.technicalDetails}</p>
                  <p className="text-gray-800 text-lg leading-relaxed">{t.bioText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 text-white/80">
            <p className="text-sm">© 2024 Pranav Gaikwad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
