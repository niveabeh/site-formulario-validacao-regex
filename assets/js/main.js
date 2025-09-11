function ValidarForm() {

  const expNome = /^[A-Za-zÁ-ü]{3,}([ ][A-Za-zÁ-ü]{2,})+$/;
  const expCPF = /^([0-9]{3}[.]){2}[0-9]{3}[-][0-9]{2}$/;
  const expRg = /^[0-9]{1}[.][0-9]{3}[.][0-9]{3}$/;
  const expDTNas = /(0[1-9]|[12][0-9]|[3][01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
  const expEmail = /^[A-Za-z0-9_\-.]{2,}@(gmail|outlook|hotmail)\.com(\.br)?$/;
  const expTelefone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
  const expCEP = /^[0-9]{5}-[0-9]{3}$/;

  let nome2 = document.getElementById('nomeCompleto').value;
  let cpf = document.getElementById('cadastroPessoaFisica').value;
  let rg = document.getElementById('registoGeral').value;
  let dataNas = document.getElementById('dataNascimento').value;
  let email = document.getElementById('EmailPessoal').value;
  let fone = document.getElementById('Telefone').value;
  let cep = document.getElementById('CodigoEnderecamento').value;


  let alteraTexto = document.getElementById('texto-aviso');

  const modal = document.getElementById('dialog');
  const fecharModal = document.getElementById('fechar');

  fecharModal.addEventListener("click", () => {

    modal.close();

  });

  if (!expNome.test(nome2)) {
    alteraTexto.textContent = "Nome inválido!!!";
    document.getElementById('nomeCompleto').focus();
    modal.showModal();
    return false;
  }

  else if (!expCPF.test(cpf)) {

    alteraTexto.textContent = "CPF inválido!!!";
    document.getElementById('cadastroPessoaFisica').focus();
    modal.showModal();
    return false;

  }
  else if (!expRg.test(rg)) {

    alteraTexto.textContent = "RG inválido!!!";
    document.getElementById('registoGeral').focus();
    modal.showModal();
    return false;

  }

  else if (!expDTNas.test(dataNas)) {

    alteraTexto.textContent = "Data de nascimento inválido!!!";
    document.getElementById('dataNascimento').focus();
    modal.showModal();
    return false;

  }

  else if (!expEmail.test(email)) {

    alteraTexto.textContent = "E-mail inválido!!!";
    document.getElementById('EmailPessoal').focus();
    modal.showModal();
    return false;

  }

  else if (!expTelefone.test(fone)) {

    alteraTexto.textContent = "Telefone inválido!!!";
    document.getElementById('Telefone').focus();
    modal.showModal();
    return false;

  }

  else if (!expCEP.test(cep)) {

    alteraTexto.textContent = "CEP inválido!!!";
    document.getElementById('CodigoEnderecamento').focus();
    modal.showModal();
    return false;

  } else {
    abrirModal();
    alteraTexto.textContent = "Dados enviados com sucesso!! ✅";
    return false;
  }

}

// Tirado do projeto devido ao tempo de apresentação...
// const expUsuario = /^[A-Za-z]{3,}([_\-A-Za-z0-9]{1,})?$/;
// const expSenha = /^[A-Za-z]{1,}[0-9]{1,}[.|\/@*\-+_]{1,}$/;

// let usuario = document.getElementById('user').value;
// let senha = document.getElementById('palavraChave').value;

// else if (!expUsuario.test(usuario)) {
//   alteraTextp.textContent = "Nome de usuário inválido!!!";
//   document.getElementById('user').focus();
//   modal.showModal();
//   return false;
// }

// else if (!expSenha.test(senha)) {

//   alteraTextp.textContent = "Senha inválido!!!";
//   document.getElementById('palavraChave').focus();
//   modal.showModal();
//   return false;

// }


const btnVoltar = document.getElementById('btn-voltar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnVoltar.style.display = 'block';
  } else {
    btnVoltar.style.display = 'none';
  }
});
btnVoltar.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});







document.addEventListener("DOMContentLoaded", () => {
  const teclas = document.querySelectorAll(".tecla");
  const textoTecla = document.getElementById('paragrafoExplica');

  const explicacoes = {
    "/": "Delimitador da regex, é como a cerca que marca onde começa e termina a expressão. Exemplo: /hello/ aceita a palavra 'hello'.",
    ".": "Qualquer caractere, menos a quebra de linha, tipo um curinga que aceita quase tudo! Exemplo: /b.t/ aceita 'bat', 'bit', 'but'.",
    "*": "Zero ou mais vezes, pode não aparecer ou aparecer várias vezes. Exemplo: /ho*/ aceita 'h', 'ho', 'hoo', 'hooo'...",
    "{}": "Quantas vezes algo deve aparecer, exato ou intervalo. Exemplo: /a{2}/ aceita 'aa'; /a{1,3}/ aceita 'a', 'aa' ou 'aaa'.",
    "()": "Agrupa partes ou captura para usar depois. Exemplo: /(ha)+/ aceita 'ha', 'hahaha', 'hahahaha', etc.",
    "[]": "Lista de caracteres que podem aparecer, tipo escolher um deles. Exemplo: /[xyz]/ aceita 'x', 'y' ou 'z'; /[3-5]/ aceita '3', '4' ou '5'.",
    "?": "Zero ou uma vez, algo opcional. Exemplo: /colou?r/ aceita 'color' e 'colour'.",
    "+": "Uma ou mais vezes, tem que ter pelo menos uma. Exemplo: /go+/ aceita 'go', 'goo', 'gooo', etc.",
    "^": "Começo da string. Dentro de colchetes [^] vira negação. Exemplo: /^Hey/ aceita só se começar com 'Hey'; /[^aeiou]/ aceita qualquer caractere que não seja vogal.",
    "$": "Fim da string, garante que termine ali. Exemplo: /end$/ aceita textos que terminam com 'end'.",
    "|": "OU, tipo uma escolha entre opções. Exemplo: /sim|não/ aceita 'sim' ou 'não'.",
    "i": "Flag que ignora maiúsculas e minúsculas. Exemplo: /java/i aceita 'Java', 'JAVA' ou 'java'.",
    "g": "Flag que busca todas as ocorrências no texto, não só a primeira.",
    "m": "Flag que faz início (^) e fim ($) funcionarem em cada linha, não só no texto inteiro.",
    "s": "Flag que faz o ponto (.) também pegar quebras de linha.",
  };





  teclas.forEach(tecla => {
    tecla.addEventListener("click", () => {
      const valor = tecla.textContent.trim();
      textoTecla.textContent = explicacoes[valor] || "deu ruim";
    });
  });

  const inputCod = document.getElementById('testeCod');
  const spanCod = document.querySelector('.implementarCod');

  inputCod.addEventListener('input', () => {
    spanCod.textContent = inputCod.value;
  });


});

