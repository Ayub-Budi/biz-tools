import Button from "@/Component/button";
import Card from "./component/card";
export default function UsersPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Daftar User</h2>
          <p>Ini adalah halaman daftar user.</p>
        </div>
        <Button type="primary">Tambah User</Button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card user={ { id: 1, name: "John Doe", gender: "male", email: "3o6t2@example.com", role: "admin" }} />
        <Card user={ { id: 1, name: "John Doe", gender: "female", email: "3o6t2@example.com", role: "admin" }} />
        <Card user={ { id: 1, name: "John Doe", gender: "male", email: "3o6t2@example.com", role: "admin" }} />
        <Card user={ { id: 1, name: "John Doe", gender: "female", email: "3o6t2@example.com", role: "admin" }} />
        <Card user={ { id: 1, name: "John Doe", gender: "male", email: "3o6t2@example.com", role: "admin" }} />
        <Card user={ { id: 1, name: "John Doe", gender: "female", email: "3o6t2@example.com", role: "admin" }} />
      </div>
    </div>
  );
}
