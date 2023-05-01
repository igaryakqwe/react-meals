import React from 'react';
import {Box, Pagination, Typography} from "@mui/material";
import * as styles from './MainPage.styles';
import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import usePagination from "@/hooks/usePagination";
import Loader from "@/components/common/loader/Loader";
import Error from "@/components/common/error";
import Link from "next/link";

const MainPage = () => {

  const { data, isLoading, isError } = useQuery(
    "meals",
    MealsService.getAllMeals,
    {
      refetchOnWindowFocus: false,
    }
  );

  const itemsPerPage = 9;

  const { paginatedData, jumpToPage, currentPage, totalPages } =
    usePagination(data?.meals, itemsPerPage);

  const handlePageChange = (event: any, page: number) => jumpToPage(page)

  if (isLoading) return (
    <Loader />
  );

  if (isError) return (
    <Error />
  );

  return (
    <Box sx={styles.pageWrapper}>
      <Box sx={styles.cardWrapper}>
        {paginatedData?.map((meal) => (
          <Box sx={styles.mealCard} key={meal.strMeal}>
            <Link href={`/${meal.idMeal}`} style={styles.mealCardLink}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={styles.image} />
              <Box sx={styles.mealCardBlock}>
                <Typography sx={styles.mealCardText?.h5} variant="h5">{meal.strMeal}</Typography>
                <Typography sx={styles.mealCardText} variant="h6">{meal.strCategory}</Typography>
                <Typography sx={styles.mealCardText} variant="h6">{meal?.strTags}</Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
      <Box>
        <Pagination
          sx={styles.pagination}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
        />
      </Box>
    </Box>
  );
};

export default MainPage;
