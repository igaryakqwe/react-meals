import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {
  Box,
  CircularProgress, Grid, SxProps, Theme,
  Typography
} from "@mui/material";
import React from "react";
import * as styles from './Meals.styles';

interface MealsProps {
  sx: SxProps<Theme>
}

const Meals = () => {

  const { data, isLoading, isError } = useQuery(
    "meals",
    MealsService.getAllMeals,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <CircularProgress />

  if (isError) return <Typography>ERROR!</Typography>

  return (
    <Box sx={styles.pageWrapper}>
      {data?.meals.map((meal) => (
        <Box sx={styles.mealCard} key={meal.idMeal}>
          <a href="components/common/Meals" style={styles.mealCardLink}>
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
  );
};

export default Meals;