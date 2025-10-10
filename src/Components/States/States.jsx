import React from 'react'

const States = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center py-[80px]">
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        Trusted by Millions, Built for You
      </h1>
      <div className="lg:stats pt-[40px] grid grid-cols-1 lg:flex justify-center gap-20 lg:gap-40">
        <div className="">
          <div className="stat-title text-base font-normal leading-6 text-white">
            Total Downloads
          </div>
          <div className="stat-value text-[64px] font-extrabold leading-[72px] text-white py-4">
            29.6M
          </div>
          <div className="stat-desc text-base font-normal leading-6 text-white">
            21% more than last month
          </div>
        </div>

        <div className="">
          <div className="stat-title text-base font-normal leading-6 text-white">
            Total Reviews
          </div>
          <div className="stat-value text-[64px] font-extrabold leading-[72px] text-white py-4">
            906K
          </div>
          <div className="stat-desc text-base font-normal leading-6 text-white">
            46% more than last month
          </div>
        </div>

        <div className="">
          <div className="stat-title text-base font-normal leading-6 text-white">
            Active Apps
          </div>
          <div className="stat-value text-[64px] font-extrabold leading-[72px] text-white py-4">
            132+
          </div>
          <div className="stat-desc text-base font-normal leading-6 text-white">
            31 more will Launch
          </div>
        </div>
      </div>
    </div>
  );
}

export default States
