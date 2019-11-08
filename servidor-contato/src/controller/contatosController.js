
const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};


const add = (request, response) => {
  let contato = request.body
  let contatoExistente = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)
    if(contatoExistente.find( existente => existente.nome === contato.nome)){
      response.status(400).send("Contato duplicado!")
    }else if (contato.nome=== undefined  && contato.dataNascimento=== undefined && contato.celular=== undefined || contato.nome=== null && contato.dataNascimento=== null && contato.celular=== null ||
      contato.nome.trim()=== "" && contato.dataNascimento.trim()=== "" &&  contato.celular.trim()=== ""|| contato.nome.length<0 && contato.dataNascimento.length<0 && contato.celular.length<0){     
      response.status(400).send("Informações incorretas!")
      console.log(contato)      
    }else{
      model.agenda.contatos.push(contato)      
      response.status(200).send(contato)
    }
}
  
 



module.exports = {
  getAll,
  add

}

