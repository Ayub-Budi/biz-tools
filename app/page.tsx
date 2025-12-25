"use client";
import Image from "next/image";
import Camera from "../Component/partial/camera";
import Analyze from "@/Component/analyze";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<Blob | null>(null);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Camera title="Camera" onCapture={setImage} />
        {image && (
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4 text-center">Captured Image:</h2>
            <Image
              src={URL.createObjectURL(image)}
              alt="Captured"
              width={240}
              height={320}
              className="rounded border"
            />
          </div>
        )} */}

        <Analyze />
      </main>
    </div>
  );
}
