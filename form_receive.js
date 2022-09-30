function enviar() {
    var nome = document.getElementsByName("nome");
    if(nome.value != "") {
        alert('Obrigada sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso!')
    }

}