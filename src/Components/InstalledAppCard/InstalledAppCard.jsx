import React from "react";
import { Download } from "lucide-react";
import { toast } from "react-toastify";
import RatingIcon from "../../assets/icon-ratings.png";

const InstalledAppCard = ({ installedApp, setInstalledApps, setCount }) => {
  const { image, title, size, ratingAvg, downloads } = installedApp;

  const handleUninstall = (installedApp) => {
    const installedApps = JSON.parse(localStorage.getItem("installed")) || [];
    const updatedApps = installedApps.filter((id) => id !== installedApp.id);
    localStorage.setItem("installed", JSON.stringify(updatedApps));

    // Remove app from current displayed list
    setInstalledApps((prevApps) =>
      prevApps.filter((app) => app.id !== installedApp.id)
    )
    setCount(updatedApps.length);
    // Display success message
    toast.success(`${installedApp.title} uninstalled successfully`);
  };

  return (
    <div>
      <ul className="list bg-white rounded-box shadow-md">
        <li className="list-row items-center">
          <div>
            <img className="size-15 rounded-box" src={image} />
          </div>
          <div>
            <div className="text-[20px] font-medium text-[#001931]">
              {title}
            </div>
            <div className="mt-4">
              <ul className="flex gap-5 items-center">
                <li className="flex gap-1 items-center text-[#00D390] text-base font-medium">
                  <Download height={14} width={14} />
                  {downloads}
                </li>
                <li className="flex gap-1 items-center text-[#FF8811] text-base font-medium">
                  <img src={RatingIcon} height={14} width={14} />
                  {ratingAvg}
                </li>
                <li className="text-[#627382] text-base font-normal">
                  {size} MB
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => handleUninstall(installedApp)}
            className={`btn text-[20px] shadow-none text-white font-semibold bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:scale-105"
            border-0 flex gap-2.5 rounded-[4px] px-[20px] py-6 transition duration-300 ease-in transform`}
          >
            Uninstall
          </button>
        </li>
      </ul>
    </div>
  );
};

export default InstalledAppCard;
