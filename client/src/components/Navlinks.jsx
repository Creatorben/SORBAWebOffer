import React from "react";
import { Dashboardnavigation } from "../utils/links.jsx";
import { NavLink } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const NavLinks = ({ setSidebarOpen }) => {
  const navItems = Dashboardnavigation;

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  end
                  onClick={() => setSidebarOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={
                          isActive
                            ? "bg-gray-50 text-newport-900 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            : "text-gray-700 hover:text-newport-900 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        }
                      >
                        <span
                          className={
                            isActive
                              ? "text-newport-900 h-6 w-6 shrink-0"
                              : "text-gray-400 group-hover:text-newport-900 h-6 w-6 shrink-0"
                          }
                          aria-hidden="true"
                        >
                          {item.icon}
                        </span>
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-auto">
          <NavLink to="einstellungen" end onClick={() => setSidebarOpen(false)}>
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "bg-gray-50 text-newport-900 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      : "text-gray-700 hover:text-newport-900 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  }
                >
                  <Cog6ToothIcon
                    className={
                      isActive
                        ? "text-newport-900 h-6 w-6 shrink-0"
                        : "text-gray-400 group-hover:text-newport-900 h-6 w-6 shrink-0"
                    }
                    aria-hidden="true"
                  />
                  Einstellungen
                </span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
