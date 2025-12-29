"use client";
import Button from "@/component/button";
import Card from "./components/card";
import { useState } from "react";
import Modal from "@/component/partial/modal";
import Input from "@/component/input";
import Camera from "@/component/partial/camera";
import Icon from "@/component/partial/icon";

export default function StokPage() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Daftar Stock</h2>
          <p>Ini adalah halaman daftar stock.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button type="primary" onClick={() => setShowModalAdd(true)}>
            Tambah Stock
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
        <Card
          stock={{
            id: "1",
            name: "Stock 1",
            category: "Category 1",
            no_gondola: "A1",
          }}
        />
      </div>

      <Modal
        title="tambah stok"
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      >
        <div className="flex flex-col gap-3">
          <Input label="ID Stock" placeholder="ID Stock" />
          <Input label="Nama Stock" placeholder="Nama Stock" />
          <Input label="Category Stock" placeholder="Category Stock" />
          <Input label="Nomor Rak" placeholder="Nomor Rak" />
          <button
            className="bg-blue-500 text-white rounded-full overflow-hidden relative p-1 cursor-pointer"
            onClick={() => setShowSuggest(true)}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full aspect-square animate-spin bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
            <div className="relative z-10 w-full h-full bg-black rounded-full p-2">
              suggest stock
            </div>
          </button>
        </div>
        {showSuggest && (
          <div className="fixed inset-0 bg-white px-3 py-6 flex flex-col gap-6 items-center z-20">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex items-center justify-end w-full">
                <button onClick={() => setShowSuggest(false)}>
                  <Icon name="CircleX" />
                </button>
              </div>
              <p className="text-2xl font-bold">
                Ambil foto dan lihat keajaiban
              </p>
            </div>
            <div className="max-w-120">
              <Camera active={showSuggest} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
