import Projectexb from "../images/project exhibition banner.png";
import figma from "../images/figma.png";
import chattize from "../images/chattize.png";
import cafemenu from "../images/cafemenu.png";
import chaiwalla from "../images/chaiwalla.png";
import nwdl from "../images/nwdl.png";
import certificate from "../images/certificate.png";
export default function Graphics() {
  return (
    <section
      className="text-gray-400 bg-gray-900 body-font relative "
      id="Graphics"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Graphic Desgin
          </h2>
        </div>
        <div className="carousel w-full opacity-75 max-h-[40rem]">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src={Projectexb} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={figma} className="w-full object-fill" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={cafemenu} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide3" className="carousel-item relative w-full">
            <img src={chattize} className="w-full" />
            <div className="absolute flex just ify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
          <div id="slide4" className="carousel-item relative w-full">
            <img src={chaiwalla} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={nwdl} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide6" className="carousel-item relative w-full ">
            {" "}
            <img
              src={certificate}
              className="w-full h-96 object-contain object-center"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
