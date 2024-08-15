import Link from "next/link";
import React from "react";

import styles from "./index.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}
export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div className={styles.pagination}>
      <Link href={`?page=${currentPage - 1}`} className={`${styles.button}`}>
        Previous
      </Link>

      {pageNumbers.map((pageNumber) => (
        <Link
          key={pageNumber}
          href={`?page=${pageNumber}`}
          className={`${styles.pageNumber} ${
            pageNumber === currentPage ? styles.active : styles.default
          }`}
        >
          {pageNumber}
        </Link>
      ))}

      <Link href={`?page=${currentPage + 1}`} className={`${styles.button}`}>
        Next
      </Link>
    </div>
  );
};
