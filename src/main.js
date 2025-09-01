//Criar um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
const alunos = [
    {nome: "Francisco", nota:8},
    {nome: "Paulo", nota:5},
    {nome: "Bruno", nota:6},
    {nome: "Carlos", nota:4},
    {nome: "Eduarda", nota: 9}
];

//• Criar uma função que retornará apenas os alunos que tiveram nota maior ou igual a 6;
const aprovador = (lista) => {
    return lista.filter(alunos => alunos.nota >= 6);
};

console.log("Alunos aprovados:");
console.log(aprovador(alunos));