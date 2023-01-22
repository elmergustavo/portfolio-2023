import Link from "next/link";
export default function Header() {
  return (
    <div className="justify-between w-full items-center text-center mx-auto flex mt-6">
      <div className="hidden md:block text-3xl font-bold text-white">
        Gustavo<span className="text-primary text-2xl">.</span>
        <span className="text-white text-[19px]"></span>
      </div>
      <div className="flex space-x-8">
        <Link href="/">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/projects">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">
            Projects
          </div>
        </Link>
        <Link href="/certifications">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">
            Certifications
          </div>
        </Link>
      </div>
      <div className="flex space-x-2">
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
      </div>
    </div>
  );
}
