import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import { Search } from "lucide-react";
import { Suspense } from "react";

const Apps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const searchResults = apps.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(searchResults);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm, apps]);

  return (
    <div className="mt-[160px] mb-[80px] px-10 w-full md:max-w-[1440px] mx-auto items-center">
      <h1 className="text-center text-[48px] font-bold text-[#001931]">
        Our All Applications
      </h1>
      <p className="text-center text-[20px] font-normal text-[#627382] leading-8 mt-[20px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mt-[40px]">
        <h3 className="text-2xl font-semibold leading-8 text-[#001931]">
          {`(${filteredApps.length})`} Apps Found
        </h3>
        <label className="input bg-transparent border-1 border-[#D2D2D2] text-[#627382]">
          <Search />
          <input
            type="search"
            required
            placeholder="Search Apps"
            className="placeholder:text-base font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
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
          {filteredApps.length != 0 ? (
            <div className="card-section grid grid-cols-4 gap-6 mt-[20px]">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-[#627382] text-4xl font-extrabold">No Apps Found</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Apps;
