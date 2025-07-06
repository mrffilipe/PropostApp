import { Box, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#1E272E",
				py: 4,
				px: { xs: 2, md: 24 },
				textAlign: "center",
			}}
		>
			<Typography variant="body2">
				© {new Date().getFullYear()} Code By Mister. Todos os direitos
				reservados.
			</Typography>
		</Box>
	);
};

export default Footer;
