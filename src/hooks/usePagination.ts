import { useState, useEffect } from 'react';
import { GetPaginatedMealsDTO } from "@/types/service";

const usePagination = (data: GetPaginatedMealsDTO, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    }
  }, [data, itemsPerPage]);

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const jumpToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { paginatedData, nextPage, prevPage, jumpToPage, currentPage, totalPages };
};

export default usePagination;