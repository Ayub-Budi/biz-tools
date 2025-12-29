"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DynamicIcon from "@/components/partial/icon";
import Button from "@/components/button";

type User = {
  id: number;
  name: string;
  gender: "male" | "female";
  email: string;
  role: string;
};
export default function UserCard({ user }: Readonly<{ user: User }>) {
  return (
    <div className="p-4 flex flex-col gap-3 bg-blue-50 rounded-lg shadow-md">
      <div className="flex gap-3">
        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-bold">{user.name}</h3>
          <div
            className={`flex items-center w-fit gap-3 p-1 rounded-lg ${
              user.gender === "male" ? "bg-blue-200" : "bg-pink-200"
            }`}
          >
            <DynamicIcon
              name={user.gender === "male" ? "Mars" : "Venus"}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
      <div className="p-3 bg-white shadow-md rounded-lg">
        <div className="flex justify-between">
          <p className="font-semibold">ID</p>
          <p className="font-semibold text-gray-500">{user.id}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Role</p>
          <p className="font-semibold text-gray-500">{user.role}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Email</p>
          <p className="font-semibold text-gray-500">{user.email}</p>
        </div>
      </div>
      <Button outline type="primary">
        Detail
      </Button>
    </div>
  );
}
