import React, { useEffect, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StoreIcon from "@mui/icons-material/Store";
import { useRouter } from "next/router";

function Sidebar({
  openTab,
  handleOpenBelowTab,
  expanded,
  setExpanded,
  isOpenSidebar,
  setIsOpenSidebar,
  setOpenTab,
  sidebarColor,
}) {
  const router = useRouter();

  // Define the tabsObject structure
  const tabsObject = {
    Dashboard: [],
    "Product Management": ["All Products", "Add New Product"],
    "Blog Management": ["All Blogs", "Add New Blog"],
    Banner: ["All Banner", "Add New Banner"],
    "User Management": ["All Users", "Add New User"],
  };

  // Define MUI icons for each menu
  const tabIcons = {
    Dashboard: WidgetsIcon,
    "User Management": PeopleIcon,
    "Blog Management": ArticleIcon,
    Banner: PhotoLibraryIcon,
    "Product Management": StoreIcon,
  };

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const tab = path.length > 4 && path[path.length - 2]
      ? path[path.length - 2].toLowerCase().replaceAll(" ", "")
      : path[path.length - 1].toLowerCase().replaceAll(" ", "");
    setOpenTab(tab);
  }, []);

  return (
    <div>
      <div
        className={`${sidebarColor} z-20 transition-[left] duration-300 ${
          isOpenSidebar ? "left-0 fixed" : "fixed left-[-280px]"
        } w-[280px] h-[100vh] overflow-y-scroll shadow-md`}
      >
        <div className="h-[80px] sticky z-10 top-0 py-[5px] px-[25px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[45px] rounded-full" src="/images/logom.png" alt="" />
            <h1 className="font-[500] text-[32px]">Yoga</h1>
          </div>
          <MenuOpenIcon
            style={{ fontSize: "30px", color: "grey", cursor: "pointer" }}
            onClick={() => setIsOpenSidebar(false)}
          />
        </div>

        <div className="py-[10px]">
          <h1 className="text-[#c0b9b9] font-[500] px-[20px] text-[14px]">MAIN HOME</h1>
        </div>

        {Object.keys(tabsObject).map((menu, index) => {
          const IconComponent = tabIcons[menu] || WidgetsIcon;
          return (
            <div key={menu}>
              <div
                className={`${
                  openTab === menu.toLowerCase().replaceAll(" ", "")
                    ? "border-l-[5px] border-[#3131fb]"
                    : ""
                }`}
              >
                <div
                  className={`rounded-[10px] hover:bg-[#e4e4ff] w-[240px] mx-auto px-[10px] flex justify-between py-[12px] ${
                    openTab === menu.toLowerCase().replaceAll(" ", "")
                      ? "bg-[#e4e4ff]"
                      : ""
                  }`}
                  onClick={() => {
                    router.push(
                      `/admin/dashboard/${
                        index !== 0 ? menu.toLowerCase().replaceAll(" ", "") : ""
                      }`
                    );
                    handleOpenBelowTab(menu.toLowerCase().replaceAll(" ", ""));
                  }}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent
                      style={{
                        color: openTab === menu.toLowerCase().replaceAll(" ", "")
                          ? "#3131fb"
                          : "",
                      }}
                    />
                    <li
                      className={`list-none font-[500] text-[16px] ${
                        openTab === menu.toLowerCase().replaceAll(" ", "")
                          ? "text-[#3131fb]"
                          : ""
                      }`}
                    >
                      {menu}
                    </li>
                  </div>
                  {tabsObject[menu].length > 0 && (
                    <KeyboardArrowDownIcon
                      sx={{
                        color: openTab === menu.toLowerCase().replaceAll(" ", "")
                          ? "#3131fb"
                          : "black",
                      }}
                    />
                  )}
                </div>
              </div>

              {tabsObject[menu].length > 0 && (
                <div
                  className={`w-[240px] mx-auto ${
                    expanded && openTab === menu.toLowerCase().replaceAll(" ", "")
                      ? "max-h-[1000px] duration-700"
                      : "max-h-0 duration-300"
                  } overflow-hidden`}
                >
                  {tabsObject[menu].map((subItem , index) => (
                    <a
                      key={subItem}
                      href={`/admin/dashboard/${menu
                        .toLowerCase()
                        .replaceAll(" ", "")}/${index!==0 ? subItem
                        .toLowerCase()
                        .replaceAll(" ", "") : ""}`}
                      className="block mt-1 list-none py-[6px] text-[14px] px-[30px] text-[#505050] font-[500] cursor-pointer hover:bg-[#e4e4ff]"
                    >
                      {subItem}
                      {subItem.includes("Add") && <AddIcon />}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;