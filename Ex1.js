function fazGet(url){
        let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
        return request.responseText
}
 function criaLinha(dados){
 	linha = document.createElement("tr");
 	tdId = document.createElement("td");
 	tdNome = document.createElement("td");
 	tdId.innerHTML = dados.id
 	tdNome.innerHTML = dados.nome

 	linha.appendChild(tdId);
 	linha.appendChild(tdNome);

 	return linha;
}

function main(){
	let data = fazGet("https://dadosabertos.camara.leg.br/api/v2/partidos/36898/membros");
	let usuarios = JSON.parse(data);
	let tabela = document.getElementById("tabela");
	
	usuarios.forEach(element => {
		let linha = criaLinha(element);
		tabela.appendChild(linha);
	})
}
main()