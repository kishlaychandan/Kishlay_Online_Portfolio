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
import orthopedicHapticSimulator from "../images/orthopedic-haptic-simulator.svg";
import { BsBoxArrowUpRight, BsGithub, BsCpuFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

// Ordered so the most substantial work leads — client work and full-featured
// builds first, smaller practice/clone UIs after. `category` drives the badge
// so clone/practice projects are framed honestly instead of looking like
// client deliverables.
const portfolio = [
  {
    Projectname: "Ecommerce Application",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay"],
    imageUrl: ecommerce,
    des: "Scalable ecommerce platform with authentication, wishlists, carts, and Razorpay payment integration; optimized with debouncing and lazy loading to improve conversions and load times.",
    Demo: "https://ecommerce.kclab.tech/",
    github: "https://github.com/kishlaychandan/Ecommerce",
    category: "practice",
  },
  {
    Projectname: "TVS Emerald, Isle of Trees",
    tech: ["HTML", "CSS", "WordPress", "Hostinger"],
    imageUrl: isle,
    des: "Authorized sales partner site delivered for a real estate client, built and shipped on WordPress.",
    Demo: "https://isle-of-trees.in/",
    github: "",
    category: "client",
  },
  {
    Projectname: "Orthopedic Haptic Simulator",
    tech: ["Raspberry Pi", "Arduino Uno", "Haptic Motor", "C/C++"],
    imageUrl: orthopedicHapticSimulator,
    des: "DST-funded surgical training simulator using Raspberry Pi, Arduino Uno, haptic motor feedback, collision detection, motor control, and hardware synchronization.",
    Demo: "",
    github: "",
    category: "academic",
  },
  {
    Projectname: "KKDial",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    imageUrl: kkdial,
    des: "Information directory portal with a dynamic dashboard for both users and admins.",
    Demo: "https://kkdial.free.nf/dlms/",
    github: "https://github.com/kishlaychandan/KKDial",
    category: "practice",
  },
  {
    Projectname: "Food Delivery App",
    tech: ["React JS", "Firebase Auth"],
    imageUrl: FoodApp,
    des: "Web app for online food ordering with AI recipes, payment gateway, and a chatbot.",
    Demo: "https://food-delivery-app-ebon.vercel.app/",
    github: "https://github.com/kishlaychandan/FoodDeliveryApp",
    category: "practice",
  },
  {
    Projectname: "Expense Tracker",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: expenseTracker,
    des: "Comprehensive financial management platform for tracking day-to-day expenses.",
    Demo: "https://warm-zabaione-9f18e0.netlify.app/",
    github: "https://github.com/kishlaychandan/kishlay-expense",
    category: "practice",
  },
  {
    Projectname: "Restaurant UI",
    tech: ["HTML", "CSS", "React JS"],
    imageUrl: restaurant,
    des: "UI for browsing restaurants and viewing their ratings.",
    Demo: "https://restaurant-orpin-beta.vercel.app/",
    github: "https://github.com/kishlaychandan/Restaurant",
    category: "practice",
  },
  {
    Projectname: "Netflix Clone",
    tech: ["React JS", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: netflix,
    des: "UI clone built to practice authentication flows and streaming-style layouts.",
    Demo: "https://netflix-clone-gamma-smoky.vercel.app/",
    github: "https://github.com/kishlaychandan/NetflixClone",
    category: "practice",
  },
  {
    Projectname: "Chai Sutta Bar",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    imageUrl: chaisuttabar,
    des: "UI practice build replicating the Chai Sutta Bar brand site.",
    Demo: "https://chai-sutta-bar-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/chai-sutta-bar",
    category: "practice",
  },
  {
    Projectname: "Aria Major Project",
    tech: ["HTML", "CSS"],
    imageUrl: areamajorproject,
    des: "UI build for the Aria website as a layout/CSS practice project.",
    Demo: "https://aria-majorproject-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/MajorProject-HTML--CSS",
    category: "practice",
  },
  {
    Projectname: "Boosted USA",
    tech: ["HTML", "CSS"],
    imageUrl: BoostedUSA,
    des: "UI practice build replicating the Boosted USA brand site.",
    Demo: "https://boostedusa-replicate-ui.netlify.app/",
    github: "https://github.com/kishlaychandan/Weekly_Test_6---CSS",
    category: "practice",
  },
  {
    Projectname: "GeekPok",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: Geekpok,
    des: "Pokemon-themed UI built for front-end practice.",
    Demo: "https://kishlaychandan.github.io/GeeksterPok/",
    github: "https://github.com/kishlaychandan/GeeksterPok",
    category: "practice",
  },
];

const CATEGORY_STYLE = {
  client: { label: "Client Project", className: "bg-emerald-500/90 text-white" },
  academic: { label: "Academic Project", className: "bg-violet-500/90 text-white" },
  practice: { label: "Practice Build", className: "bg-slate-700/90 text-slate-100" },
};

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
              A curated collection of work across client sites, products, and
              practice builds.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
            >
              {portfolio.map((project) => {
                const hasDemo = Boolean(project.Demo);
                const hasCode = Boolean(project.github);
                const badge = CATEGORY_STYLE[project.category];

                return (
                  <li key={project.Projectname} className="animate-scale-in group">
                    <div
                      className={`h-full flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
                        isDark
                          ? "bg-slate-900/50 backdrop-blur-xl border-slate-800 hover:border-slate-700"
                          : "bg-white border-slate-200"
                      } shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1`}
                    >
                      {/* Image with hover-reveal actions */}
                      <div className="relative aspect-video overflow-hidden bg-slate-950">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={project.imageUrl}
                          alt={`${project.Projectname} project screenshot`}
                          loading="lazy"
                        />

                        {/* Category badge */}
                        <span
                          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${badge.className}`}
                        >
                          {badge.label}
                        </span>

                        {/* Hover overlay with quick actions */}
                        {(hasDemo || hasCode) && (
                          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/70 group-hover:opacity-100">
                            {hasDemo && (
                              <a
                                href={project.Demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex -translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-slate-100"
                                aria-label={`View ${project.Projectname} demo`}
                              >
                                <BsBoxArrowUpRight className="h-4 w-4" />
                                Live
                              </a>
                            )}
                            {hasCode && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex -translate-y-2 items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-slate-700"
                                aria-label={`View ${project.Projectname} source code on GitHub`}
                              >
                                <BsGithub className="h-4 w-4" />
                                Code
                              </a>
                            )}
                          </div>
                        )}

                        {!hasDemo && !hasCode && (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/70 group-hover:opacity-100">
                            <span className="inline-flex -translate-y-2 items-center gap-1.5 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                              <BsCpuFill className="h-4 w-4" />
                              Hardware build — no live link
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-5">
                        <h3
                          className={`text-lg font-semibold mb-2 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project.Projectname}
                        </h3>
                        <p
                          className={`text-sm flex-1 mb-4 ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.des}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                                isDark
                                  ? "bg-slate-800 text-indigo-300"
                                  : "bg-indigo-50 text-indigo-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
