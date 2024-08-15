"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import { menuLinks } from "@/utils";
import { routes } from "@/routes";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={routes.home()}>Logo</Link>
      </div>
      <div className={styles.containerLink}>
        {menuLinks.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            className={`${styles.link} ${
              menu.href === pathname && styles.active
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
