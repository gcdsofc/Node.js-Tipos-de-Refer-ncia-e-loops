const projeto = {
    nome: "Sistema de Monitoramento",
    versao: "1.0.2",
    status: "Ativo",
    tags: ["Docker", "Linux", "Node.js", "Python"]
};

console.log("--- Objeto Principal ---");
console.log(projeto);

console.log("\n--- Iteração nas propriedades do objeto (for...in) ---");
for (let chave in projeto) {
    console.log(chave + ": " + projeto[chave]);
}

console.log("\n--- Iteração nos itens do array (for...of) ---");
for (let tag of projeto.tags) {
    console.log("Tag: " + tag);
}

console.log("\n--- Comparação entre tipos de referência ---");
const outroProjeto = { nome: "Sistema de Monitoramento" };
const referenciaIgual = projeto;

console.log("Objetos com mesmos dados são iguais? " + (projeto === outroProjeto));
console.log("Objeto comparado com sua própria referência é igual? " + (projeto === referenciaIgual));

console.log("\n--- Exemplo de cópia por referência (Mutação) ---");
const copiaReferencia = projeto;
copiaReferencia.status = "Interrompido";
console.log("Status do original após alterar a cópia: " + projeto.status);

console.log("\n--- Exemplo de cópia com Spread Operator (Shallow Copy) ---");
const copiaReal = { ...projeto };
copiaReal.status = "Finalizado";
console.log("Status do original: " + projeto.status);
console.log("Status da cópia com spread: " + copiaReal.status);

console.log("\n--- Transformação em JSON ---");
const jsonString = JSON.stringify(projeto);
console.log("Objeto serializado:");
console.log(jsonString);