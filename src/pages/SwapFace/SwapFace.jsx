import UploadImageIcon from "../../assets/UploadImageIcon.svg";
import DirectRightIcon from "../../assets/DirectRightIcon.svg";
import { Link } from "react-router-dom";

function SwapFace() {
  return (
    <div className="w-full h-full">
      <div className="mb-4">
        <p className="text-2xl font-bold text-red-400">Upload your face</p>
      </div>

      <div className="w-full bg-white rounded-md">
        <div className="flex justify-center p-10 gap-28">
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-md">
            <img src={UploadImageIcon} alt="" />
            <p className="text-red-400">Upload Image file PNG, JPG,..</p>
          </div>

          <div>
            <p className="mb-1 text-sm text-slate-500">Download image</p>
            <p className="mb-8 text-xl font-semibold text-red-400">
              Your image need to move.....
            </p>
            <button className="px-5 py-3 text-white bg-red-400 rounded-md">
              Upload Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="w-2/5">
          <img
            className="w-full rounded-md"
            src="https://placehold.co/250x250"
            alt=""
          />
        </div>

        <img src={DirectRightIcon} alt="" />

        <div className="w-2/5">
          <img
            className="w-full rounded-md"
            src="https://placehold.co/250x250"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="px-5 py-3 text-white bg-red-400 rounded-md">
          Download
        </button>
        <Link
          to={"/all-details?type=image"}
          className="text-lg font-semibold text-red-400"
        >
          Go to Detail {">"}
        </Link>
      </div>
    </div>
  );
}

export default SwapFace;
