import { Grid } from "@mui/material";
import { useState } from "react";
import { BookCard } from "../../common/bookCard/BookCard";
import { PurpleButton } from "../../common/PurpleButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const [bookData, setBookData] = useState([
		{
			title: "",
			image: "",
			description: "",
		},
	]);

	const navigate = useNavigate();


	return (
		<Grid container>
			<Grid item xs={12}>
				<PurpleButton onClick={() => navigate('/search')} >検索する</PurpleButton>
			</Grid>
			{bookData.map((item) => {
				<Grid item xs={6} md={4} key={item.title}>
					<BookCard {...item} />;
				</Grid>;
			})}
		</Grid>
	);
};
