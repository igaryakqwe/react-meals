import React, {useState} from 'react';
import Meals from "@/pages/components/common/meals";
import { Box } from "@mui/material";
import * as styles from './MainPage.styles';

const MainPage = () => {

  return (
    <Box sx={styles.pageWrapper}>
      <Meals />
    </Box>
  )
};

export default MainPage;
