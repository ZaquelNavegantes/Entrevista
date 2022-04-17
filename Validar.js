  /*Função Nome*/

 
  function NomeIsValid(){
    let nome = document.getElementById('nome');

    //Verifica se nome inicia em branco
    if(nome.value.startsWith(" ")){
      alert("Preencha o nome corretamente");
      nome.focus();
      nome.value ="";
      return false;
    }
    //Verifica se nome finaliza em branco
    if(nome.value.endsWith(" ")){
      alert("Preencha o nome corretamente");
      nome.focus();
      nome.value ="";
      return false;
    }
    return true;
  }


  /*Função CPF*/

  function CpfIsValid(){

    //Código que tira os caracteres (.) e (-) e transforma o cpf string em vetor
    let convert = document.getElementById('cpf');
    let cpfTemp = convert;
    convert = cpfTemp.value.replaceAll(/\.|-/g, "");
    let texto = convert.split('');
    

    //Verifica se todos os números do cpf são iguais. Se sim retorna false se não retorna true
    for(let count = 0;count < texto.length;count++){

      let num = 0;
      for(let indice in texto){
        if(count == texto[indice]){
          num++;
          if(num == 11){
            alert("Preencha um CPF válido");
            cpf.value ="";
            return false;          
          }
        }
      }
    }

    let cpfValido = document.getElementById('cpf');
    DigitoModificador(cpfValido.value);
    return true;
  }


  function DigitoModificador(cpf){

    let convertido = cpf.replaceAll(/\.|-/g, "");
    let vetor = convertido.split('');

    let vetorMod10 = vetor;

    for(let i = 0,y = 10;i < 9;i++,y--){
      vetorMod10[i] = vetor[i] * y;
    } 

    let somaDig10 = 0; 
    for(let x = 0;x < 9;x++){
      somaDig10 = somaDig10 + vetorMod10[x];
    }

    let resto10 = (somaDig10*10)%11;
    resto10 = Math.floor(resto10);

    if(resto10 == 10 || resto10 == 11){
      resto10 = 0;
    }
    
    //se resto igual ao 10 termo do cpf então calcular Digitomodificador11
    //se não for então o cpf é invalido
    if(vetor[9] == resto10){
      convertido = cpf.replaceAll(/\.|-/g, "");
      vetor = convertido.split('');
      let vetorMod11 = vetor;

      for(let i = 0,y = 11;i < 10;i++,y--){
        vetorMod11[i] = vetor[i] * y;
      }

      let somaDig11 = 0; 
      for(let x = 0;x < 10;x++){
        somaDig11 = somaDig11 + vetorMod11[x];
      }

      let resto11 = Math.floor((somaDig11 * 10)%11);

      if(resto11 == 10 || resto11 == 11){
        resto11 = 0;
      }

      //se resto igual ao 11 termo do cpf então CPF valido
      //se não for então o cpf é invalido
      if(vetor[10] == resto11){
        return true;
      }
      else{
        alert("Preencha um CPF válido");
        return false;
      }

    }
    else{
      alert("Preencha um CPF válido");
      return false;
    }
  }
  

  /*Função Email*/

  function EmailIsValid(){

    let email = document.getElementById('email');

    //Verifica se o email começa com Números de 0 a 9
    for(let i = 0;i < 10;i++){
      if(email.value.startsWith(i)){
        alert("Preencha um E-mail válido");
        email.focus();
        email.value ="";
        i=10;
        return false;                
      }
    }

    return true;
  }


  /*Função DDD*/

  function DDDIsValid(){

    let ddd = document.getElementById('ddd');

    //Verifica se o ddd é igual a 0
    if(ddd.value.length == 0){
      alert("Preencha um DDD válido");
      ddd.value ="";
      return false;
    }

    return true;
  }


  /*Função Sexo*/

  function SexoIsValid(){
    let sexo = document.getElementById('sexo');

    //Verifica se o sexo é diferente das opções M e F
    if(sexo.value != 'M' && sexo.value != 'F'){
      alert("Preencha um sexo válido");
      sexo.value = null;
      return false;
    }

    return true;
  }


  /*Função Telefone*/

  function TelefoneIsValid(){
    let telefone = document.getElementById('telefone');

    //Verifica se o telefone é igual a 0
    if(telefone.value.length == 0){
      alert("Preencha um telefone válido");
      telefone.value ="";
      return false;
    }

    return true;
  }


  /*Função Github*/

  function GithubIsValid(){
    let github = document.getElementById('github');
  
    //Verifica se o github é igual a 0
    if(github.value.length == 0){
      alert("Preencha um github válido");
      github.value = null;
      return false;
    }
  
    return true;
  }

    
  /*Função Endereço*/

  function EnderecoIsValid(){

    endereco = document.getElementById('endereco');

    //Verifica se o endereço é igual a 0
    if(endereco.value.length == 0){
      alert("Preencha um endereço válido");
      endereco.value = null;
      return false;
    }

    //Verifica se endereço inicia em branco
    if(endereco.value.startsWith(" ")){
      alert("Preencha o endereço corretamente");
      endereco.value ="";
      return false;
    }

    //Verifica se endereço finaliza em branco
    if(endereco.value.endsWith(" ")){
      alert("Preencha o endereço corretamente");
      endereco.value ="";
      return false;
    }
    return true;
  }