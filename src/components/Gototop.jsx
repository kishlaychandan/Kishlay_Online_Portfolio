import React from "react";

function Gototop() {
  const Gototop = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className=" top-btn fixed  bottom-8 right-8 border-0 w-14 h-14 rounded-full drop-shadow-md bg-indigo-600 text-white text-3xl font-bold"
      onClick={Gototop}
    >
      <h1 className="text-center cursor-pointer p-2">&uarr;</h1>
    </div>
  );
}

export default Gototop;
