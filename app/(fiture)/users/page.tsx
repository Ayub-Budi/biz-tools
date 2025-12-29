"use client";
import { useState } from "react";
import Button from "@/components/button";
import Card from "./component/card";
import Modal from "@/components/partial/modal";
import Input from "@/components/input";

export default function UsersPage() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Daftar User</h2>
          <p>Ini adalah halaman daftar user.</p>
        </div>
        <Button type="primary" onClick={() => setShowModalAdd(true)}>
          Tambah User
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "male",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "female",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "male",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "female",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "male",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
        <Card
          user={{
            id: 1,
            name: "John Doe",
            gender: "female",
            email: "3o6t2@example.com",
            role: "admin",
          }}
        />
      </div>
      <Modal
        title="Tambah User"
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      >
        <form className="flex flex-col gap-3" action="">
          <Input label="Nama" type="text" placeholder="Masukkan nama" />
          <Input label="Email" type="email" placeholder="Masukkan email" />
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
          />
          <Input label="Gender" type="text" placeholder="Masukkan gender" />
          <Input label="Role" type="text" placeholder="Masukkan role" />
          <Button submit type="primary" className="w-full">
            Tambah User
          </Button>
        </form>
      </Modal>
    </div>
  );
}
