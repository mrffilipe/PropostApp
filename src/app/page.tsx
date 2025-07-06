"use client";

import Header from "@/components/Header";
import theme from "@/theme/darkTheme";
import {
	Container,
	Grid,
	TextField,
	Typography,
	Button,
	Box,
	Select,
	MenuItem,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
	const [formData, setFormData] = useState({
		clienteNome: "",
		clienteCpfCnpj: "",
		clienteEndereco: "",
		clienteTelefone: "",
		clienteEmail: "",
		prestadorNome: "",
		prestadorCpfCnpj: "",
		prestadorEndereco: "",
		prestadorTelefone: "",
		prestadorEmail: "",
		servico: "",
		valor: "",
		formaPagamento: "",
	});

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = () => {
		console.log(formData);
		// Futuramente: Redireciona para Preview
	};

	return (
		<Container
			maxWidth="md"
			sx={{
				my: 4,
				py: 4,
				borderRadius: 4,
				backgroundColor: theme.palette.background.paper,
			}}
		>
			<Typography
				variant="h4"
				color="primary"
				textTransform="uppercase"
				gutterBottom
			>
				Proposta de Prestação de Serviços
			</Typography>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					I - Dados do Cliente
				</Typography>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Nome/Razão Social"
							fullWidth
							value={formData.clienteNome}
							onChange={(e) => handleChange("clienteNome", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="CPF/CNPJ"
							fullWidth
							value={formData.clienteCpfCnpj}
							onChange={(e) => handleChange("clienteCpfCnpj", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Endereço"
							fullWidth
							value={formData.clienteEndereco}
							onChange={(e) => handleChange("clienteEndereco", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Telefone"
							fullWidth
							value={formData.clienteTelefone}
							onChange={(e) => handleChange("clienteTelefone", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="E-mail"
							fullWidth
							value={formData.clienteEmail}
							onChange={(e) => handleChange("clienteEmail", e.target.value)}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					II - Dados do Prestador de Serviço
				</Typography>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Nome/Razão Social"
							fullWidth
							value={formData.prestadorNome}
							onChange={(e) => handleChange("prestadorNome", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="CPF/CNPJ"
							fullWidth
							value={formData.prestadorCpfCnpj}
							onChange={(e) => handleChange("prestadorCpfCnpj", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Endereço"
							fullWidth
							value={formData.prestadorEndereco}
							onChange={(e) =>
								handleChange("prestadorEndereco", e.target.value)
							}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Telefone"
							fullWidth
							value={formData.prestadorTelefone}
							onChange={(e) =>
								handleChange("prestadorTelefone", e.target.value)
							}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="E-mail"
							fullWidth
							value={formData.prestadorEmail}
							onChange={(e) => handleChange("prestadorEmail", e.target.value)}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					III - Serviço a ser Prestado
				</Typography>

				<TextField
					label="Descrição do Serviço"
					fullWidth
					multiline
					rows={4}
					value={formData.servico}
					onChange={(e) => handleChange("servico", e.target.value)}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					IV - Valor e Forma de Pagamento
				</Typography>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Valor Total (à vista)"
							fullWidth
							value={formData.valor}
							onChange={(e) => handleChange("valor", e.target.value)}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							label="Valor Total (parcelado)"
							fullWidth
							value={formData.valor}
							onChange={(e) => handleChange("valor", e.target.value)}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					V - Validade da proposta
				</Typography>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Select value="0" defaultValue="0" fullWidth>
							<MenuItem value="0">Selecione a validade</MenuItem>
							<MenuItem value="1">7 dias</MenuItem>
							<MenuItem value="2">15 dias</MenuItem>
							<MenuItem value="3">30 dias</MenuItem>
						</Select>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography variant="h6" textTransform="uppercase" gutterBottom>
					VI - Prazo de entrega
				</Typography>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, sm: 4 }}>
						<TextField
							label="Dias corridos"
							fullWidth
							type="number"
							value={formData.valor}
							onChange={(e) => handleChange("valor", e.target.value)}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box sx={{ mt: 4 }} display="flex" justifyContent="flex-end">
				<Button
					variant="contained"
					size="large"
					color="primary"
					sx={{ textTransform: "uppercase" }}
					onClick={handleSubmit}
				>
					Baixar proposta
				</Button>
			</Box>
		</Container>
	);
}
