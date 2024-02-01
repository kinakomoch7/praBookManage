import { Grid } from "@mui/material";
import { useState } from "react";
import { BookCard } from "../../common/bookCard/BookCard";
import { ButtonToSerch } from "./ButtonToSerch";

export const Home = () => {
	const [bookData, setBookData] = useState([
		{
			title: "",
			image: "",
			description: "",
		},
	]);

	return (
		<Grid container>
			<Grid item xs={12}>
				<ButtonToSerch />
			</Grid>
			{bookData.map((item) => {
				<Grid item xs={6} md={4} key={item.title}>
					<BookCard {...item} />;
				</Grid>;
			})}
		</Grid>
	);
};
