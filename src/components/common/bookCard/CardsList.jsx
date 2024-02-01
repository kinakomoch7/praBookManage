import { Grid } from "@mui/material";
import { BookCard } from "./BookCard";

export const CardsList = (props) => {
	const { books } = props;

	return (
		<Grid container xs={12}>
			{books.map((bookData) => {
				<Grid item xs={6}>
					<BookCard
						key={bookData}
						title={bookData.title}
						img={bookData.image}
						description={bookData.description}
					/>
				</Grid>;
			})}
		</Grid>
	);
};
