import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";
import InstalledAppCard from "../../Components/InstalledAppCard/InstalledAppCard";
import Logo from "../../assets/logo.png";

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

  function parseNumber(value) {
    const match = value.match(/^\d+/);
    return match ? Number(match[0]) : null;
  }

  // To sort data by download count
  const sortByDownload = (e) => {
    let results = [];
    if (e.target.value == 1) {
      results = [...installedApps].sort((a, b) => parseNumber(b.downloads) - parseNumber(a.downloads));
    } else {
      results = [...installedApps].sort(
        (a, b) => parseNumber(a.downloads) - parseNumber(b.downloads)
      );
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
          defaultValue="Sort By Download"
          className="select bg-white border-1 border-[#D2D2D2] text-[#627382] w-[200px]"
        >
          <option disabled={true}>Sort By Download</option>
          <option value={1} onClick={(e) => sortByDownload(e)}>
            High-Low
          </option>
          <option value={2} onClick={(e) => sortByDownload(e)}>
            Low-High
          </option>
        </select>
      </div>
      {loading ? (
        <div className="flex justify-center text-3xl text-black font-bold">
          L{" "}
          <img
            src={Logo}
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
