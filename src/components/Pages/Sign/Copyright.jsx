import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Tomoki Koide © "}
			<Link color="inherit" href="https://mui.com/">
				mui
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default Copyright;