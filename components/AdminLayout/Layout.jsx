import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../AdminNavbar/Navbar";


const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [openTab, setOpenTab] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);

  const handleOpenBelowTab = (val) => {
    console.log(val);
    setOpenTab(val);
    setExpanded(openTab === val ? !expanded : true);
  };

  useEffect(()=>{

  },[openTab]);

  return (
    <div
      className={`grid duration-300 ${isOpenSidebar ? "grid-cols-[280px,1fr]" : "grid-cols-[0px,1fr]"} gap-0`}
    >
      {/* Sidebar Section */}
      <div>
        <Sidebar
          openTab={openTab}
          setOpenTab={setOpenTab}
          expanded={expanded}
          handleOpenBelowTab={handleOpenBelowTab}
          setExpanded={setExpanded}
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
          sidebarColor={"bg-black-300"}
        />
      </div>

      {/* Main Content Section */}
      <div>
        <Navbar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
        <div className="bg-[#f1f1f4] relative min-h-[90vh] p-[25px]">{children}</div> {/* This is where page content goes */}
      </div>
    </div>
  );
};

export default Layout;
