import AddIcon from "@mui/icons-material/Add";
import { Card, CardMedia, Fab, Grid, Typography } from "@mui/material";

export const BookCard = (props) => {
	const { image, title, description, icon, clickHandler } = props;

	return (
		<Card sx={{ height: "40vh" }}>
			<Grid container>
				<Grid item xs={5}>
					<CardMedia
						component="img"
						image={image}
						sx={{
							width: "90%",
							height: "90%",
							margin: "5%",
						}}
					/>
				</Grid>
				<Grid container item xs={7} spacing={1}>
					<Grid item xs={12}>
						<Typography sx={{ fontSize: 20, marginTop: 2 }}>{title}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography noWrap>{description}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Fab color="primary" onClick={clickHandler}>
							{icon}
						</Fab>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
};
