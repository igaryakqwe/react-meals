import React from 'react';
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {Box, CircularProgress, Typography} from "@mui/material";
import MealCard from "@/pages/components/common/meal-card";
import * as styles from './MealPage.styles'
import Video from "@/pages/components/common/video";

const MealPage = () => {
  const router = useRouter();
  const mealId = router.query.mealId as string;

  const { data, isLoading, isError } = useQuery(
    ['meal', mealId],
    () => MealsService.getMeal(mealId),
    { refetchOnWindowFocus: false },
  )

  const meal = data?.meals[0] as object;


  if (isLoading) return (
    <Box sx={styles.pageWrapper}>
      <CircularProgress />
    </Box>
  );

  if (isError) return (
    <Box sx={styles.pageWrapper}>
      <Typography variant="h4">ERROR</Typography>
    </Box>
  );

  return (
    <Box sx={styles.pageWrapper}>
      <MealCard meal={meal}/>
      <Video source={meal.strYoutube}/>
    </Box>
  );
};

export default MealPage;
