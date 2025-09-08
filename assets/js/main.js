function ValidarForm() {

    const expNome = /^[A-zÁ-ü]{3,}([ ][A-zÁ-ü]{2,})+$/;
    const expCPF = /^([0-9]{3}[.]){2}[0-9]{3}[-][0-9]{2}$/;
    const expTelefone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
    const expCEP = /^[0-9]{5}[-][0-9]{3}$/;
    const expDTNas = /^([0-9]{2}[\/]){2}[0-9]{4}$/;
    const expSenha = /^[A-z0-9]{4,}.{1,}$/;
    const expRg = /^[0-9]{1}[.][0-9]{3}[\.][0-9]{3}$/;
    const expEmail = /^[A-z0-9]{2,}@(gmail|estudante|outlook|hotmail)(\.com|sesisenai)(\.br)?$/;
    const expUsuario = /^[A-z]{2,}(([0-9]{1,}|.))?$/

    let nome2 = document.getElementById('nome2').value;
    let cpf = document.getElementById('cpf2').value;
    let fone = document.getElementById('fone2').value;
    let cep = document.getElementById('cep2').value;
    let dataNas = document.getElementById('data_nasc2').value;
    let senha = document.getElementById('senha2').value;
    let email = document.getElementById('email2').value;
    let rg = document.getElementById('rg2').value;
    let usuario = document.getElementById('usuario2').value;

    const modal = document.querySelector('dialog');
    const fecharModal = document.getElementById('fechar');
    let alteraTextp = document.getElementById('texto-aviso');

    if (!expNome.test(nome2)) {

        modal.showModal();
        alteraTextp.textContent = "Nome inválido!!!";
        document.getElementById('nome2').focus();
        return false;

    }

    else if (!expCPF.test(cpf)) {

        modal.showModal();
        alteraTextp.textContent = "CPF inválido!!!";
        document.getElementById('cpf2').focus();
        return false;

    }
    else if (!expEmail.test(email)) {

        modal.showModal();
        alteraTextp.textContent = "E-mail inválido!!!";
        document.getElementById('email2').focus();
        return false;

    }

    else if (!expTelefone.test(fone)) {

        modal.showModal();
        alteraTextp.textContent = "Telefone inválido!!!";
        document.getElementById('fone2').focus();
        return false;

    }

    else if (!expCEP.test(cep)) {

        modal.showModal();
        alteraTextp.textContent = "CEP inválido!!!";
        document.getElementById('cep2').focus();
        return false;

    }

    else if (!expDTNas.test(dataNas)) {

        modal.showModal();
        alteraTextp.textContent = "Data de nascimento inválido!!!";
        document.getElementById('dataNas2').focus();
        return false;

    }

    else if (!expSenha.test(senha)) {

        modal.showModal();
        alteraTextp.textContent = "Senha inválido!!!";
        document.getElementById('senha2').focus();
        return false;

    }

    else if (!expRg.test(rg)) {

        modal.showModal();
        alteraTextp.textContent = "RG inválido!!!";
        document.getElementById('rg2').focus();
        return false;

    } else if (!expUsuario.test(usuario)) {
        modal.showModal();
        alteraTextp.textContent = "Nome de usuário inválido!!!";
        document.getElementById('usuario2').focus();
        return false;
    }

    else {

        modal.showModal();
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

