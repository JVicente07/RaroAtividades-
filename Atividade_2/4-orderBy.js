const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
function orderBy(students, filters){
    const result = students.map((student)=>{
        let obj = {}

        filters.forEach((filter)=>{
            obj[filter] = student[filter]
        })
        return obj
    })
 return (result.sort())

}
 

console.log(orderBy(alunos, ['nota', 'nome']))