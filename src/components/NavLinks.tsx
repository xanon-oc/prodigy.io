import Link from "next/link";
import React from "react";

const NavLinkSrc = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Market",
    link: "/market",
  },
  {
    title: "Auction",
    link: "/auction",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
const NavLinks = () => {
  return (
    <div className="hidden md:block ">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm">
          {NavLinkSrc.map((linkData, index) => (
            <Link
              key={index}
              className="text-white transition hover:text-green-400"
              href={linkData.link}
            >
              {linkData.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
