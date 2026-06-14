import { useEffect, useState } from "react";
import {
  BsDownload,
  BsEyeFill,
  BsFillBriefcaseFill,
  BsXLg,
} from "react-icons/bs";
import ResumePdf from "../images/kishlaychandan_devops.pdf";
import DigisnareLogo from "../images/company-logos/digisnare-logo.png";
import GeeksterLogo from "../images/company-logos/geekster-logo.svg";
import LivingThingsLogo from "../images/company-logos/living-things-logo.jpg";
import { useTheme } from "../context/ThemeContext";

function Work() {
  const { isDark } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resume = [
    {
      company: "iCapo Tech Pvt Ltd (Living Things)",
      title: "DevOps Engineer",
      city: "On-site, IIT Bombay, Mumbai",
      start: "Feb 2025",
      end: "Present",
      logo: LivingThingsLogo,
    },
    {
      company: "Geekster",
      title: "Full Stack Developer Apprenticeship",
      city: "Remote",
      start: "Nov 2023",
      end: "Jan 2025",
      logo: GeeksterLogo,
    },
    {
      company: "Digisnare Technologies",
      title: "Full Stack Developer",
      city: "On-site, Gulbarga, Karnataka",
      start: "Mar 2023",
      end: "Jul 2023",
      logo: DigisnareLogo,
    },
  ];

  useEffect(() => {
    if (!isResumeOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsResumeOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

  return (
    <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} body-font transition-colors duration-300 py-16 sm:py-20 lg:py-24`} id="Work">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 mx-auto items-start">
        <div className={`lg:pr-12 lg:border-r border-b lg:border-b-0 pb-10 lg:pb-0 transition-colors duration-300 ${isDark ? 'border-purple-500/30' : 'border-purple-200'}`}>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Education</span>
          </h2>
          <div className={`h-1 w-24 mx-auto mb-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
          <ol>
            <li className="border-l-2 border-indigo-600">
              <div className="flex items-start">
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
                <div className={`block flex-1 min-w-0 p-5 sm:p-6 rounded-lg shadow-lg ml-4 sm:ml-6 mb-8 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
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
              <div className="flex items-start">
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
                <div className={`block flex-1 min-w-0 p-5 sm:p-6 rounded-lg shadow-lg ml-4 sm:ml-6 mb-8 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
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
        <div className="flex flex-col lg:pl-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Employment</span> History
          </h2>
          <div className={`h-1 w-24 mx-auto mb-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
          <div className={`rounded-2xl border p-5 sm:p-8 transition-colors duration-300 ${isDark ? 'border-zinc-700/40 bg-gray-800' : 'border-zinc-200 bg-white'}`}>
            <h2 className={`flex text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
              <BsFillBriefcaseFill className="h-6 w-6 flex-none" />
              <span className="ml-3">Work</span>
            </h2>
            <ol className={`mt-6 divide-y ${isDark ? 'divide-zinc-700/60' : 'divide-zinc-200'}`}>
              {resume.map((role, roleIndex) => (
                <li key={roleIndex} className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:gap-4">
                  <div className={`relative mt-1 hidden h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-md shadow-zinc-800/5 ring-1 sm:flex ${isDark ? 'ring-zinc-700/70' : 'ring-zinc-200'}`}>
                    <img
                      src={role.logo}
                      alt={`${role.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <dl className="flex w-full min-w-0 flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className={`flex w-full flex-none items-center gap-2 break-words text-lg font-semibold sm:text-xl transition-colors duration-300 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      <span className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 sm:hidden ${isDark ? 'ring-zinc-700/70' : 'ring-zinc-200'}`}>
                        <img
                          src={role.logo}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <span className="min-w-0">{role.company}</span>
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className={`w-full sm:w-auto text-base sm:text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {role.title}
                    </dd>

                    <dt className="sr-only">Date</dt>
                    <dd
                      className={`w-full sm:w-auto sm:ml-auto text-sm sm:text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
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
                    <dd className={`w-full text-base sm:text-lg transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {role.city}
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className={`inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 font-medium transition-colors duration-300 sm:w-auto ${
                  isDark
                    ? 'border-zinc-600 text-zinc-100 hover:bg-zinc-700'
                    : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
                }`}
                aria-label="View Resume"
              >
                <BsEyeFill className="mr-2 h-5 w-5" />
                View Resume
              </button>
              <a
                href={ResumePdf}
                download="kishlaychandan_devops.pdf"
                className="inline-flex w-full items-center justify-center px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-300 sm:w-auto"
                aria-label="Download Resume"
              >
                <BsDownload className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className={`flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl shadow-2xl ring-1 ${
              isDark ? 'bg-slate-900 ring-white/10' : 'bg-white ring-black/10'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`flex items-center justify-between gap-3 border-b px-4 py-3 ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`}>
              <div className="min-w-0">
                <h3 className={`truncate text-base font-semibold sm:text-lg ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Resume Preview
                </h3>
                <p className={`text-xs sm:text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Scroll inside the PDF to view all pages.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsResumeOpen(false)}
                className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-full transition-colors duration-300 ${
                  isDark
                    ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-label="Close resume preview"
              >
                <BsXLg className="h-5 w-5" />
              </button>
            </div>

            <div className={`${isDark ? 'bg-slate-950' : 'bg-slate-100'} flex-1 p-2 sm:p-4`}>
              <iframe
                src={ResumePdf}
                title="Kishlay Chandan Resume"
                className="h-full w-full rounded-xl bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Work;
