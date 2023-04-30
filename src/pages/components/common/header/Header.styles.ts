import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

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
  lineHeight: '120px',
}

const link = {
  color: "black",
  textDecoration: 'none',
  cursor: 'pointer'
}

export { icon, header, link }