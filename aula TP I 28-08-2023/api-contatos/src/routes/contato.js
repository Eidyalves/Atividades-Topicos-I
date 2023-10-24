const express = require('express');
const router = express.Router();

/**
 * Configuração de rotas serão 
 * adicionadas abaixo desse comentário
 */
// Criar um novo contato
router.post('/contatos', function (request, response) {
    const nome = request.body.nome;
    const data = request.body.data;
    const telefone = request.body.telefone;
    const email = request.body.email;
  
    const quantidade = listaContatos.length;
  
    const novoContato = {
      codigo: quantidade + 1,
      nome: nome,
      data: data,
      telefone: telefone,
      email: email,
    };
  
    listaContatos.push(novoContato);
  
    return response.json(novoContato);
  });

/**
 * Exportação da constante router
 * código padrão
 */
module.exports = router;