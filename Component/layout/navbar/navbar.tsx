export default function DashboardLayout() {
  return (
    <div className="bg-white flex gap-3 h-14 rounded-xl shadow-lg items-center justify-end px-4">
      <div>
        <p className="font-bold text-xl">Navbar</p>
        <p className="text-xs text-gray-500">
          Dashboard
        </p>
      </div>
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>
  );
}
