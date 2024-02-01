import { Button, Fab, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { BookCard } from "../../common/bookCard/BookCard";
import { BackButton } from "./BackButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getNewId } from "../../../customHooks/getLocalstrage";
import { Addbooks } from "../../../customHooks/Setlocalstrage";

export const Search = () => {
	const [text, setText] = useState();
	const [books, setBooks] = useState([]);

	const navigate = useNavigate();

	const textChange = (event) => {
		setText(event.target.value);
	};

	const onAdd = (index) => {
		const newBook = {
			id: 1,
			title: books[index].title,
			description: books[index].description,
			image: books[index].image,
		}

		Addbooks(newBook)
		console.log(newBook)
		navigate(`/edit/${index}`)
	}

	const onSearch = async () => {
		if (text === "") return;
		const endpoint = "https://www.googleapis.com/books/v1";
		const res = await fetch(`${endpoint}/volumes?q=${text}&maxResults=3`);
		const data = await res.json();
		const dataFormat = data.items.map((item) => {
			const Info = item.volumeInfo;
			return {
				title: Info.title,
				description: Info.description,
				link: Info.infoLink,
				image: Info.imageLinks ? Info.imageLinks.thumbnail : "",
			};
		});
		setBooks(dataFormat);
	};

	console.log(books);

	const onSave = () => {
		console.log("save");
	};

	const icon = <AddIcon />


	return (
		<div>
			<BackButton />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography variant="h6">本を検索する</Typography>
				<TextField
					id="outlined-basic"
					label="book serch"
					variant="outlined"
					onChange={textChange}
				/>
				<Button variant="contained" onClick={onSearch}>
					検索する
				</Button>
			</div>
			<Grid container>
				{books.map((item, index) => (
					<Grid item xs={6} md={4} key={item.title}>
						<BookCard {...item} icon={icon} clickHandler={() => onAdd(index)}/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
