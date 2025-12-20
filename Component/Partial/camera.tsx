"use client";
import { useEffect, useRef, useState } from "react";

type FacingMode = "user" | "environment";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [imgData, setImgData] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<FacingMode>("environment");
  const [result, setResult] = useState("");
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

  useEffect(() => {
    startCamera();
    return () => streamRef.current?.getTracks().forEach((t) => t.stop());
  }, [facingMode]);

  const handleAnalyze = async (base64Image: string) => {
    setLoading(true);
    setResult("");
    try {
      const formData = new FormData();
      const imageBlob = base64ToBlob(base64Image);
      formData.append("image", imageBlob, "capture.png");

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.text || "Gagal mendapatkan hasil.");
    } catch (err) {
      setResult("Terjadi kesalahan koneksi.");
    } finally {
      setLoading(false);
    }
  };

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
    setImgData(dataUrl);
    handleAnalyze(dataUrl);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold text-center">Apa yang ada di foto ini?</h2>

      <div className="relative overflow-hidden rounded-lg bg-black aspect-video">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={capture}
          disabled={loading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Menganalisa..." : "Ambil & Analisa Foto"}
        </button>
        
        <button
          onClick={() => setFacingMode(p => p === "user" ? "environment" : "user")}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          🔄
        </button>
      </div>

      {result && (
        <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-bold mb-1">Hasil Analisis:</h3>
          <p className="text-gray-700 leading-relaxed">{result}</p>
        </div>
      )}

      {imgData && !loading && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Foto Terakhir:</p>
          <img src={imgData} alt="capture" className="w-32 h-auto rounded border" />
        </div>
      )}
    </div>
  );
}