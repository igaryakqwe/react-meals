import React from 'react';
import Meals from "@/pages/components/common/Meals";
import { Box, Typography } from "@mui/material";
import * as styles from './MainPage.styles';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

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
