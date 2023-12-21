import { useSearchParams } from "react-router-dom";
import GalleryImageIcon from "../../assets/GalleryImageIcon.svg";
import GalleryImageIconActive from "../../assets/GalleryImageIconActive.svg";
import VideoIcon from "../../assets/VideoIcon.svg";
import VideoIconActive from "../../assets/VideoIconActive.svg";
import { useEffect, useState } from "react";
import AllImageDetails from "../../components/AllImageDetails";
import AllVideoDetails from "../../components/AllVideoDetails";

function AllDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabItem, setTabItem] = useState("");

  useEffect(() => {
    setTabItem(searchParams.get("type"));
  }, [searchParams]);

  return (
    <div className="w-full h-full">
      <div className="flex gap-5">
        <button
          onClick={() => setSearchParams({ type: "image" })}
          className={`flex items-center px-5 py-3  rounded-md ${
            tabItem === "image"
              ? "text-white bg-red-400"
              : "text-red-400 bg-white"
          }`}
        >
          <img
            loading="lazy"
            src={
              tabItem === "image" ? GalleryImageIconActive : GalleryImageIcon
            }
            alt=""
          />
          <span className="pl-1">Image</span>
        </button>
        <button
          onClick={() => setSearchParams({ type: "video" })}
          className={`flex items-center px-5 py-3  rounded-md ${
            tabItem === "video"
              ? "text-white bg-red-400"
              : "text-red-400 bg-white"
          }`}
        >
          <img
            loading="lazy"
            src={tabItem === "video" ? VideoIconActive : VideoIcon}
            alt=""
          />
          <span className="pl-1">Video</span>
        </button>
      </div>
      <div className="mt-8 mb-4">
        <p className="text-2xl font-bold text-red-400">All Details</p>
      </div>

      <div>
        {tabItem === "image" ? <AllImageDetails /> : <AllVideoDetails />}
      </div>
    </div>
  );
}

export default AllDetails;
