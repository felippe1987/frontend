import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import api from "../services/api";

const CadastroTransacoes = () => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [pessoaId, setPessoaId] = useState("");
  const [pessoas, setPessoas] = useState([]);
  const [transacoes, setTransacoes] = useState([]);

  // Carregar pessoas e transações ao iniciar
  useEffect(() => {
    carregarPessoas();
    carregarTransacoes();
  }, []);

  const carregarPessoas = async () => {
    try {
      const response = await api.get("/pessoas");
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao carregar pessoas:", error);
    }
  };

  const carregarTransacoes = async () => {
    try {
      const response = await api.get("/transacoes");
      setTransacoes(response.data);
    } catch (error) {
      console.error("Erro ao carregar transações:", error);
    }
  };

  const handleCadastrar = async () => {
    if (!descricao || !valor || !tipo || !pessoaId) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    try {
      const response = await api.post("/transacoes", {
        descricao,
        valor: parseFloat(valor),
        tipo,
        pessoaId: parseInt(pessoaId),
      });
      setTransacoes([...transacoes, response.data]);
      setDescricao("");
      setValor("");
      setTipo("receita");
      setPessoaId("");
    } catch (error) {
      console.error("Erro ao cadastrar transação:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Cadastro de Transações</Typography>
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Valor"
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <MenuItem value="receita">Receita</MenuItem>
          <MenuItem value="despesa">Despesa</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Pessoa</InputLabel>
        <Select value={pessoaId} onChange={(e) => setPessoaId(e.target.value)}>
          {pessoas.map((pessoa) => (
            <MenuItem key={pessoa.id} value={pessoa.id}>
              {pessoa.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleCadastrar}>
        Cadastrar
      </Button>

      <List>
        {transacoes.map((transacao) => (
          <ListItem key={transacao.id}>
            <ListItemText
              primary={`${transacao.descricao} (${transacao.tipo}: R$ ${transacao.valor})`}
              secondary={`Pessoa: ${
                pessoas.find((p) => p.id === transacao.pessoaId)?.nome ||
                "Desconhecida"
              }`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CadastroTransacoes;
