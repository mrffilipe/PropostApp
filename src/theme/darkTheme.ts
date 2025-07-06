import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#4CAF50", // Verde principal (aprox. do seu verde)
		},
		secondary: {
			main: "#FFFFFF", // Branco ou cinza claro como cor de contraste
		},
		background: {
			default: "#000000", // Fundo escuro, coerente com sua identidade
			paper: "#121212", // Para cards, modals, caixas
		},
		text: {
			primary: "#FFFFFF",
			secondary: "#CCCCCC",
		},
	},
	typography: {
		fontFamily: "'Roboto', 'Arial', sans-serif",
		h1: {
			fontWeight: 700,
		},
		h2: {
			fontWeight: 700,
		},
		button: {
			textTransform: "none", // Evita tudo maiúsculo por padrão
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
			},
		},
	},
});

export default theme;
