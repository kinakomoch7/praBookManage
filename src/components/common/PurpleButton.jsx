import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const PurpleButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));