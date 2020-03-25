import classNames from "classnames";
import NavLink from "./nav-link";
import Link from "next/link";

export default ({ active }) => (
  <nav
    className={classNames(
      "transiton-all duration-200 ease-in-out fixed z-30 w-4/5 h-screen bg-white",
      !active && "transform -translate-x-full"
    )}
  >
    <div className="px-6 py-20 font-semibold leading-loose">
      <Link href="/">
        <a>
          <h1 className="mb-8 text-4xl font-bold leading-normal">PikPok</h1>
        </a>
      </Link>
      <ul className="mb-10">
        <li>
          <NavLink href="/trending">Trending</NavLink>
        </li>
        <li>
          <NavLink href="/discover">Discover</NavLink>
        </li>
      </ul>
      <ul className="mb-8">
        <li className="text-sm font-bold text-gray-400">Company</li>
        <li>
          <NavLink href="/">About</NavLink>
        </li>
        <li>
          <NavLink href="/">Newsroom</NavLink>
        </li>
        <li>
          <NavLink href="/">Contact</NavLink>
        </li>
        <li>
          <NavLink href="/">Careers</NavLink>
        </li>
      </ul>
      <ul className="mb-8">
        <li className="text-sm font-bold text-gray-400">Programs</li>
        <li>
          <NavLink href="/">PikPok for Good</NavLink>
        </li>
        <li>
          <NavLink href="/">PikPok for Devs</NavLink>
        </li>
        <li>
          <NavLink href="/">Advertise on PikPok</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
