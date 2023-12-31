import SearchIcon from "../../assets/SearchIcon.svg";
import GalleryImageIcon from "../../assets/GalleryImageIcon.svg";
import GalleryImageIconActive from "../../assets/GalleryImageIconActive.svg";
import VideoIcon from "../../assets/VideoIcon.svg";
import VideoIconActive from "../../assets/VideoIconActive.svg";
import { useState } from "react";
import AllImageTemplates from "../../components/AllImageTemplates";
import AllVideoTemplates from "../../components/AllVideoTemplates";

function Template() {
  const [tabItem, setTabItem] = useState("image");

  return (
    <div className="w-full h-full">
      <div className="bg-white flex max-w-[650px] flex-col px-5 py-4 rounded-lg">
        <div className="flex gap-4">
          <img loading="lazy" src={SearchIcon} alt="" />
          <input
            type="text"
            className="outline-none w-[550px]"
            placeholder="Search or type"
          />
        </div>
      </div>

      <div className="flex gap-5 mt-8 mb-4">
        <button
          onClick={() => setTabItem("image")}
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
          onClick={() => setTabItem("video")}
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
        <p className="text-2xl font-bold text-red-400">
          {tabItem === "image" ? "All Image Templates" : "All Video Templates"}
        </p>
      </div>

      <div>
        {tabItem === "image" ? <AllImageTemplates /> : <AllVideoTemplates />}
      </div>
    </div>
  );
}

export default Template;
