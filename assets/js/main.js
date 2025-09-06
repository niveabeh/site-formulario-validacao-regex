function ValidarForm() {

    const expNome = /^[A-zÁ-ü]{3,}([ ][A-zÁ-ü]{2,})+$/;
    const expCPF = /^([0-9]{3}[.]){2}[0-9]{3}[-][0-9]{2}$/;
    const expTelefone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
    const expCEP = /^[0-9]{5}[-][0-9]{3}$/;
    const expDTNas = /^([0-9]{2}[\/]){2}[0-9]{4}$/;
    const expSenha = /^[A-z0-9]{4,}.{1,}$/;
    const expRg = /^[0-9]{1}[.][0-9]{3}[\.][0-9]{3}$/

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let fone = document.getElementById('fone').value;
    let cep = document.getElementById('cep').value;
    let dataNas = document.getElementById('dtnasc').value;
    let senha = document.getElementById('senha').value;
    let rg = document.getElementById('rg').value;

    if (!expNome.test(nome)) {

        alert("Favor preencher o campo nome corretamente!");
        document.getElementById('nome').focus();
        return false;
        
    }

    else if (!expCPF.test(cpf)) {

        alert("Favor preencher o campo CPF corretamente!");
        document.getElementById('cpf').focus();
        return false;

    }

    else if (!expTelefone.test(fone)) {

        alert("Favor preencher o campo telefone corretamente!");
        document.getElementById('fone').focus();
        return false;

    }

    else if (!expCEP.test(cep)) {

        alert("Favor preencher o campo CEP corretamente!");
        document.getElementById('cep').focus();
        return false;

    }

    else if (!expDTNas.test(dataNas)) {

        alert("Favor preencher o campo data de nascimento corretamente!");
        document.getElementById('dataNas').focus();
        return false;

    }

    else if (!expSenha.test(senha)) {

        alert("Favor preencher o campo senha corretamente!");
        document.getElementById('senha').focus();
        return false;

    }

    else if (!expRg.test(rg)) {

        alert("Favor preencher o campo RG corretamente!");
        document.getElementById('rg').focus();
        return false;

    }

    else {

        alert("Dados enviados com sucesso!!!")

        return false;

    }

}