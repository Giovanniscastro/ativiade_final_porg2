let body = document.querySelector("body");
let main = document.querySelector("main");

body.onload = function() {
    console.log("Loading o body"); 
    buscarclientes();   
    setInterval(buscarclientes, 60000);
}
function buscarclientes() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const listaclientes = JSON.parse(this.responseText);
        tabelaclinetes(listaclientes);
    }
xhttp.open("GET", "http://127.0.0.1:5000/clientes", true);
xhttp.send();    
}
function tabelaclinetes(listaclientes) {
   let tabela = `<table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>CPF</th>
                <th>E-mail</th>
                <th>Endereço</th>
                <th>Telefone</th>
            </tr>`;

  for(let i=0; i < listaclientes.length; i++) {
    tabela += `<tr>
                <td>${listaclientes[i].cod_cliente}</td>
                <td>${listaclientes[i].nome}</td>
                <td>${listaclientes[i].sobrenome}</td>
                <td>${listaclientes[i].cpf}</td>
                <td>${listaclientes[i].email}</td>
                <td>${listaclientes[i].endereco}</td>
                <td>${listaclientes[i].telefone}</td>
                </tr>`;
}        
tabela += `</table>`;
main.innerHTML = tabela;
}

