import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

function App() {
  return (
    <>
      <div className="h-full bg-cover bg-app">
        <div className="flex h-screen gap-10 p-5">
          <div className="sidebar-container">
            <SideBar />
          </div>

          <div className="w-full h-full app-content">
            <PerfectScrollbar>
              <div className="pr-10">
                <Outlet />
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
