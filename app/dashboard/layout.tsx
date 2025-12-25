import type { Metadata } from "next";
import Sidebar from "@/Component/layout/sidebar";

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
      <main className="flex flex-col h-screen bg-gray-100 p-4 gap-3">
        <Sidebar>
          aaaa
        </Sidebar>
      </main>
    </>
  );
}
