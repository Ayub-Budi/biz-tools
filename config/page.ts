import type { PageConfig } from "@/types/config/page";

export const pageConfigMap: Record<string, PageConfig> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Ringkasan aplikasi",
  },

  "/users": {
    title: "User",
    subtitle: "Manajemen pengguna",
  },

  "/stocks": {
    title: "Stocks",
    subtitle: "Manajemen stocks",
  },
  "/stocks/add": {
    title: "Stocks",
    subtitle: "Manajemen stocks",
  },
  "/master-data": {
    title: "Master Data",
    subtitle: "Manajemen master data",
  },
};