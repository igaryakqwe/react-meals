import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import * as styles from './MealCard.styles';
import Video from "@/components/common/video";
import { getIngredients, capitalize } from "@/utils/ingredientsUtil";

const MealCard: FC = ({meal}) => {
  const videoURL = 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8'
  const ingredients = getIngredients(meal);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <img style={styles.image} src={meal.strMealThumb} alt=""/>
        <Box>
          <Typography sx={styles.text?.h5} variant="h2">{meal.strMeal}</Typography>
          <Typography sx={styles.text} variant="h3">Category: {meal.strCategory}</Typography>
          <Typography sx={styles.text} variant="h3">Tags: {meal.strTags}</Typography>
        </Box>
      </Box>
      <Typography sx={styles.text?.h5} variant='h4'>Ingredients:</Typography>
      <Box sx={styles.list}>
        {ingredients.map((ingredient: any) => (
          <li style={styles.listText} key={meal.idMeal}>{capitalize(ingredient)}</li>
        ))}
      </Box>
      <Typography sx={styles.text?.h5} variant='h4'>Instructions</Typography>
      <Typography sx={styles.text?.instructions} variant="h6">{meal.strInstructions}</Typography>
      <Video source={videoURL} />
    </Box>
  );
};

export default MealCard;