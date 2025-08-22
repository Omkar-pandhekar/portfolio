import React from "react";

export default function IO() {
  return (
    <div className="relative inline-block">
      <button className="relative flex items-center w-48 h-12 text-inherit font-inherit bg-transparent p-0 cursor-pointer group focus:outline-none">
        <span className="relative block w-12 h-12 bg-[#282936] rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
          <span className="absolute top-1/2 left-2 -translate-y-1/2 w-4.5 h-0.5 bg-white transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-4">
            <span className="absolute -top-1.5 right-0.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45 content-['']" />
          </span>
        </span>
        <span className="absolute top-0 left-0 right-0 bottom-0 ml-[1.85rem] py-3 text-[#282936] text-center font-bold uppercase leading-[1.6] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          Learn More
        </span>
      </button>
    </div>
  );
}
