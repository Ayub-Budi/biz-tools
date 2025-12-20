"use client";
import { useEffect, useRef, useState } from "react";

type FacingMode = "user" | "environment";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [imgData, setImgData] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<FacingMode>("user");

  const startCamera = async () => {
    try {
      // stop kamera lama
      streamRef.current?.getTracks().forEach((t) => t.stop());

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        await videoRef.current.play();
      }
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [facingMode]);

  const capture = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0);
    setImgData(canvas.toDataURL("image/png"));
  };

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  return (
    <div className="space-y-3">
      <h2 className="font-bold">Live Camera (Mobile Ready)</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full rounded"
      />

      <div className="flex gap-2">
        <button
          onClick={capture}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Capture
        </button>

        <button
          onClick={switchCamera}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Switch Camera
        </button>
      </div>

      {imgData && (
        <img src={imgData} alt="capture" className="w-full rounded" />
      )}
    </div>
  );
}
