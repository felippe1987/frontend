import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../services/api";

const CadastroPessoas = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pessoas, setPessoas] = useState([]);

  // Carregar pessoas ao iniciar
  useEffect(() => {
    carregarPessoas();
  }, []);

  const carregarPessoas = async () => {
    try {
      const response = await api.get("/pessoas");
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao carregar pessoas:", error);
    }
  };

  const handleCadastrar = async () => {
    if (!nome || !idade) {
      alert("Nome e idade são obrigatórios!");
      return;
    }

    try {
      const response = await api.post("/pessoas", {
        nome,
        idade: parseInt(idade),
      });
      setPessoas([...pessoas, response.data]);
      setNome("");
      setIdade("");
    } catch (error) {
      console.error("Erro ao cadastrar pessoa:", error);
    }
  };

  const handleDeletar = async (id) => {
    try {
      await api.delete(`/pessoas/${id}`);
      setPessoas(pessoas.filter((pessoa) => pessoa.id !== id));
    } catch (error) {
      console.error("Erro ao deletar pessoa:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Cadastro de Pessoas</Typography>
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Idade"
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleCadastrar}>
        Cadastrar
      </Button>

      <List>
        {pessoas.map((pessoa) => (
          <ListItem key={pessoa.id}>
            <ListItemText primary={`${pessoa.nome} (${pessoa.idade} anos)`} />
            <IconButton onClick={() => handleDeletar(pessoa.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CadastroPessoas;
