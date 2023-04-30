import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {
  Box,
  CircularProgress, Pagination,
  Typography
} from "@mui/material";
import React, {useState} from "react";
import * as styles from './Meals.styles';
import usePagination from "@/hooks/usePagination";


const Meals = () => {

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

  const handlePageChange = (event, page) => jumpToPage(page)

  if (isLoading) return (
    <Box sx={styles.pageWrapper}>
      <CircularProgress />
    </Box>
  );

  if (isError) return (
    <Box sx={styles.pageWrapper}>
      <Typography sx={styles.mealCardText?.header} variant="h4">ERROR</Typography>
    </Box>
  );

  return (
    <>
      <Box sx={styles.pageWrapper}>
        {paginatedData?.map((meal) => (
          <Box sx={styles.mealCard} key={meal.idMeal}>
            <a href={`/${meal.idMeal}`} style={styles.mealCardLink}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={styles.image} />
              <Box sx={styles.mealCardBlock}>
                <Typography sx={styles.mealCardText?.header} variant="h5">{meal.strMeal}</Typography>
                <Typography sx={styles.mealCardText} variant="h6">{meal.strCategory}</Typography>
                <Typography sx={styles.mealCardText} variant="h6">{meal?.strTags}</Typography>
              </Box>
            </a>
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
    </>
  );
}

export default Meals;