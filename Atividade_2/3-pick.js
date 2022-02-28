const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];


function pick(alunos, parametros){
    let alunos_reduzidos = []
    let num_parametros = parametros.length
    alunos.forEach(element => {
        let aluno = new Object()
        for(let i = 0; i < num_parametros; i++){
            aluno[parametros[i]] = element[parametros[i]]
        }
        alunos_reduzidos.push(aluno)
       
    });
    return alunos_reduzidos
}

console.log(pick(alunos,['nome','nota']))