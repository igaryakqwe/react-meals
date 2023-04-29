import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {
  Box,
  CircularProgress, Pagination,
  Typography
} from "@mui/material";
import React, {useState} from "react";
import * as styles from './Meals.styles';
import mealId from "@/pages/[mealId]";


const Meals = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { data, isLoading, isError } = useQuery(
    "meals",
    MealsService.getAllMeals,
    {
      refetchOnWindowFocus: false,
    }
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography sx={styles.mealCardText} variant="h5">ERROR</Typography>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.meals.slice(startIndex, endIndex);

  return (
    <>
      <Box sx={styles.pageWrapper}>
        {currentItems?.map((meal) => (
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
        <Pagination
          count={Math.ceil((data?.meals.length || 0) / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
        />
      </Box>
    </>
  );
};

export default Meals;