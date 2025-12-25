import type { Metadata } from "next";
import Sidebar from "@/Component/layout/sidebar";
import Navbar from "@/Component/layout/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the dashboard layout",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex h-screen bg-gray-100 p-4 gap-3">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-3">
          <Navbar />
          <div className="flex-1 bg-white rounded-xl p-4 shadow-lg overflow-auto">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
