'use client';
import { useState } from "react";
import Camera from "@/Component/partial/camera";
import Modal from "@/Component/partial/modal";
export default function AddPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-80">
        <button onClick={() => setIsOpen(true)}>Open Camera</button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <div className="max-w-md">

        <Camera active={isOpen} /> 
        </div>
      </Modal>
    </div>
  );
}
