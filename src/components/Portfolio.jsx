import kkdial from "../images/kkdial.png";
import expenseTracker from "../images/expenseTracker.png";
import isle from "../images/isle.png";
import chaisuttabar from "../images/chaisuttabar.png";
import areamajorproject from "../images/area-majorproject.png";
import BoostedUSA from "../images/BoostedUSA.png";
import restaurant from "../images/restaurant.png";
import Geekpok from '../images/Geekpok.png';
import "../style/Portfolio.css";
const portfolio = [
  {
    Projectname: "KKDial",
    tech: "HTML,CSS,PHP,JavaScript,MySQL",
    imageUrl: kkdial,
    des: "Information Directory Portal, Dynamic DashBoard for User and Admin",
    Demo: "https://kkdial.infinityfreeapp.com/",
    github: "https://github.com/kishlaychandan/KKDial",
  },
  {
    Projectname: "TVS EMERALD, ISLE OF TREES",
    tech: "HTML,CSS, Wordpress, Hostinger",
    imageUrl: isle,
    des: "CLIENT PROJECT, ISLE OF TREES, Authorized sales partner",
    Demo: "https://isle-of-trees.in/",
    github: "https://isle-of-trees.in/",
  },
  {
    Projectname: "Expense-tracker",
    tech: "HTML,CSS, JavaScript",
    imageUrl: expenseTracker,
    des: "Expense Tracker Website is a comprehensive financial management platform.",
    Demo: "https://warm-zabaione-9f18e0.netlify.app/",
    github: "https://github.com/kishlaychandan/kishlay-expense",
  },
  {
    Projectname: "Restaurant-UI",
    tech: "HTML, CSS, React Js",
    imageUrl: restaurant,
    des: "Created a UI for Restaurant, where you can find ratings and reviews of restaurants online.",
    Demo: "https://restaurant-orpin-beta.vercel.app/",
    github: "https://github.com/kishlaychandan/Restaurant",
  },
  {
    Projectname: "Chai-Sutta-Bar (Replicate)",
    tech: "HTML, CSS, Tailwind CSS",
    imageUrl: chaisuttabar,
    des: "Created a replicate UI of Chai-Sutta-Bar",
    Demo: "https://chai-sutta-bar-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/chai-sutta-bar",
  },
  {
    Projectname: "Aria-MajorProject-UI",
    tech: "HTML, CSS",
    imageUrl: areamajorproject,
    des: "Created a UI of website Aria",
    Demo: "https://aria-majorproject-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/MajorProject-HTML--CSS",
  },
  {
    Projectname: "Boosted USA (Replicate)",
    tech: "HTML, CSS",
    imageUrl: BoostedUSA,
    des: "Created a replicate UI of Boosted USA",
    Demo: "https://boostedusa-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/Weekly_Test_6---CSS",
  },
  {
    Projectname: "GeekPok",
    tech: "HTML, CSS, JavaScript",
    imageUrl: Geekpok,
    des: "Created a UI for pookemon",
    Demo: "https://kishlaychandan.github.io/GeeksterPok/",
    github: "https://github.com/kishlaychandan/GeeksterPok",
  },
  
];
export default function Portfolio() {
  return (
    <div className="bg-gray-900" id="Portfolio">
      <main className=" relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Portfolio
            </h2>
          </div>
        </div>
        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {portfolio.map((project) => (
                <li key={project.Projectname} className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-[0.4rem]" >
                 <div className="portfolio-card w-full relative overflow-hidden rounded-2xl " >
                  <a href={project.Demo} target="_blank">
                  <img
                      className="aspect-[14/13] brightness-[0.8]  w-full object-fill rounded-2xl border cursor-pointer  border-gray-600"
                      src={project.imageUrl}
                      alt=""
                    />
                  </a>
                  <p className="hover:cursor-pointer text-center w-full absolute z-100 top-[60%] text-white text-[1.3rem] font-bold opacity-0" >{project.Projectname}</p>
                 </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {project.Projectname}
                  </h3>
                  <p className="text-base leading-7 text-gray-300">
                    {project.tech}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {project.des}
                  </p>
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.Demo, "_blank", "noreferrer");
                    }}
                  >
                    <button className="hover:font-semibold mx-auto text-white bg-indigo-600 border-[2.5px] border-indigo-600 hover:bg-white hover:text-indigo-600 py-1 px-5 focus:outline-none rounded text-lg">
                      View
                    </button>
                  </span>{" "}
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault(); 
                      window.open(project.github, "_blank", "noreferrer");
                    }}
                  >
                    <button className=" mx-auto text-white border-[2.5px] border-indigo-600 bg-indigo-600 hover:bg-white hover:font-semibold hover:text-indigo-600  py-1 px-5 focus:outline-none  rounded text-lg">
                      Github
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
