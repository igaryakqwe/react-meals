import React from 'react';
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {Box, CircularProgress, Typography} from "@mui/material";
import MealCard from "@/pages/components/common/meal-card";
import * as styles from './MealPage.styles'

const MealPage = () => {
  const router = useRouter();
  const mealId = router.query.mealId as string;

  const { data, isLoading, isError } = useQuery(
    ['meal', mealId],
    () => MealsService.getMeal(mealId),
    { refetchOnWindowFocus: false },
  )

  const meal = data?.meals[0] as object;

  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>ERROR</Typography>

  return (
    <Box sx={styles.pageWrapper}>
      <MealCard meal={meal}/>
    </Box>
  );
};

export default MealPage;
