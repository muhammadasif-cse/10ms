"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useMenus } from "./constant";

export default function Items() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menus = useMenus();

  return (
    <div className="hidden xl:block">
      <div className="ml-10 flex items-baseline text-sm space-x-4">
        {menus.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveMenu(item.submenu ? index : null)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className="flex whitespace-nowrap cursor-pointer items-center justify-center gap-0.5 font-medium text-secondary hover:text-primary transition-all duration-300"
            >
              {item.title}
              {item.submenu && (
                <ChevronDown
                  className={`w-5 h-5 p-[0.5px] shrink-0 transition-transform duration-300 ${
                    activeMenu === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>
            {item.submenu && (
              <div
                className={`absolute z-50 top-full left-0 mt-2 w-56 bg-white rounded-lg shadow border border-gray-200 transition-all duration-300 transform ${
                  activeMenu === index
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <div className="py-2 max-h-[60vh] overflow-auto">
                  {item.submenu.map((subitem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subitem.href}
                      className="block px-4 py-2 text-secondary hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
