
const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};
const converterData = (dataNascimento) => {
    const dia = dataNascimento.split("/")[0];
    const mes = dataNascimento.split("/")[1];
    const ano = dataNascimento.split("/")[2];

    const dataConvertida = new Date(ano, mes, dia)

    if(mes==1 && dia >20 || mes==2 && dia<19){
      return "Aquário"
    }else if(mes==2 && dia >19 || mes==3 && dia<20){
      return "Peixes"
    }else if(mes==3 && dia >20 || mes==4 && dia<19){
      return "Áries"
    }else if(mes==4 && dia >20 || mes==5 && dia<21){
      return "Touro"
    }else if(mes==5 && dia >20 || mes==6 && dia<22){
      return "Gêmeos"
    }else if(mes==6 && dia >19 || mes==7 && dia<20){
      return "Câncer"
    }else if(mes==7 && dia >19 || mes==8 && dia<20){
      return "Leâo"
    }else if(mes==8 && dia >19 || mes==9 && dia<20){
      return "Virgem"
    }else if(mes==9 && dia >19 || mes==10 && dia<20){
      return "Libra"
    }else if(mes==2 && dia >19 || mes==11 && dia<20){
      return "Escorpião - o melhor signo!"
    }else if(mes==2 && dia >19 || mes==12 && dia<20){
      return "Sargitário"
    }else if(mes==2 && dia >19 ||& mes==1 && dia<20){
      return "Capricórnio"
    }
    
}


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
      }      
      response.status(200).send(contato)
    }
}
  
 



module.exports = {
  getAll,
  add

}

