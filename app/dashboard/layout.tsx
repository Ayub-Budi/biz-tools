import type { Metadata } from "next";
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
      <main className="flex flex-col min-h-screen bg-blue-100 p-4 gap-3">
        <nav className="flex">
          <h1 className="text-2xl font-bold">{metadata.title as string}</h1>
        </nav>
        <div className="flex-1 bg-white rounded-2xl min-h-full w-full flex">
          <div className="w-64 border-r p-4"></div>
          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
