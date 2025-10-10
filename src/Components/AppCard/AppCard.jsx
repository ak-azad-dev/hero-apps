import React from 'react'
import { Download } from "lucide-react";
import { Link } from 'react-router';
import RatingIcon from "../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/app/details/${id}`}>
      <div className="card bg-white shadow-sm rounded-[4px] transition duration-300 ease-out transform hover:scale-105">
        <figure className="p-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-[8px] object-cover"
            height={250}
            width={250}
          />
        </figure>
        <div className="card-body pt-0 pb-4">
          <h3 className="text-[20px] font-medium text-[#001931]">{title}</h3>
          <div className="card-actions justify-between mt-4">
            <div className="badge bg-[#F1F5E8] border-none text-[#00D390] text-base font-medium rounded-[4px] px-2.5 py-2">
              <Download height={14} width={14} />
              {downloads}
            </div>
            <div className="badge bg-[#FFF0E1] border-none text-[#FF8811] text-base font-medium rounded-[4px] px-2.5 py-2">
              <img src={RatingIcon} alt="Rating Icon" height={12} width={12} />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
