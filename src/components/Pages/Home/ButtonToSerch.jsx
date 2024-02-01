import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export const ButtonToSerch = () => {
	const navigate = useNavigate();

	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		"&:hover": {
			backgroundColor: purple[700],
		},
	}));

	return (
		<ColorButton onClick={() => navigate("/search")}>検索する</ColorButton>
	);
};
