import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

export default ({ href, className, children }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={classNames(
          "transition duration-300 ease-in-out hover:border-b-2 hover:border-neon",
          isActive && "border-b-2 border-neon",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};
