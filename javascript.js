document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("prontinho, entraremos em contato para esclarecer suas dúvidas!")
  }else{
    alert("por favor, insira seu nome e email!")

    }
}
function voltar() {
    window.history.back();
        }
