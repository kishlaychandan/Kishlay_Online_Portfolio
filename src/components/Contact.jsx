import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
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

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name: mailMessage.fullName, email: mailMessage.fromMail, message: mailMessage.message }, 
        process.env.REACT_APP_EMAILJS_USER_ID
      ).then(
        () => {
          setSubmitted(true);
          setLoading(false);
          setMailMessage({ fullName: '', fromMail: '', message: '' });
        },
        () => {
          alert('Try once again');
          setLoading(false);
        }
      );
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative" id="Contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact</h2>
        </div>
        <form onSubmit={sendEmail}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={mailMessage.fullName}
                    onChange={(e) => setMailMessage({ ...mailMessage, fullName: e.target.value })}
                  />
                  {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={mailMessage.fromMail}
                    onChange={(e) => setMailMessage({ ...mailMessage, fromMail: e.target.value })}
                  />
                  {errors.fromMail && <span className="text-red-500">{errors.fromMail}</span>}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={mailMessage.message}
                    onChange={(e) => setMailMessage({ ...mailMessage, message: e.target.value })}
                  ></textarea>
                  {errors.message && <span className="text-red-500">{errors.message}</span>}
                </div>
              </div>

              <div className="p-2 w-full">
                {submitted && <p className="text-green-500">Message sent successfully!</p>}
                {loading && <p className="text-yellow-500">Sending...</p>}
                <button className="flex mx-auto text-white border-[2.5px] border-indigo-600 bg-indigo-600 hover:bg-white hover:font-bold hover:text-indigo-600 py-2 px-8 focus:outline-none rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
