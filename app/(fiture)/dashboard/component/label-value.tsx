"use client";
import Link from "next/link";
export default function LabelValue({
  label,
  value,
}: Readonly<{
  label: string;
  value: string;
}>) {
  return (
    <div className="p-3 bg-blue-100 rounded-xl flex flex-col gap-3">
      <p className="font-semibold">{label}</p>
      <p className="text-gray-500 text-3xl">{value}</p>
      <hr className="border-t border-blue-200" />
      <Link href="#" className="text-blue-500 text-sm font-medium underline">
        View All
      </Link>
    </div>
  );
}