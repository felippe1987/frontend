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
import "./App.css";
import CadastroPessoas from "./components/CadastroPessoas";
import CadastroTransacoes from "./components/CadastroTransacoes";
import ConsultaTotais from "./components/ConsultaTotais";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bem vindo ao sistema de controle financeiro
          </Typography>
          <Button color="inherit" component={Link} to="/pessoas">
            Pessoas
          </Button>
          <Button color="inherit" component={Link} to="/transacoes">
            Transações
          </Button>
          <Button color="inherit" component={Link} to="/totais">
            Totais
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/pessoas" element={<CadastroPessoas />} />
          <Route path="/transacoes" element={<CadastroTransacoes />} />
          <Route path="/totais" element={<ConsultaTotais />} />
          <Route path="/" element={<CadastroPessoas />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
