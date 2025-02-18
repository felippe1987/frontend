import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import CadastroPessoas from "./components/CadastroPessoas";
import CadastroTransacoes from "./components/CadastroTransacoes";
import ConsultaTotais from "./components/ConsultaTotais";

const App = () => {
  return (
    <Router>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#4F6F52" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#F5EFE6" }}>
            Bem vindo ao sistema de controle financeiro!
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/pessoas"
            sx={{ color: "#F5EFE6" }}>
            Pessoas
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/transacoes"
            sx={{ color: "#F5EFE6" }}>
            Transações
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/totais"
            sx={{ color: "#F5EFE6" }}>
            Totais
          </Button>
        </Toolbar>
      </AppBar>

      {/* Conteúdo Principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "calc(100vh - 64px)",
          padding: 3,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}>
        <Container maxWidth="md">
          <Routes>
            <Route path="/pessoas" element={<CadastroPessoas />} />
            <Route path="/transacoes" element={<CadastroTransacoes />} />
            <Route path="/totais" element={<ConsultaTotais />} />
            <Route path="/" element={<CadastroPessoas />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App;

//como não foi exigida uma estilização mais profissional, deixei assim para fins didáticos e de entrega
