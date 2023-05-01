import { Box, Typography } from "@mui/material";
import React from "react";
import * as styles from './MealCard.styles';
import Video from "@/components/common/video";

const MealCard = ({meal}) => {

  const ingredients = Object
    .values(meal)
    .slice(9,29)
    .filter(Boolean);

  const capitalize = (str: string) => {
    if (str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  }

  return (
    <Box sx={styles.mealCardWrapper}>
      <Box sx={styles.mealCardMain}>
        <img style={styles.mealCardImage} src={meal.strMealThumb} alt=""/>
        <Box>
          <Typography sx={styles.mealCardText?.header} variant="h2">{meal.strMeal}</Typography>
          <Typography sx={styles.mealCardText} variant="h3">Category: {meal.strCategory}</Typography>
          <Typography sx={styles.mealCardText} variant="h3">Tags: {meal.strTags}</Typography>
        </Box>
      </Box>
      <Typography sx={styles.mealCardText?.header} variant='h4'>Ingredients:</Typography>
      <Box sx={styles.mealCardList}>
        {ingredients.map((ingredient: any) => (
          <li style={styles.listText} key={meal.idMeal}>{capitalize(ingredient)}</li>
        ))}
      </Box>
      <Typography sx={styles.mealCardText?.header} variant='h4'>Instructions</Typography>
      <Typography sx={styles.mealCardText?.instructions} variant="h6">{meal.strInstructions}</Typography>
    </Box>
  );
};

export default MealCard;