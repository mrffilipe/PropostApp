"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import "./globals.css";

import darkTheme from "@/theme/darkTheme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
