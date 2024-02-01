import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
	const navigate = useNavigate();

	return (
		<Fab color="gray" onClick={() => navigate(-1)}>
			<KeyboardBackspaceIcon />
		</Fab>
	);
};
