import Profile from "../images/kishlay.jpg";
import { useTheme } from "../context/ThemeContext";

export default function Aboutme() {
  const { isDark } = useTheme();
  
  return (
    <div
      className={`${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300 py-20`}
      id="About Me"
    >
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10 animate-fade-in">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-2 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              About Me
            </h2>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A quick snapshot of who I am and how I work.
            </p>
          </div>
        </div>

        <div className="relative isolate -z-10 mt-20 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              className={`mx-auto flex max-w-2xl flex-col gap-10 px-6 py-10 sm:rounded-2xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-14 xl:gap-x-16 xl:px-16 transition-all duration-500 animate-scale-in ${
                isDark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="w-full overflow-hidden flex-none rounded-2xl shadow lg:h-auto lg:max-w-sm object-contain group animate-slide-in-left">
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    isDark ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                  }`}
                >
                <img
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                src={Profile}
                    alt="Kishlay Chandan"
                    loading="lazy"
              />
                </div>
              </div>
              <div className="w-full flex-auto animate-slide-in-right">
                <h2
                  className={`text-2xl sm:text-3xl font-semibold mb-3 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Kishlay Chandan
                </h2>
                <p
                  className={`mt-3 text-sm sm:text-base leading-7 transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I'm a DevOps / Platform Engineer who's equally comfortable writing code and owning infrastructure. My work sits at the intersection of development and operations — building reliable systems, automating delivery pipelines, and making sure production stays healthy at 2 AM, not just at deploy time.
                </p>
                <p
                  className={`mt-3 text-sm sm:text-base leading-7 transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  With 1.5 years in DevOps and 3+ years across the full stack, I've shipped production-grade CI/CD pipelines, led a zero-downtime cloud migration (AWS/GCP → Azure), built Kubernetes platforms on AKS, and put DevSecOps practices in place that actually stick. I hold an MCA from the Central University of Karnataka and have hands-on experience across multi-cloud (GCP, AWS, Azure), GitOps with ArgoCD, and full-stack observability with Prometheus and Grafana — paired with React and Node.js when the work calls for it.
                </p>
                <div className="mt-10 flex max-[1023px]:justify-center gap-4">
                  <a
                    href="https://github.com/KishlayChandan"
                    className={`group relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isDark
                        ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit GitHub profile"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      GitHub
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kishlay-chandan-a9055a214/"
                    className="group relative px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 transition-all duration-200 hover:bg-indigo-700"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit LinkedIn profile"
                  >
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}