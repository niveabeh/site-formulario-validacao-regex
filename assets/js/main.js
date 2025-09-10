function ValidarForm() {

  const expNome = /^[A-Za-zÁ-ü]{3,}([ ][A-Za-zÁ-ü]{2,})+$/;
  const expCPF = /^([0-9]{3}[.]){2}[0-9]{3}[-][0-9]{2}$/;
  const expRg = /^[0-9]{1}[.][0-9]{3}[.][0-9]{3}$/;
  const expDTNas = /(0[1-9]|[12][0-9]|[3][01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
  const expEmail = /^[A-Za-z0-9_\-.]{2,}@(gmail|outlook|hotmail)\.com(\.br)?$/;
  const expTelefone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
  const expCEP = /^[0-9]{5}-[0-9]{3}$/;
  const expUsuario = /^[A-Za-z]{3,}([_\-A-Za-z0-9]{1,})?$/;
  const expSenha = /^[A-Za-z]{1,}[0-9]{1,}[.|\/@*\-+_]{1,}$/;

  let nome2 = document.getElementById('nomeCompleto').value;
  let cpf = document.getElementById('cadastroPessoaFisica').value;
  let rg = document.getElementById('registoGeral').value;
  let dataNas = document.getElementById('dataNascimento').value;
  let email = document.getElementById('EmailPessoal').value;
  let fone = document.getElementById('Telefone').value;
  let cep = document.getElementById('CodigoEnderecamento').value;
  let usuario = document.getElementById('user').value;
  let senha = document.getElementById('palavraChave').value;

  let alteraTextp = document.getElementById('texto-aviso');

  const modal = document.getElementById('dialog');
  const fecharModal = document.getElementById('fechar');

  fecharModal.addEventListener("click", () => {

    modal.close();

  });

  if (!expNome.test(nome2)) {
    alteraTextp.textContent = "Nome inválido!!!";
    document.getElementById('nomeCompleto').focus();
    modal.showModal();
    return false;
  }

  else if (!expCPF.test(cpf)) {

    alteraTextp.textContent = "CPF inválido!!!";
    document.getElementById('cadastroPessoaFisica').focus();
    modal.showModal();
    return false;

  }
  else if (!expRg.test(rg)) {

    alteraTextp.textContent = "RG inválido!!!";
    document.getElementById('registoGeral').focus();
    modal.showModal();
    return false;

  }

  else if (!expDTNas.test(dataNas)) {

    alteraTextp.textContent = "Data de nascimento inválido!!!";
    document.getElementById('dataNascimento').focus();
    modal.showModal();
    return false;

  }

  else if (!expEmail.test(email)) {

    alteraTextp.textContent = "E-mail inválido!!!";
    document.getElementById('EmailPessoal').focus();
    modal.showModal();
    return false;

  }

  else if (!expTelefone.test(fone)) {

    alteraTextp.textContent = "Telefone inválido!!!";
    document.getElementById('Telefone').focus();
    modal.showModal();
    return false;

  }

  else if (!expCEP.test(cep)) {

    alteraTextp.textContent = "CEP inválido!!!";
    document.getElementById('CodigoEnderecamento').focus();
    modal.showModal();
    return false;

  }

  else if (!expUsuario.test(usuario)) {
    alteraTextp.textContent = "Nome de usuário inválido!!!";
    document.getElementById('user').focus();
    modal.showModal();
    return false;
  }

  else if (!expSenha.test(senha)) {

    alteraTextp.textContent = "Senha inválido!!!";
    document.getElementById('palavraChave').focus();
    modal.showModal();
    return false;

  }
  else {
    abrirModal();
    alteraTextp.textContent = "Dados enviados com sucesso!! ✅";
    return false;
  }
}

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

const sem = document.querySelector('.sem-regex');
const com = document.querySelector('.com-regex');

sem.addEventListener('mouseenter', () => {
  com.style.filter = 'blur(4px)';
});

sem.addEventListener('mouseleave', () => {
  com.style.filter = 'none';
});

com.addEventListener('mouseenter', () => {
  sem.style.filter = 'blur(4px)';
});

com.addEventListener('mouseleave', () => {
  sem.style.filter = 'none';
});






document.addEventListener("DOMContentLoaded", () => {
  const teclas = document.querySelectorAll(".tecla");
  const textoTecla = document.getElementById('paragrafoExplica');

  const explicacoes = {
    "/": "Delimitador de regex.",
    ".": "Qualquer caractere (exceto nova linha).",
    "*": "0 ou mais repetições.",
    "{}": "Quantidade exata ou intervalo de repetições.",
    "()": "Agrupamento ou captura.",
    "[]": "Classe de caracteres (um dos listados).",
    "?": "0 ou 1 ocorrência (opcional).",
    "+": "1 ou mais repetições.",
    "^": "Início da string.",
    "$": "Fim da string.",
    "|": "OU (alternativa).",
    "i": "Flag: case insensitive (ignora maiúsculas/minúsculas).",
    "g": "Flag: global (pega todas as ocorrências).",
    "m": "Flag: multiline (trata início/fim por linha).",
    "s": "Flag: dotall (faz '.' incluir quebras de linha)."
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



