import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import Nav from "./nav";
import Footer from "./footer";
import SideNav from "./side-nav";

const Mask = ({ active, node }) => (
  <div
    ref={node}
    className={classNames(
      "transiton-all duration-300 ease-in-out absolute z-20 w-full h-screen bg-black opacity-50",
      active ? "visible" : "invisible"
    )}
  ></div>
);

export default ({ children }) => {
  const node = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    close();
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <Nav isOpen={isOpen} toggleOpen={toggleOpen} />
      <SideNav active={isOpen} />
      <Mask active={isOpen} node={node} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
