"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DynamicIcon from "@/components/partial/icon";

export default function SidebarItem({
  href,
  title,
  icon,
}: Readonly<{
  href: string;
  title: string;
  icon: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className="flex gap-2 pl-4 h-8 items-center relative">
      <div
        className={`absolute left-0 w-3 h-full bg-blue-500 rounded-l-md ${
          isActive ? "block" : "hidden"
        }`}
      ></div>
      <DynamicIcon name={icon as string} />
      <span>{title}</span>
    </Link>
  );
}
