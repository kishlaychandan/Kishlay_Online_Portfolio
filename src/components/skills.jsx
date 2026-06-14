import "../style/Skills.css";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoPhp,
} from "react-icons/bi";
import { DiMysql, DiJavascript } from "react-icons/di";
import {
  SiExpress,
  SiTaichigraphics,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="Skills"
      className={`skills-section ${
        isDark ? "bg-gray-900" : "skills-light bg-gradient-to-b from-slate-50 via-indigo-50/60 to-white"
      } body-font relative transition-colors duration-300 py-20`}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 animate-fade-in">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My Skills
          </h2>
          <p
            className={`text-sm sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Tech stack I use across frontend, backend, and DevOps.
          </p>
        </div>

        <div className="container">
          <div className="container__progressbars">
            {/* DevOps & Cloud Skills */}
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <FaDocker />
                </span>
                Docker
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiKubernetes />
                </span>
                Kubernetes
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiTerraform />
                </span>
                Terraform
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiAnsible />
                </span>
                Ansible
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiAmazonaws />
                </span>
                AWS
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiMicrosoftazure />
                </span>
                AZURE
              </span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiGooglecloud />
                </span>
                GCP
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiPrometheus />
                </span>
                Prometheus
              </span>
            </div>


            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiGrafana />
                </span>
                GRAFANA
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-devops shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiGithubactions />
                </span>
                CI/CD (GitHub Actions)
              </span>
            </div>
          <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-tailwindcss shadow-tailwindcss"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-tailwindcss">
                <span className="grid justify-items-center p-1">
                  <BiLogoCss3 />
                </span>
                HTML, CSS
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-tailwindcss shadow-tailwindcss"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-tailwindcss">
                <span className="grid justify-items-center p-1">
                  <DiJavascript />
                </span>
                JavaScript
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-react shadow-react"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-react">
                <span className="grid justify-items-center p-1">
                  <BiLogoReact />
                </span>
                React.js
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-node shadow-node"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-node">
                <span className="grid justify-items-center p-1">
                  <BiLogoNodejs />
                </span>
                Node.js
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <SiExpress />
                </span>
                Express.js
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <BiLogoMongodb />
                </span>
                MongoDB
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-tailwindcss shadow-tailwindcss"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-tailwindcss">
                <span className="grid justify-items-center p-1">
                  <BiLogoTailwindCss />
                </span>
                Tailwind CSS
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle  circle-graphics shadow-graphics"
                ></circle>
              </svg>
              <span className="progressbar__text circle-graphics shadow-graphics text-center">
                <span className="grid justify-items-center p-1">
                  <SiTaichigraphics />
                </span>
                UI/UX Design
              </span>
            </div>

            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <DiMysql />
                </span>
                MySQL
              </span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <DiMysql />
                </span>
                postgresSQL
              </span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <BiLogoPhp />
                </span>
                PHP
              </span>
            </div>
            
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                ></circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1"></span>
                Machine Learning
              </span>
            </div>
            {/* DevOps & Cloud Skills */}

          </div>
        </div>
      </div>
    </section>
  );
}
