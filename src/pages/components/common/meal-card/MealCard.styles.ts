import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

const pageWrapper: SxProps<Theme> = {
  width: '1340px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  gap: '80px',
  paddingTop: '30px'
}

const cardWrapper: SxProps<Theme> = {
  width: '1340px',
  display: 'flex',
  flexDirection: 'row',
}

const cardTextWrapper: SxProps<Theme> = {
  width: '700px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  wordBreak: 'break-all',
  textAlign: 'center',
  gap: '10px',
}

const cardText: SxProps<Theme> = {
  header: {
    fontWeight: 600,
  },
  fontFamily: 'Calibri',
}

const cardImage = {
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  '&:hover': {
    width: '420px',
    height: '420px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  }
}

export { pageWrapper, cardWrapper, cardTextWrapper, cardText, cardImage };