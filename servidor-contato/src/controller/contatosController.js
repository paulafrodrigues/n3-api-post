const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};


const add = (request, response) => {
  let contato = request.body
  contato.id = Math.random().toString(36).substr(-8)
 model.agenda.contatos.push(contato);
 response.status(200).send()

}

module.exports = {
  getAll,
  add
}