import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<MenuBookIcon />
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, marginLeft: 3 }}
					>
						読書管理アプリ
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
