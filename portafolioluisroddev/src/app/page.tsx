import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 gap-8 items-center sm:items-start">
        <div>
          <Image width={300} height={200} src="/images/meBigSmileWithDarkGlasess.webp" alt="me-little-smile" />
        </div>
        <div className="flex items-center h-full">
          <span className="text-xl text-white">Soy Luis, <strong> Desarrollador Web</strong></span>
        </div>
      </main>
    </div>
  );
}
