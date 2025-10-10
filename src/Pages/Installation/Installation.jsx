import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";
import InstalledAppCard from "../../Components/InstalledAppCard/InstalledAppCard";

const Installation = () => {
  const apps = useLoaderData();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const installedAppsId =
        JSON.parse(localStorage.getItem("installed")) || [];
      const results = apps.filter((item) => installedAppsId.includes(item.id));
      setInstalledApps(results);
      setCount(results.length);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [apps]);

  // To sort data by app size
  const sortLowToHigh = (e) => {
    let results = [];
    if (e.target.value == 1) {
      results = [...installedApps].sort((a, b) => a.size - b.size);
    } else {
      results = [...installedApps].sort((a, b) => b.size - a.size);
    }

    setInstalledApps(results);
  };

  return (
    <div className="mt-[160px] mb-[80px] px-10 w-full md:max-w-[1440px] mx-auto items-center">
      <h1 className="text-center text-[48px] font-bold text-[#001931]">
        Your Installed Apps
      </h1>
      <p className="text-center text-[20px] font-normal text-[#627382] leading-8 mt-[20px]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mt-[40px]">
        <h3 className="text-2xl font-semibold leading-8 text-[#001931]">
          {`(${count})`} Apps Found
        </h3>
        <select
          defaultValue="Sort By Size"
          className="select bg-white border-1 border-[#D2D2D2] text-[#627382] w-[200px]"
        >
          <option disabled={true}>Sort By Size</option>
          <option value={1} onClick={(e) => sortLowToHigh(e)}>
            Low - High
          </option>
          <option value={2} onClick={(e) => sortLowToHigh(e)}>
            High - Low
          </option>
        </select>
      </div>
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
        <>
          {installedApps.length != 0 ? (
            <div className="card-section grid grid-cols-1 gap-6 mt-[20px]">
              {installedApps.map((app) => (
                <InstalledAppCard
                  key={app.id}
                  installedApp={app}
                  setInstalledApps={setInstalledApps}
                  setCount={setCount}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-[#627382] text-4xl font-extrabold">
                No Apps Found
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Installation;
