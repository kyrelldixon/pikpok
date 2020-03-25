import React from "react";
import Link from "next/link";

export default () => {
  return (
    <footer className="text-white bg-black">
      <div className="flex flex-col items-center py-12 border-b border-gray-400">
        <h2 className="mb-6 text-2xl font-bold">Download now</h2>
        <img
          className="w-48"
          src="/app-download-trio.webp"
          alt="app download icons"
        />
      </div>
      <div className="flex flex-col items-center py-12 text-center">
        <Link href="/">
          <h2 className="mb-8 text-4xl font-bold cursor-pointer">PikPok</h2>
        </Link>
        <nav className="text-sm leading-loose">
          <ul className="mb-8 text-gray-300">
            <li className="font-bold text-white">Company</li>
            <li>
              <Link href="/">
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Newsroom</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Careers</a>
              </Link>
            </li>
          </ul>
          <ul className="mb-8 text-gray-300">
            <li className="font-bold text-white">Programs</li>
            <li>
              <Link href="/">
                <a className="hover:underline">PikPok for Good</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">PikPok for Devs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Advertise on PikPok</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
