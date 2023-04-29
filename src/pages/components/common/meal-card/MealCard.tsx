import {
  Box,
  Typography
} from "@mui/material";
import React from "react";
import * as styles from './MealCard.styles';


const MealCard = ({meal}) => {

  return (
    <Box sx={styles.pageWrapper}>
      <Box>
        <img src={meal.strMealThumb} style={styles.cardImage} alt=""/>
        <Box>
          <Typography variant="h4">{meal.strCategory}</Typography>
          <Typography variant="h4">{meal.strTags}</Typography>
        </Box>
      </Box>
      <Box sx={styles.cardTextWrapper}>
        <Typography sx={styles.cardText.header} variant="h3">{meal.strMeal}</Typography>
        <Typography sx={styles.cardText} variant="h6">{meal.strInstructions}</Typography>
      </Box>
    </Box>
  );
};

export default MealCard;