import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  icon: string;
  iconSecondary?: string;
}

export const Sidebar = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "/vector-9.svg",
      iconSecondary: "/vector-5.svg",
    },
    {
      name: "Records",
      path: "/records",
      icon: "/vector-12.svg",
    },
    {
      name: "Uploads",
      path: "/uploads",
      icon: "/vector-8.svg",
      iconSecondary: "/vector-6.svg",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "/vector-16.svg",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "/vector-4.svg",
      iconSecondary: "/vector-7.svg",
    },
  ];

  const handleNavigation = (item: NavItem) => {
    if (item.name === "Logout") {
      // Handle logout logic here
      console.log("Logging out...");
      // You can add logout functionality here
      return;
    }
    navigate(item.path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg flex-shrink-0 h-screen fixed left-0 top-0 z-10">
      <div className="pt-8 px-4">
        {navItems.map((item, index) => (
          <button
            key={`nav-${index}`}
            onClick={() => handleNavigation(item)}
            className={`w-full h-14 mb-3 rounded-xl transition-all duration-200 hover:bg-gray-100 ${
              isActive(item.path) ? "bg-black" : ""
            }`}
          >
            <div className="flex items-center h-full px-6">
              <div className="w-6 h-6 mr-6 relative flex-shrink-0">
                {item.name === "Dashboard" && (
                  <>
                    <img
                      className="absolute w-[9px] h-[7px] top-0.5 left-0.5"
                      alt="Vector"
                      src="/vector-9.svg"
                    />
                    <img
                      className="absolute w-[9px] h-3 top-2.5 left-0.5"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                    <img
                      className="absolute w-[9px] h-[7px] top-[15px] left-[13px]"
                      alt="Vector"
                      src="/vector-9.svg"
                    />
                    <img
                      className="absolute w-[9px] h-3 top-0.5 left-[13px]"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                  </>
                )}
                {item.name === "Records" && (
                  <img
                    className="w-[18px] h-[22px]"
                    alt="Vector"
                    src="/vector-12.svg"
                  />
                )}
                {item.name === "Uploads" && (
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-5 h-[5px] top-0 left-0"
                      alt="Vector"
                      src="/vector-8.svg"
                    />
                    <img
                      className="absolute w-5 h-4 top-1 left-0"
                      alt="Vector"
                      src="/vector-6.svg"
                    />
                  </div>
                )}
                {item.name === "Settings" && (
                  <img
                    className="w-[22px] h-[23px]"
                    alt="Vector"
                    src="/vector-16.svg"
                  />
                )}
                {item.name === "Logout" && (
                  <div className="relative w-6 h-[23px]">
                    <img
                      className="absolute w-[18px] h-[23px] top-0 left-0"
                      alt="Vector"
                      src="/vector-4.svg"
                    />
                    <img
                      className="absolute w-2.5 h-2 top-1.5 left-3.5"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                  </div>
                )}
              </div>
              <div
                className={`font-inter text-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? "font-medium text-white"
                    : "font-normal text-black"
                }`}
              >
                {item.name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};