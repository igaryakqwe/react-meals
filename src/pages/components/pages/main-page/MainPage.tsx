import React from 'react';
import Meals from "@/pages/components/common/meals";
import {Box, Pagination, Typography} from "@mui/material";
import * as styles from './MainPage.styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MealCard from "@/pages/components/common/meal-card";
import {Stack} from "@mui/system";

const MainPage = () => {

  return (
    <Box sx={styles.pageWrapper}>
      <Typography variant="h2" sx={styles.header}>
        <>
          <DinnerDiningIcon sx={styles.icon} />
          Meals
        </>
      </Typography>
      <Meals />
    </Box>
  )
};

export default MainPage;
