import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

const mealCardWrapper: SxProps<Theme> = {
  maxWidth: '1340 px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  flexWrap: 'wrap',
  gap: '40px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  padding: '20px 0 80px 0',
  borderRadius: '3%'
}

const mealCardMain: SxProps<Theme> = {
  maxWidth: '1440px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: "center",
  alignItems: "center",
  gap: '40px',
  margin: '0 80px 0 80px',
  padding: '80px 0 80px 0',
}

const mealCardList: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '20px',
  margin: '0 40px 0 40px',
  '@media(max-width: 670px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media(max-width: 430px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
}

const mealCardImage = {
  width: '250px',
  height: '100%',
  borderRadius: '50% 0 0 50%',
  boxShadow: '-5px 0px 33px -8px rgba(0,0,0,0.75)',
}


const mealCardText: SxProps<Theme> = {
  header: {
    fontWeight: 600
  },
  instructions: {
    wordBreak: 'break-word',
    maxWidth: '1040px',
    minWidth: '340px',
    margin: '0 80px 0 80px',
  },
  fontFamily: 'Calibri',
}

const listText = {
  fontFamily: 'Calibri',
  fontWeight: 500,
  fontSize: '26px',
}
export { mealCardMain, mealCardWrapper, mealCardList, mealCardImage, mealCardText, listText };