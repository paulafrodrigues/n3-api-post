const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};


const add = (request, response) => {
  let contato = request.body
  let contatoNovo = contato
  let contatoExistente = model.agenda
  
  //   for(let i = 0; i<contatoExistente.length; i++){
  // if (contatoExistente[i] === contatoNovo){
  return response.status(406).send("Cadastro duplicado!!")
}
    }
  model.agenda.contatos.push(contato);
  contato.id = Math.random().toString(36).substr(-8)
  console.log(contato)
 response.status(200).send()

}

module.exports = {
  getAll,
  add
}