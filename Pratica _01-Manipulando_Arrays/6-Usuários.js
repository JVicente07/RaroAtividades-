const usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
];
  
function atividade(arr){
    const usuariosAtivos = [] 
    const usuariosInativos = []
    arr.map(usuario => {
        if(usuario.ativo === true){
            usuariosAtivos.push(usuario)
        } else {
            usuariosInativos.push(usuario)
        }
    })

   console.log(usuariosAtivos);
   console.log(usuariosInativos)

}

atividade(usuarios)