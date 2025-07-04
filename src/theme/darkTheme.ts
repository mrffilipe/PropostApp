import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
	},
	typography: {
		fontFamily: "Roboto, Arial",
	},
});

export default theme;
