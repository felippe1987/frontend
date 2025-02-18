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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}>
      <Typography variant="h4" gutterBottom>
        Consulta de Totais
      </Typography>
      <Paper
        sx={{
          padding: 3,
          width: "100%",
          maxWidth: 800,
          border: "1px solid #4F6F52",
          borderRadius: 2,
        }}>
        <TableContainer>
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
                  <TableCell align="right">
                    R$ {total.saldo.toFixed(2)}
                  </TableCell>
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
      </Paper>
    </Box>
  );
};

export default ConsultaTotais;
