import { BsFillBriefcaseFill } from "react-icons/bs";
import ResumePdf from "../images/KishlayChandan_Geekster1.pdf";
import { useTheme } from "../context/ThemeContext";

function Work() {
  const { isDark } = useTheme();
  const resume = [
    {
      company: "iCapo Tech Pvt Ltd (Living Things)",
      title: "Full Stack Developer / DevOps Engineer",
      city: "On-site, IIT Bombay, Mumbai",
      start: "Feb 2025",
      end: "Present",
    },
    {
      company: "Digisnare Technologies",
      title: "Intern",
      city: "On-site, Gulbarga, Karnataka",
      start: "Mar 2023",
      end: "Jul 2023",
    },
  ];

  return (
    <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} body-font transition-colors duration-300 py-24`} id="Work">
      <div className="container flex flex-wrap px-8 py-8 mx-auto items-center">
        <div className={`md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b transition-colors duration-300 ${isDark ? 'border-purple-500/30' : 'border-purple-200'}`}>
          <h2 className={`text-4xl font-bold tracking-tight sm:text-6xl py-8 text-center mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Education</span>
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
          <ol>
            <li className="border-l-2 border-indigo-600">
              <div className="md:flex flex-start">
                <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 object-cover">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="text-black w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className={`block p-6 rounded-lg shadow-lg max-w-md ml-6 mb-10 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="flex justify-between mb-4">
                    <span className="font-bold text-indigo-600 text-xl">
                      MCA
                    </span>
                    <span className="font-bold text-indigo-600 text-sm">
                      Nov 2021 - Aug 2023
                    </span>
                  </div>
                  <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Master of Computer Applications, <br />
                    Central University of Karnataka, Kalaburagi - 585367 - {" "}
                  </p>
                  <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Grade: 8.3 CGPA
                    {" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="border-l-2 border-indigo-600">
              <div className="md:flex flex-start">
                <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="text-black w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className={`block p-6 rounded-lg shadow-lg max-w-md ml-6 mb-10 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="flex justify-between mb-4">
                    <span className="font-bold text-indigo-600 text-xl">
                      BCA
                    </span>
                    <span className="font-medium text-indigo-600 text-sm">
                      Jan 2018 - Jun 2021
                    </span>
                  </div>
                  <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Bachelor in Computer Application, <br />
                    Aims Institute of Higher Education,Bengaluru 560058{" "}
                  </p>
                  <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Grade: 8.3 CGPA
                    {" "}
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 pb-16">
          <h2 className={`text-4xl font-bold tracking-tight sm:text-6xl py-8 text-center mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Employment</span> History
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
          <div className={`rounded-2xl border p-16 transition-colors duration-300 ${isDark ? 'border-zinc-700/40 bg-gray-800' : 'border-zinc-200 bg-white'}`}>
            <h2 className={`flex text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
              <BsFillBriefcaseFill className="h-6 w-6 flex-none" />
              <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {resume.map((role, roleIndex) => (
                <li key={roleIndex} className="flex gap-4 ">
                  <div className="overflow-hidden relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ">
                    <span className="text-sm font-semibold text-zinc-100">
                      {role.company
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className={`w-full flex-none text-xl font-medium transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      {role.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className={`text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {role.title}
                    </dd>

                    <dt className="sr-only">Date</dt>
                    <dd
                      className={`ml-auto text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
                      aria-label={`${role.start.label ?? role.start} until ${
                        role.end.label ?? role.end
                      }`}
                    >
                      <time dateTime={role.start.dateTime ?? role.start}>
                        {role.start.label ?? role.start}
                      </time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime={role.end.dateTime ?? role.end}>
                        {role.end.label ?? role.end}
                      </time>
                    </dd>
                    <br />
                    <dd className={`text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {role.city}
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            
            <div className="mt-6 space-y-4">
              <a 
                href={ResumePdf} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-300"
                aria-label="Download Resume"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Resume
        </a>
    </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
