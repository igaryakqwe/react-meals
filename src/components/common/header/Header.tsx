import React from 'react';
import {Typography} from "@mui/material";
import * as styles from "./Header.styles";
import Link from "next/link";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Header = () => {
  return (
    <Link href={'./'} style={styles.link}>
      <Typography variant="h2" sx={styles.header}>
        <>
          <DinnerDiningIcon sx={styles.icon} />
          Meals
        </>
      </Typography>
    </Link>
  );
};

export default Header;
