import { AppBar, Box, Toolbar } from "@mui/material";

const Header = () => {
	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "#1E272E", borderRadius: 0 }}
		>
			<Toolbar sx={{ px: { xs: 2, md: 24 }, py: 1 }}>
				<Box component="img" sx={{ height: 64 }} alt="Logo" src="/logo.svg" />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
