const express = require('express');

const server = express();

server.use(express.json());

// localhost:3000/curso

const cursos = ['Node js', 'Python', 'Java']

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

  // Query params = ?nome=NodeJS
  // CHAMANDO UM CURSO UM CURSO
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);

});

// CRIANDO UM CURSO
server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// ATUALIZANDO UM CURSO
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// DELETANDO UM CURSO
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({ messege: "curso deletado com sucesso" });
});


  //route params = /curso/2
  //request body = { nome: 'nodejs', tipo: 'backend' }

server.listen(3000);
