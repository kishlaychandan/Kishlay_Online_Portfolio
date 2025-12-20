import Projectexb from "../images/project exhibition banner.png";
import figma from "../images/figma.png";
import cafemenu from "../images/cafemenu.png";
import chaiwalla from "../images/chaiwalla.png";
import nwdl from "../images/nwdl.png";
import { useTheme } from "../context/ThemeContext";

export default function Graphics() {
  const { isDark } = useTheme();
  
  return (
    <section
      className={`${isDark ? 'text-gray-400 bg-gray-900' : 'text-gray-600 bg-white'} body-font relative transition-colors duration-300`}
      id="Graphics"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 animate-fade-in">
          <h2 className={`text-4xl font-bold tracking-tight sm:text-6xl mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>Graphic</span> Design
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500`}></div>
        </div>
        <div className="carousel w-full opacity-75 max-h-[40rem]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Projectexb} className="w-full" alt="Project exhibition banner" loading="lazy" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle" aria-label="Previous slide">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle" aria-label="Next slide">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={figma} className="w-full object-fill" alt="Figma design work" loading="lazy" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle" aria-label="Previous slide">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle" aria-label="Next slide">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={cafemenu} className="w-full object-contain" alt="Cafe menu design" loading="lazy" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle" aria-label="Previous slide">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle" aria-label="Next slide">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={chaiwalla} className="w-full" alt="Chaiwalla design" loading="lazy" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle" aria-label="Previous slide">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle" aria-label="Next slide">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={nwdl} className="w-full" alt="NWDL design work" loading="lazy" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle" aria-label="Previous slide">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle" aria-label="Next slide">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
