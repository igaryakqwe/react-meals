import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

const pageWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const icon: SxProps<Theme> = {
  color: 'black',
  width: '45px',
  height: '45px',
  marginRight: '10px'
}

const header: SxProps<Theme> = {
  fontFamily: 'Calibri',
  fontWeight: 600,
  textAlign: "center",
  lineHeight: '100px',
  cursor: 'default'
}

export { pageWrapper, icon, header };