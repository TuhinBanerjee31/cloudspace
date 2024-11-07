import React from "react";
import { CloudIcon, ChevronDownIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import headerImg2 from "../assets/header_img2.jpg";

const Header = () => {
  return (
    <div className="font-ibm min-h-screen bg-header-img bg-cover bg-no-repeat pb-3">
      <nav className="flex items-center justify-between p-5">
        {/* LOGO */}
        <div className="flex gap-2">
          <h1 className="text-white self-end text-2xl pb-1 tracking-wider">
            CloudSpace
          </h1>
          <CloudIcon class="h-12 w-auto text-white" />
        </div>

        {/* NAV OPTIONS */}
        <div className="flex gap-10">
          <span className="text-white flex gap-2 cursor-pointer">
            <p>Offerings</p> <ChevronDownIcon class="h-5 w-5 self-center" />
          </span>

          <span className="text-white flex gap-2 cursor-pointer">
            <p>Industries</p> <ChevronDownIcon class="h-5 w-5 self-center" />
          </span>

          <span className="text-white flex gap-2 cursor-pointer">
            <p>About Us</p> <ChevronDownIcon class="h-5 w-5 self-center" />
          </span>

          <span className="text-white flex gap-2 cursor-pointer">
            <p>Insights</p> <ChevronDownIcon class="h-5 w-5 self-center" />
          </span>

          <span className="text-white flex gap-2 cursor-pointer">
            <p>Newsroom</p>
          </span>

          <span className="text-white flex gap-2 cursor-pointer">
            <p>Contact</p>
          </span>
        </div>
      </nav>

      <h1 className="pt-48 text-white text-center text-6xl max-w-screen-lg px-5 font-semibold tracking-wider mx-auto">Transform, build, and manage your technology.</h1>
      <h5 className="pt-5 text-white mx-auto text-center text-xl">IT changes fast. We change faster.</h5>

      <div className="max-w-screen-md my-10 mx-auto px-4">
        <img src={headerImg2} className="shadow-xl shadow-slate-400" />
      </div>

      <ChevronDoubleDownIcon class="h-16 w-16 mx-auto text-white animate-bounce my-20" />
    </div>
  );
};

export default Header;
