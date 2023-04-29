import {SxProps} from "@mui/system";
import {StyledComponentProps, Theme} from "@mui/material";

const pageWrapper: SxProps<Theme> = {
  width: '1240px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '60px',
}

const mealCard: SxProps<Theme> = {
  width: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '15px',
  borderRadius: '3%',
  margin: '0 15px 0 15px',
  textAlign: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  transition: '0.5s',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }
}

const mealCardBlock: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px 0 15px 0',
  width: '280px',
}

const mealCardText: SxProps<Theme> = {
  header: {
    fontWeight: 600,
  },
  wordBreak: 'break-all',
  fontFamily: 'Calibri',
  maxWidth: "280px",
  height: '100%'
}


const mealCardLink: object = {
  textDecoration: 'none',
  color: "black",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const image: object = {
  width: '300px',
  height: '300px',
  borderRadius: '2% 2% 0 0'
}

export { pageWrapper, mealCard, mealCardText, mealCardBlock, mealCardLink, image };