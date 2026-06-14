import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { isDark } = useTheme();
  const [mailMessage, setMailMessage] = useState({
    fullName: '',
    fromMail: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); 
  const [submitted, setSubmitted] = useState(false); 
  const [errors, setErrors] = useState({}); 

  const validateForm = () => {
    const newErrors = {};
    if (!mailMessage.fullName) newErrors.fullName = 'Name is required.';
    if (!mailMessage.fromMail) newErrors.fromMail = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(mailMessage.fromMail)) newErrors.fromMail = 'Email address is invalid.';
    if (!mailMessage.message) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setSubmitted(false);
      try {
        await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name: mailMessage.fullName, email: mailMessage.fromMail, message: mailMessage.message }, 
        process.env.REACT_APP_EMAILJS_USER_ID
        );
          setSubmitted(true);
          setMailMessage({ fullName: '', fromMail: '', message: '' });
        setErrors({});
      } catch (error) {
        setErrors({ submit: 'Failed to send message. Please try again later.' });
      } finally {
          setLoading(false);
        }
    }
  };

  return (
    <section
      className={`${
        isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
      } body-font transition-colors duration-300 py-24`}
      id="Contact"
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Contact info & socials */}
          <div className="space-y-6 md:col-span-1">
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Details
              </h3>
              <div className="text-sm space-y-1">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-500" />
                  <span>kishlaychandan01@gmail.com</span>
                </p>
                <p>Mumbai / Bengaluru, India</p>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Social
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KishlayChandan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kishlay-chandan-a9055a214/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={sendEmail} className="md:col-span-2">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className={`leading-7 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-base outline-none py-3 px-4 leading-8 transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 focus:bg-gray-800 text-gray-100' : 'bg-white/80 backdrop-blur-sm border-gray-300 focus:bg-white text-gray-900'}`}
                    value={mailMessage.fullName}
                    onChange={(e) => setMailMessage({ ...mailMessage, fullName: e.target.value })}
                  />
                  {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className={`leading-7 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-base outline-none py-3 px-4 leading-8 transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 focus:bg-gray-800 text-gray-100' : 'bg-white/80 backdrop-blur-sm border-gray-300 focus:bg-white text-gray-900'}`}
                    value={mailMessage.fromMail}
                    onChange={(e) => setMailMessage({ ...mailMessage, fromMail: e.target.value })}
                  />
                  {errors.fromMail && <span className="text-red-500">{errors.fromMail}</span>}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className={`leading-7 text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`w-full rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 h-32 text-base outline-none py-3 px-4 resize-none leading-6 transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 focus:bg-gray-800 text-gray-100' : 'bg-white/80 backdrop-blur-sm border-gray-300 focus:bg-white text-gray-900'}`}
                    value={mailMessage.message}
                    onChange={(e) => setMailMessage({ ...mailMessage, message: e.target.value })}
                  ></textarea>
                  {errors.message && <span className="text-red-500">{errors.message}</span>}
                </div>
              </div>

              <div className="p-2 w-full">
                {submitted && <p className="text-green-500 mb-2">Message sent successfully!</p>}
                {errors.submit && <p className="text-red-500 mb-2">{errors.submit}</p>}
                {loading && <p className="text-yellow-500 mb-2">Sending...</p>}
                <button 
                  type="submit"
                  disabled={loading}
                  className="group relative flex mx-auto text-white bg-indigo-600 rounded-lg py-3 px-8 font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 hover:bg-indigo-700"
                >
                  <span className="relative flex items-center">
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </form>
          </div>
      </div>
    </section>
  );
}
