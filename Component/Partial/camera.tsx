"use client";
import { useEffect, useRef, useState } from "react";
import { Aperture, SwitchCamera } from 'lucide-react';

type FacingMode = "user" | "environment";

export default function Camera({ title, onCapture, isLoading, active = true }: { title?: string, onCapture?: (blob: Blob) => void , isLoading?: boolean, active?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [facingMode, setFacingMode] = useState<FacingMode>("environment");
  const [loading, setLoading] = useState(false);

  // Fungsi pembantu mengubah base64 dari canvas menjadi Blob/File
  const base64ToBlob = (base64: string) => {
    const byteString = atob(base64.split(",")[1]);
    const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const startCamera = async () => {
    try {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };


  useEffect(() => {
    if (active) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
  }, [active, facingMode]);


  const capture = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    // Gunakan resolusi asli video agar jernih
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    onCapture?.(base64ToBlob(dataUrl));
  };

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-center text-xl font-bold">
          {title}
        </h2>
      )}

      <div className="relative overflow-hidden rounded-lg bg-black w-full">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full object-cover aspect-[3/4]"
        />

        <button className="absolute top-4 right-4 bg-black/50 p-2 rounded-md text-white" onClick={() => setFacingMode(facingMode === "user" ? "environment" : "user")}>
          <SwitchCamera />
        </button>

        <div className="flex gap-2 p-6 absolute bottom-0 left-0 right-0  bg-opacity-50 items-center justify-center">
          <button
            onClick={capture}
            disabled={isLoading}
            className=" bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-3 rounded-xl disabled:opacity-50 h-15 w-15 flex items-center justify-center"
          >
            <Aperture className="text-3xl" />
          </button>

        </div>
      </div>
    </div>
  );
}
