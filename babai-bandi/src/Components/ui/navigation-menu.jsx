// src/components/ui/navigation-menu.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationMenu = ({ children, className }) => {
  return (
    <nav className={`flex items-center gap-6 p-4 bg-white shadow-sm ${className}`}>
      {children}
    </nav>
  );
};

export const NavigationMenuList = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-700"} hover:text-blue-500`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavigationMenu;