import Link from "next/link";
// import Image from "next/image";
import Projects from "@/lib/certification.json";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects" className="mt-20" data-aos="fade-right">
      <Head>
        <title>certifications | Gustavo Portfolio</title>
      </Head>
      <div id="title" className="relative">
        <h2 className="text-5xl ml-28  pointer-events-none absolute left-24 -top-6 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">
          Certifications
        </h2>
        <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4">
          certifications
        </h2>
      </div>
      <div id="body">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-4 items-center mt-4 ">
          {Projects.data.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              className="cursor-pointer  bg-[#23272a] p-4 rounded-lg hover:bg-zinc-400/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200"
            >
              <img
                src={item.bg}
                alt={item.name}
                width={300}
                height={300}
                className="w-full md:w-auto shadow-lg rounded-lg"
              />
              <div className="mt-4 h-24">
                <p className="font-semibold text-xl">{item.name}</p>
                <p className="text-sm max-h-24 overflow-auto font-normal">
                  {item.text}
                </p>
              </div>
              <p className="text-xs italic mt-6">
                <i className="fal fa-arrow-up-right-from-square mr-1" />
                {item.url}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
