import React from 'react';
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import MealsService from "@/services/meals.service";
import {CircularProgress} from "@mui/material";

const MealPage = () => {
  const router = useRouter();
  const mealId = router.query.mealId as string;

  const { data: meal, isLoading } = useQuery(
    ['meals', mealId],
    () => MealsService.getMeal(mealId),
    { refetchOnWindowFocus: false, retry: false },
  )

  if (isLoading) return <CircularProgress />

  return (
    <>
      {meal}
    </>
  );
};

export default MealPage;
