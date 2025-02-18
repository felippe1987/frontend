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
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../services/api";

const CadastroPessoas = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pessoas, setPessoas] = useState([]);

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1A4D2E, #E8DFCA)",
        borderRadius: 6,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "#4F6F52",
        width: "100%",
      }}>
      <Typography
        variant="h4"
        sx={{ color: "#E8DFCA" }}
        gutterBottom
        margin-bottom={12}>
        Cadastro de Pessoas
      </Typography>
      <Paper
        sx={{
          padding: 3,
          width: "90%",
          maxWidth: 400,
          border: "2px solid #4F6F52",
          borderRadius: 2,
        }}>
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
        <Button
          variant="contained"
          onClick={handleCadastrar}
          fullWidth
          sx={{ marginTop: 2, backgroundColor: "#4F6F52" }}>
          Cadastrar
        </Button>
      </Paper>

      <Paper
        sx={{
          marginTop: 3,
          padding: 2,
          width: "100%",
          maxWidth: 500,
          border: "1px solid #4F6F52",
          overflow: "auto",
          color: "#4F6F52",
          borderRadius: 6,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          placeholder: "pessoas cadastradas",
        }}>
        <List>
          {pessoas.map((pessoa) => (
            <ListItem key={pessoa.id} divider>
              <ListItemText primary={`${pessoa.nome} (${pessoa.idade} anos)`} />
              <IconButton onClick={() => handleDeletar(pessoa.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default CadastroPessoas;
