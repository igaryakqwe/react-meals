import React from 'react';
import * as styles from "./Error.styles";
import {Box, Typography} from "@mui/material";

const Error = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text} variant="h4">ERROR!</Typography>
    </Box>
  );
};

export default Error;
