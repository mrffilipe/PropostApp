"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import "./globals.css";

import darkTheme from "@/theme/darkTheme";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
