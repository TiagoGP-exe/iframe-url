"use client";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const url = useSearchParams().get("url");

  if (url) {
    return <iframe className="min-h-screen w-full" src={url} allowFullScreen />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-6xl font-bold text-center">IFRAME</h1>

        <input
          className="w-full max-w-lg p-2 my-4 text-sm text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-black"
          placeholder="https://www.youtube.com/embed/..."
        />
      </div>
    </main>
  );
}
