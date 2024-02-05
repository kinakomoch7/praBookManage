import { useParams } from "react-router-dom";
import { getBook } from "../../../customHooks/getLocalstrage";
import { Card, CardMedia, Grid, Typography } from "@mui/material";


export const Edit = (props) => {
	const { id } = useParams();

	console.log(id)
	const book = getBook(id);
	console.log(book)

	return (
		<Grid container>
			<Grid item sx={5}>
				<Card >
					<CardMedia
						component="img"
						image={book.image}
						sx={{
							width: "90%",
							height: "90%",
							margin: "5%",
						}} />
				</Card>
			</Grid>
			<Grid item sx={7}>
				<div>
					<Typography >{book.title}</Typography>
				</div>
			</Grid>
		</Grid>
	);
};
