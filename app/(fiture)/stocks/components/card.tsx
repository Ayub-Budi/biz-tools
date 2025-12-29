"use client";

const LabelValue = ({
  label,
  value,
}: Readonly<{ label: string; value: string }>) => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-sm">{label}</p>
      <p className="font-semibold text-gray-500">{value}</p>
    </div>
  );
};

type Stock = {
  id: string;
  name: string;
  category: string;
  no_gondola: string;
};

export default function Card({stock}: Readonly<{ stock: Stock }>) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md flex flex-col gap-3">
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-bold">{stock.name}</h3>
        <div className="flex flex-col gap-1 p-2 bg-white shadow-md rounded-lg">
          <LabelValue label="ID" value={stock.id} />
          <LabelValue label="Nomor Rak" value={stock.no_gondola} />
          <LabelValue label="Category" value={stock.category} />
        </div>
      </div>
    </div>
  );
}
