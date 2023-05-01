import React from 'react';
import * as styles from "./Loader.styles";
import {Box, CircularProgress} from "@mui/material";

const Error = () => {
  return (
    <Box sx={styles.wrapper}>
      <CircularProgress size={60} />
    </Box>
  );
};

export default Error;
