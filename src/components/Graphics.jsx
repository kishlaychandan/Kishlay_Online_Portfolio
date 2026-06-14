import Projectexb from "../images/project exhibition banner.png";
import projectExhibitionPoster from "../images/Project Exhibition.png";
import nvidiaWorkshopFlyer from "../images/Copy of Blue Gradient Technology flyer.png";
import certificateDesign from "../images/certificate.png";
import figma from "../images/figma.png";
import cafemenu from "../images/cafemenu.png";
import chaiwalla from "../images/chaiwalla.png";
import nwdl from "../images/nwdl.png";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const graphicSlides = [
  {
    image: Projectexb,
    alt: "Project exhibition banner design",
  },
  {
    image: projectExhibitionPoster,
    alt: "Project exhibition poster design",
  },
  {
    image: nvidiaWorkshopFlyer,
    alt: "NVIDIA workshop valedictory flyer design",
  },
  {
    image: certificateDesign,
    alt: "Workshop certificate design",
  },
  {
    image: figma,
    alt: "Figma design work",
  },
  {
    image: cafemenu,
    alt: "Cafe menu design",
  },
  {
    image: chaiwalla,
    alt: "Chaiwalla design",
  },
  {
    image: nwdl,
    alt: "NWDL workshop welcome design",
  },
];

export default function Graphics() {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = graphicSlides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? graphicSlides.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === graphicSlides.length - 1 ? 0 : currentIndex + 1
    );
  };
  
  return (
    <section
      className={`${isDark ? 'text-gray-400 bg-gray-900' : 'text-gray-600 bg-white'} body-font relative transition-colors duration-300`}
      id="Graphics"
    >
      <div className="container px-5 py-16 mx-auto sm:py-20 lg:py-24">
        <div className="flex flex-col text-center w-full mb-10 sm:mb-12 animate-fade-in">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Graphic</span> Design
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
        </div>
        <div className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border shadow-xl ${
          isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="relative flex h-[380px] w-full items-center justify-center p-4 sm:h-[480px] sm:p-6 lg:h-[640px]">
            <img
              src={activeSlide.image}
              className="mx-auto max-h-full max-w-full object-contain object-center"
              alt={activeSlide.alt}
              loading="lazy"
            />

            <button
              type="button"
              onClick={goToPrevious}
              className={`absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border text-lg shadow-lg backdrop-blur transition hover:scale-105 sm:left-5 sm:h-12 sm:w-12 sm:text-xl ${
                isDark
                  ? 'border-white/10 bg-slate-950/75 text-white hover:bg-slate-900'
                  : 'border-slate-200 bg-white/85 text-slate-900 hover:bg-white'
              }`}
              aria-label="Previous design"
            >
              ❮
            </button>

            <button
              type="button"
              onClick={goToNext}
              className={`absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border text-lg shadow-lg backdrop-blur transition hover:scale-105 sm:right-5 sm:h-12 sm:w-12 sm:text-xl ${
                isDark
                  ? 'border-white/10 bg-slate-950/75 text-white hover:bg-slate-900'
                  : 'border-slate-200 bg-white/85 text-slate-900 hover:bg-white'
              }`}
              aria-label="Next design"
            >
              ❯
            </button>
          </div>

          <div className={`flex items-center justify-center border-t px-4 py-3 ${
            isDark ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'
          }`}>
            <div className="flex justify-center gap-2">
              {graphicSlides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-7 bg-indigo-500'
                      : isDark
                      ? 'w-2.5 bg-slate-600 hover:bg-slate-500'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Show design ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
