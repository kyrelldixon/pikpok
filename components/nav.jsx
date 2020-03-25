import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Slider } from "react-burgers";
import { IoIosCloudUpload } from "react-icons/io";
import classNames from "classnames";

const NavLink = ({ href, isActive, className, children }) => {
  return (
    <Link href={href}>
      <a
        className={classNames(
          "transition duration-300 ease-in-out text-sm font-semibold hover:border-b-2 hover:border-neon",
          isActive && "border-b-2 border-neon",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default ({ isOpen, toggleOpen }) => {
  const { pathname } = useRouter();

  return (
    <nav className="fixed z-10 w-full py-3 bg-white border-b border-gray-300">
      <div className="flex items-center justify-between pl-4 pr-3 pr-6 lg:pl-6">
        <div className="relative z-50">
          <Slider
            width={21}
            lineHeight={2}
            lineSpacing={5}
            active={isOpen}
            onClick={toggleOpen}
            padding="0px"
          />
          <Link href="/">
            <a className="ml-4 text-2xl font-bold lg:ml-6 lg:text-3xl">
              PikPok
            </a>
          </Link>
        </div>
        {pathname === "/" ? (
          <Link href="/trending">
            <a className="px-2 py-1 text-sm font-semibold text-white rounded-sm bg-neon lg:py-2 lg:text-base">
              Watch now
            </a>
          </Link>
        ) : (
          <div className="flex">
            <ul className="flex">
              <li className="lg:mr-8">
                <NavLink href="/trending" isActive={pathname === "/trending"}>
                  Trending
                </NavLink>
              </li>
              <li className="hidden lg:block lg:mr-8">
                <NavLink href="/discover" isActive={pathname === "/discover"}>
                  Discover
                </NavLink>
              </li>
            </ul>
            <button className="hidden text-3xl lg:block">
              <IoIosCloudUpload />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
