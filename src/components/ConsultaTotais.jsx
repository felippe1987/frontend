import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import api from "../services/api";

const ConsultaTotais = () => {
  const [totais, setTotais] = useState([]);
  const [totalGeral, setTotalGeral] = useState({});

  // Carregar totais ao iniciar
  useEffect(() => {
    carregarTotais();
  }, []);

  const carregarTotais = async () => {
    try {
      const response = await api.get("/totais");
      setTotais(response.data.totaisPorPessoa);
      setTotalGeral(response.data.totalGeral);
    } catch (error) {
      console.error("Erro ao carregar totais:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Consulta de Totais</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pessoa</TableCell>
              <TableCell align="right">Receitas</TableCell>
              <TableCell align="right">Despesas</TableCell>
              <TableCell align="right">Saldo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totais.map((total) => (
              <TableRow key={total.pessoaId}>
                <TableCell>{total.nome}</TableCell>
                <TableCell align="right">
                  R$ {total.receitas.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  R$ {total.despesas.toFixed(2)}
                </TableCell>
                <TableCell align="right">R$ {total.saldo.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                <strong>Total Geral</strong>
              </TableCell>
              <TableCell align="right">
                <strong>
                  R$ {totalGeral.saldoLiquido?.toFixed(2) || "0.00"}
                </strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConsultaTotais;
