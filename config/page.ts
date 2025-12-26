import type { PageConfig } from "@/types/config/page";

export const pageConfigMap: Record<string, PageConfig> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Ringkasan aplikasi",
    icon: "dashboard",
    showInSidebar: true,
  },

  "/users": {
    title: "User",
    subtitle: "Manajemen pengguna",
    icon: "user",
    showInSidebar: true,
  },

  "/settings": {
    title: "Settings",
    subtitle: "Pengaturan sistem",
    icon: "settings",
    showInSidebar: true,
  },
};