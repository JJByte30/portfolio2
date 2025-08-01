import BackgroundInterativo from "@/components/BackgroundInterativo";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-white w-full flex jusitfy-center ml-[14%]">
        <div className="z-10 w-full h-full justify-center">
          <div className="z-10 text-center flex flex-col justify-center items-center gap-2 select-none border border-white w-[50%]">
            <h2>Titulo</h2>
            <p>Texto</p>
            <p>Texto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
