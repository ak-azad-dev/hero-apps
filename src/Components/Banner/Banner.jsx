import React from "react";

export const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] text-center items-center flex flex-col pt-[160px]">
      <h1 className="text-[72px] text-[#001931] font-extrabold leading-20">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[20px] text-[#627382] font-normal leading-8 pt-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-4 pt-10">
        <a
          className="btn shadow-none border-1 border-[#D2D2D2] bg-transparent text-[20px] font-semibold text-[#001931]
          px-5 py-4 rounded-[4px] flex gap-3 transition duration-300 ease-in transform hover:scale-105"
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
        >
          <img
            src="/src/assets/play_store.png"
            alt="Play Store Icon"
            height={24}
            width={24}
          />
          Google Play
        </a>
        <a
          className="btn shadow-none border-1 border-[#D2D2D2] bg-transparent text-[20px] font-semibold text-[#001931]
          px-5 py-4 rounded-[4px] flex gap-3 transition duration-300 ease-in transform hover:scale-105"
          href="https://www.apple.com/app-store/"
          target="_blank"
        >
          <img
            src="/src/assets/app_store.png"
            alt="App Store Icon"
            height={24}
            width={24}
          />
          App Store
        </a>
      </div>
      <img src="/src/assets/hero.png" alt="Hero Image" className="pt-10" />
    </div>
  );
};
