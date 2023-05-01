import React from 'react';
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import MealsService from "@/services/meals.service";
import { Box } from "@mui/material";
import MealCard from "@/components/common/meal-card";
import * as styles from './MealPage.styles'
import Video from "@/components/common/video";
import Loader from "@/components/common/loader";
import Error from "@/components/common/loader";

const MealPage = () => {
  const router = useRouter();
  const mealId = router.query.mealId as string;

  const { data, isLoading, isError } = useQuery(
    ['meal', mealId],
    () => MealsService.getMeal(mealId),
    { refetchOnWindowFocus: false },
  )

  const meal = data?.meals[0];


  if (isLoading || !meal) return (
    <Loader />
  );

  if (isError || !meal) return (
    <Error />
  );

  return (
    <Box sx={styles.pageWrapper}>
      <MealCard meal={meal}/>
      <Video />
    </Box>
  );
};

export default MealPage;
