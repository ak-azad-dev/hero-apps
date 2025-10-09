import React, { useEffect, useState } from 'react'
import { Download } from "lucide-react";
import AppCard from "../AppCard/AppCard";
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {
   const [filteredApps, setFilteredApps] = useState(apps);
   const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        const results = apps.filter((app) => app.id <= 8);
        setFilteredApps(results);
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, [apps]);

  return (
    <div className="mt-[80px] mb-[80px] px-10 w-full md:max-w-[1440px] mx-auto items-center">
      <h1 className="text-center text-[48px] font-bold text-[#001931]">
        Trending Apps
      </h1>
      <p className="text-center text-[20px] font-normal text-[#627382] leading-8 mt-[20px]">
        Explore All Trending Apps on the Market developed by us
      </p>
      {loading ? (
        <div className="flex justify-center text-3xl text-black font-bold">
          L{" "}
          <img
            src="/src/assets/logo.png"
            alt="Loading Image"
            className="animate-spin"
            height={45}
            width={45}
          />{" "}
          ADING
        </div>
      ) : (
        <div className="card-section grid grid-cols-4 gap-6 mt-[40px]">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-[50px]">
        <Link to={"/apps"}>
          <a
            className="btn text-base shadow-none text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2]
          border-0 flex gap-2.5 rounded-[4px] px-4 py-3 transition duration-300 ease-in transform hover:scale-105"
          >
            Show All
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
