import DirectRightIcon from "../../assets/DirectRightIcon.svg";
import video from "../../assets/Snaptik.app_7258853707054451973.mp4";
import { Link } from "react-router-dom";

function SwapVideo() {
  return (
    <div className="w-full h-full">
      <div className="mb-4">
        <p className="text-2xl font-bold text-red-400">Swap Videos</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-2/5">
          <video className="w-full h-auto rounded-lg" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <img src={DirectRightIcon} alt="" />

        <div className="w-2/5">
          <video className="w-full h-auto rounded-lg" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="px-5 py-3 text-white bg-red-400 rounded-md">
          Download
        </button>
        <Link
          to={"/all-details?type=video"}
          className="text-lg font-semibold text-red-400"
        >
          Go to Detail {">"}
        </Link>
      </div>
    </div>
  );
}

export default SwapVideo;
