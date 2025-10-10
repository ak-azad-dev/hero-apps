import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const appDetails = apps.find((app) => app.id === appId);
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedAppsId = JSON.parse(localStorage.getItem("installed")) || [];
    if (installedAppsId.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);

  // Return if app not found
  if (!appDetails) {
    return (
      <div className="mt-[120px] mb-[40px] px-10 w-full md:max-w-[1440px] mx-auto text-center flex flex-col justify-center items-center">
        <img src="/src/assets/App-Error.png" alt="App Error Image" />
        <h1 className="text-[48px] font-semibold leading-[60px] text-[#001931] mt-[20px]">
          OOPS!! APP NOT FOUND
        </h1>
        <p className="text-[20px] font-normal leading-[32px] text-[#627382] mt-[10px]">
          The app you are requesting is not found on our system. Please try
          another app.
        </p>
        <Link to="/">
          <button
            className="btn text-base shadow-none text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
          border-0 flex gap-2.5 rounded-[4px] px-4 py-3 transition duration-300 ease-in transform hover:scale-105 mt-4"
          >
            Go Back!
          </button>
        </Link>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = appDetails;

  const handleInstall = (appDetails) => {
    const installedAppsId = JSON.parse(localStorage.getItem("installed")) || [];
    //const isInstalled = installedApps.some((app) => app.id === appDetails.id);

    if (!installedAppsId.includes(appDetails.id)) {
      const updatedApps = [...installedAppsId, appDetails.id];
      localStorage.setItem("installed", JSON.stringify(updatedApps));

      setIsInstalled(true);
      // Display success message
      toast.success(`${appDetails.title} installed successfully`);
    }
  };

  return (
    <div className="mt-[160px] mb-[40px] px-10 w-full md:max-w-[1440px] mx-auto">
      <div className="grid grid-cols-[300px_1fr] gap-[40px]">
        <img
          src={image}
          alt="App Image"
          height={350}
          width={350}
          className="object-cover"
        />
        <div>
          <h1 className="text-[32px] font-bold text-[#001931]">{title}</h1>
          <p className="text-[20px] font-normal text-[#627382] leading-8 mt-2.5">
            Developed by{" "}
            <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              <a href="#">{companyName}</a>
            </span>
          </p>
          <div className="flex w-full flex-col mt-[10px]">
            <div className="divider before:bg-[#C4C9CE] after:bg-[#C4C9CE]"></div>
          </div>
          <div className="mt-[10px] flex gap-12">
            <div>
              <img
                src="/src/assets/icon-downloads.png"
                alt="Download Icon"
                height={40}
                width={40}
              />
              <div className="stat-title text-base font-normal leading-6 text-[#001931] py-2">
                Downloads
              </div>
              <div className="stat-value text-[40px] font-extrabold leading-10 text-[#001931]">
                {downloads}
              </div>
            </div>

            <div>
              <img
                src="/src/assets/icon-ratings.png"
                alt="Rating Icon"
                height={40}
                width={40}
              />
              <div className="stat-title text-base font-normal leading-6 text-[#001931] py-2">
                Average Ratings
              </div>
              <div className="stat-value text-[40px] font-extrabold leading-10 text-[#001931]">
                {ratingAvg}
              </div>
            </div>

            <div>
              <img
                src="/src/assets/icon-review.png"
                alt="Review Icon"
                height={40}
                width={40}
              />
              <div className="stat-title text-base font-normal leading-6 text-[#001931] py-2">
                Total Reviews
              </div>
              <div className="stat-value text-[40px] font-extrabold leading-10 text-[#001931]">
                {reviews}
              </div>
            </div>
          </div>
          <div className="mt-[30px] w-fit">
            <button
              onClick={() => handleInstall(appDetails)}
              disabled={isInstalled}
              className={`btn text-[20px] shadow-none text-white font-semibold bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:scale-105"
              border-0 flex gap-2.5 rounded-[4px] px-[20px] py-6 transition duration-300 ease-in transform`}
            >
              {isInstalled ? `Installed` : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col mt-[10px]">
        <div className="divider before:bg-[#C4C9CE] after:bg-[#C4C9CE]"></div>
      </div>
      <div>
        <h1 className="text-[24px] font-semibold leading-8 text-[#001931] mb-6">
          Ratings
        </h1>
        <ResponsiveContainer height={400}>
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={[...ratings].sort((a, b) => b.count - a.count)}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Bar dataKey="count" barSize={20} fill="#FF8811" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="flex w-full flex-col mt-[10px]">
        <div className="divider before:bg-[#C4C9CE] after:bg-[#C4C9CE]"></div>
      </div>
      <div className="mt-[20px]">
        <h1 className="text-[24px] font-semibold leading-8 text-[#001931]">
          Description
        </h1>
        <p className="text-[20px] font-normal leading-8 text-[#627382] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
