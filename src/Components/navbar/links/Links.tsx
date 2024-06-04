"use client";

import Link from "next/link";
import styles from "./Links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  //TODO: hamburger menu for mobile screens

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>
      <Image
        className={styles.menuBtn}
        src="/menu.png"
        alt="mobile menu"
        width={30}
        height={30}
        onClick={() => setMobileMenu((prev) => !prev)}
      />
      {mobileMenu && (
        <div className={styles.mobileLinks}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Links;
