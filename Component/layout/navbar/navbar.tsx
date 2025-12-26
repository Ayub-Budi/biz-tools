"use client";
import { pageConfigMap } from "@/config/page";
import { usePathname } from "next/navigation";
import Icon from "@/Component/partial/icon";
export default function DashboardLayout() {
  const pathname = usePathname();
  const pageConfig = pageConfigMap[pathname];
  return (
    <div className="bg-white flex gap-3 h-14 rounded-xl shadow-lg items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button onClick={() => history.back()} className="cursor-pointer">
          <Icon name="ArrowLeft" className="w-6 h-6" />
        </button>
        <p className="font-bold text-xl">{pageConfig.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <p className="font-bold text-xl">Navbar</p>
          <p className="text-xs text-gray-500">Dashboard</p>
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );

}
