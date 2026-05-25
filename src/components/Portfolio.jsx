import kkdial from "../images/kkdial.png";
import expenseTracker from "../images/expenseTracker.png";
import isle from "../images/isle.png";
import chaisuttabar from "../images/chaisuttabar.png";
import areamajorproject from "../images/area-majorproject.png";
import BoostedUSA from "../images/BoostedUSA.png";
import restaurant from "../images/restaurant.png";
import Geekpok from '../images/Geekpok.png';
import FoodApp from '../images/FoodApp.png'
import ecommerce from "../images/ecommerce.png";
import netflix from "../images/netflix.png";
import "../style/Portfolio.css";
import { useTheme } from "../context/ThemeContext";

const portfolio = [
  {
    Projectname: "Ecommerce Application",
    tech: "React, Node.js, Express.js, MongoDB, Tailwind CSS, Razorpay",
    imageUrl: ecommerce,
    des: `Scalable ecommerce platform with authentication, wishlists, carts, and Razorpay payment integration; optimized with debouncing and lazy loading to improve conversions and load times.`,
    Demo: "https://kishlaychandan.kclab.tech/",
    github: "https://github.com/kishlaychandan/Ecommerce",
  },
  {
    Projectname: "KKDial",
    tech: "HTML,CSS,PHP,JavaScript,MySQL",
    imageUrl: kkdial,
    des: `Information Directory Portal, Dynamic DashBoard for User and Admin`,
    Demo: "https://kkdial.free.nf/dlms/",
    github: "https://github.com/kishlaychandan/KKDial",
  },
  {
    Projectname: "Netflix Clone",
    tech: "React JS, Node js, MongoDB, Tailwind CSS",
    imageUrl: netflix,
    des: "Netflix clone with user authentication",
    Demo: "https://netflix-clone-gamma-smoky.vercel.app/",
    github: "https://github.com/kishlaychandan/NetflixClone",
  },
  {
    Projectname: "Food Delivery App",
    tech: "React JS, Firebase authentication",
    imageUrl: FoodApp,
    des: "Web app for online food ordering with AI recipes, payment gateway, and a chatBot.",
    Demo: "https://food-delivery-app-ebon.vercel.app/",
    github: "https://github.com/kishlaychandan/FoodDeliveryApp",
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
    des: "Created a UI for Restaurant, where you can find ratings of restaurants.",
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
    des: "Created a UI for Pokemon",
    Demo: "https://kishlaychandan.github.io/GeeksterPok/",
    github: "https://github.com/kishlaychandan/GeeksterPok",
  },
  {
    Projectname: "Orthopedic Haptic Simulator",
    tech: "Raspberry Pi, Arduino Uno, Real-time Control, C/C++",
    imageUrl: areamajorproject,
    des: "DST-funded project to enhance orthopedic surgical training through a haptic simulation platform with collision detection, motor control, and hardware synchronization.",
    Demo: "",
    github: "",
  },
  
];
export default function Portfolio() {
  const { isDark } = useTheme();
  
  return (
    <div
      id="Portfolio"
      className={`${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300 py-24`}
    >
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10 animate-fade-in">
            <h2
              className={`text-4xl font-bold tracking-tight sm:text-5xl mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Selected Projects
            </h2>
            <p
              className={`text-sm md:text-base ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A curated collection of work across products, client projects, and
              experiments.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
            >
              {portfolio.map((project) => (
                <li key={project.Projectname} className="animate-scale-in">
                  <div
                    className={`h-full flex flex-col rounded-xl border ${
                      isDark
                        ? "bg-gray-900 border-gray-700"
                        : "bg-white border-gray-200"
                    } shadow-sm hover:shadow-md transition-shadow duration-300`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <a
                        href={project.Demo}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                  <img
                          className="aspect-[16/10] w-full object-cover transition-transform duration-300 hover:scale-105"
                      src={project.imageUrl}
                          alt={`${project.Projectname} project screenshot`}
                          loading="lazy"
                    />
                  </a>
                 </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                    {project.Projectname}
                  </h3>
                      <p
                        className={`text-xs font-medium mb-2 ${
                          isDark ? "text-indigo-300" : "text-indigo-600"
                        }`}
                      >
                    {project.tech}
                  </p>
                      <p
                        className={`text-sm flex-1 mb-4 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                    {project.des}
                  </p>

                      <div className="flex gap-2">
                        <a
                          href={project.Demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                          aria-label={`View ${project.Projectname} demo`}
                        >
                          Live
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md border ${
                            isDark
                              ? "border-gray-600 text-gray-100 hover:bg-gray-800"
                              : "border-gray-300 text-gray-800 hover:bg-gray-50"
                          } transition-colors duration-200`}
                          aria-label={`View ${project.Projectname} source code on GitHub`}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
