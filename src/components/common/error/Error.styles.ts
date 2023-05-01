import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export const text: SxProps<Theme> = {
  fontWeight: 500
}