import "../style/Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoPhp,
  
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { RiBootstrapFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTaichigraphics, SiCanva } from "react-icons/si";
export default function Skills() {
  return (
    <section
      className="text-gray-400 bg-gray-900 body-font relative "
      id="Skills"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Skills
          </h2>
        </div>

        <div className="container">
          <div className="container__progressbars">
          <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="95"
                  className="progressbar__svg-circle circle-express shadow-express"
                >
                  {" "}
                </circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <BiLogoMongodb />
                </span>
                HTML,CSS
              </span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="90"
                  className="progressbar__svg-circle circle-js shadow-js"
                >
                  {" "}
                </circle>
              </svg>
              <span className="progressbar__text shadow-js">
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
              </svg>
              <span className="progressbar__text shadow-tailwindcss">
                <span className="grid justify-items-center p-1">
                  <BiLogoTailwindCss />
                </span>
                TailwindCSS
              </span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle  circle-graphics shadow-graphics"
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
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
                >
                  {" "}
                </circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  <BiLogoMongodb />
                </span>
                WordPress
              </span>
            </div>
            
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className="progressbar__svg-circle circle-express shadow-express"
                >
                  {" "}
                </circle>
              </svg>
              <span className="progressbar__text shadow-express">
                <span className="grid justify-items-center p-1">
                  {/* <DiMysql /> */}
                </span>
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
