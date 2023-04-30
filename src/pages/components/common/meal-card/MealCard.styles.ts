import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

const mealCardWrapper: SxProps<Theme> = {
  width: '1340px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  gap: '40px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  padding: '80px 0 80px 0',
  borderRadius: '3%'
}

const mealCardMain: SxProps<Theme> = {
  width: '1140px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: "center",
  gap: '40px'
}

const mealCardList: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '20px',
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
    width: '1040px',
  },
  fontFamily: 'Calibri',
}

const listText = {
  fontFamily: 'Calibri',
  fontWeight: 500,
  fontSize: '25px',
}
export { mealCardMain, mealCardWrapper, mealCardList, mealCardImage, mealCardText, listText };