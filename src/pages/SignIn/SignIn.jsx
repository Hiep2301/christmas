import { useState } from "react";
import { Link } from "react-router-dom";
import SantaClaus from "../../assets/santa-claus.png";
import GoogleLogo from "../../assets/LogoGoogle.svg";
import FacebookLogo from "../../assets/LogoFacebook.svg";
import BgAuth from "../../assets/bg-auth.png";
import EyeIcon from "../../assets/EyeIcon.svg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <img
          loading="lazy"
          srcSet={BgAuth}
          className="absolute h-full w-full object-contain top-0 sm:object-cover object-top"
        />
        <div className="relative flex items-center max-md:flex-col">
          <div>
            <img loading="lazy" srcSet={SantaClaus} />
          </div>
          <div>
            <div className="bg-white flex flex-col p-5 rounded-xl">
              <div className="text-gray-900 text-3xl font-semibold">
                Get’s started.
              </div>
              <div className="text-lg font-medium mt-4">
                <span className=" text-gray-500">
                  Don’t have an account? &nbsp;
                </span>
                <Link to={"/signup"} className="font-medium text-lime-800">
                  Sign up
                </Link>
              </div>
              <div className="flex justify-between gap-3.5 mt-12 max-md:flex-wrap max-md:mt-10">
                <div className="border border-[color:var(--5,#E6E8EC)] bg-white p-5 rounded-lg">
                  <div className="flex justify-between gap-3 items-center">
                    <img loading="lazy" src={GoogleLogo} />
                    <div className="text-gray-900 text-base font-medium">
                      Sign in with Google
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500 p-5 rounded-lg">
                  <div className="flex justify-between gap-3 items-center">
                    <img loading="lazy" src={FacebookLogo} />
                    <div className="text-white text-base font-medium">
                      Sign in with Facebook
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3.5 mt-6 max-md:justify-center">
                <div className="bg-gray-200 flex lg:w-[230px] h-px my-auto" />
                <div className="text-gray-500 text-lg">or</div>
                <div className="bg-gray-200 flex lg:w-[230px] h-px my-auto" />
              </div>

              <div className="mx-5 mt-6 max-md:mx-2.5">
                <div className="text-gray-900 text-base font-medium mb-2">
                  Email
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email@gmail.com"
                  className="text-gray-500 text-base font-light border w-full pl-5 pr-12 py-4 rounded-xl border-solid border-gray-400"
                />
              </div>

              <div className="mx-5 mt-6 max-md:mx-2.5">
                <div className="text-gray-900 text-base font-medium mb-2">
                  Password
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="**********"
                    className="text-gray-500 text-base font-light border w-full pl-5 pr-12 py-4 rounded-xl border-solid border-gray-400"
                  />
                  <img
                    loading="lazy"
                    src={EyeIcon}
                    className="absolute right-4 bottom-1/2 translate-y-1/2"
                  />
                </div>
              </div>

              <div className="mx-2.5 flex items-center justify-between gap-5 mt-11 max-md:flex-wrap max-md:mt-10">
                <div className="flex justify-between gap-3.5">
                  <input
                    type="checkbox"
                    className="rounded border-[color:var(--4,#B1B5C3)] flex w-4 h-4 my-auto"
                  />
                  <div className="text-gray-500 text-base font-medium">
                    Remember me
                  </div>
                </div>
                <Link
                  to={"/forgot-password"}
                  className="text-lime-800 text-base font-medium"
                >
                  Forgot your password?
                </Link>
              </div>

              <button className="text-rose-100 text-xl text-center font-semibold bg-red-400 justify-center items-center mt-[30px] px-16 py-5 rounded-xl mx-5 max-md:mx-2.5">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
