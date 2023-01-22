import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="max-w-screen-lg mx-auto w-full pt-12 mb-8"
      data-aos="fade-down"
    >
      <div className="flex items-center space-x-5">
        <div className="flex-1 h-px bg-white/20"></div>
        <div className="text-4xl font-bold text-primary uppercase">Gustavo</div>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>
      <div className="col-span-4 text-center flex flex-col lg:flex-row justify-between items-center mt-4">
        <p className="text-zinc-300 font-normal">
          © 2023 tavcode All rights reserved.
        </p>
        <p className="text-zinc-400 font-normal">
          Powered with{" "}
          <span className="text-red-500">
            <i className="fa-solid ml-1 mr-1 text-primary fa-heart"></i>
          </span>{" "}
          by{" "}
          <Link href="#" target="_blank" className="text-white font-medium">
            Gustavo
          </Link>
        </p>
      </div>
      <div className="flex ">
        <Link
          href="https://discord.com/users/350945523810959361"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-discord"></i>
        </Link>
        <Link
          href="https://github.com/elmergustavo"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          href="https://twitter.com/gustavo_dev_"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          href="https://twitter.com/gustavo_dev_"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-youtube"></i>
        </Link>
        <Link
          href="https://twitter.com/gustavo_dev_"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-facebook"></i>
        </Link>
        <Link
          href="https://twitter.com/gustavo_dev_"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          href="https://twitter.com/gustavo_dev_"
          target="_blank"
          className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}
