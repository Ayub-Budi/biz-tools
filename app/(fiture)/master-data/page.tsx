import Button from "@/Component/button";
import Icon from "@/Component/partial/icon";

const Card = ({ name, desc }: Readonly<{ name: string; desc: string }>) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md relative">
      <button className="absolute top-2 right-2">
        <Icon name="Trash2" className="w-6 h-6 text-red-500" />
      </button>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};
export default function MasterDataPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Daftar Katagori</h2>
            <p>Ini adalah halaman daftar kategori.</p>
          </div>
          <Button type="primary">Tambah Kategori</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
          <Card name="Kategori 1" desc="Deskripsi kategori 1" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Daftar Gondola/Rak</h2>
            <p>Ini adalah halaman daftar gondola/rak.</p>
          </div>
          <Button type="primary">Tambah Gondola/Rak</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
          <Card name="Gondola/Rak 1" desc="Deskripsi gondola/rak 1" />
        </div>
      </div>
    </div>
  );
}
