import { Link } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon.svg";

function Home() {
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

      <div className="mt-8 mb-4">
        <p className="text-2xl font-bold text-red-400">Images</p>
        <div className="flex items-center justify-between">
          <p className="mt-2 mb-2 text-xl font-semibold text-lime-700">
            Swap Image
          </p>
          <Link
            to={"/template"}
            className="mt-2 mb-2 text-base font-semibold text-lime-700"
          >
            View...
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>

          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>

          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-bold text-red-400">Videos</p>
        <div className="flex items-center justify-between">
          <p className="mt-2 mb-2 text-xl font-semibold text-lime-700">
            Swap Video
          </p>
          <Link
            to={"/template"}
            className="mt-2 mb-2 text-base font-semibold text-lime-700"
          >
            View...
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>

          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>

          <div className="w-[30%] overflow-hidden rounded-md">
            <div className="w-full h-2/3">
              <img
                className="object-cover w-full h-full"
                src="https://placehold.co/250x250"
                alt=""
              />
            </div>
            <div className="bg-white rounded-es-md rounded-ee-md">
              <div className="p-3">
                <p className="text-base text-lime-700">Chistmas day</p>
                <p className="text-xl font-bold text-lime-700">
                  Baby and family
                </p>
                <p className="text-sm text-slate-500">50 Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
