import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen bg-app">
        <div className="flex h-full gap-10 px-5 py-5">
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="w-full app-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
