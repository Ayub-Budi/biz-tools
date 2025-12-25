"use client";
import { useState } from "react";
import SidebarItem from "./item";
import { sidebarMenus } from "./sidebar.config";


export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white flex flex-col w-75 h-full p-3 rounded-xl shadow-lg">
      <div className="flex gap-3 items-center mb-6">
        <p className="font-bold text-xl">
          Sidebar Header
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">
          Menu
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {sidebarMenus.map((menu) => (
            <SidebarItem            
              key={menu.href}
              href={menu.href}
              title={menu.label}
              icon={menu.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}