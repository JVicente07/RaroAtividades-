function fila() {
    const fila = [];
    
  
    const adicionar = (elemento) => {
        fila.push(elemento)
    };
  
    const remover = () => {
      // aqui, você deve utilizar o método correto para remover um novo elemento à variável de fila.
      return fila.splice(0,1)
    };

    const listar = () => {
        console.log(fila)
    }

  
    return {listar, adicionar, remover };
  }
  
  function pilha() {
    const pilha = [];
  
    const adicionar = (elemento) => {
      // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de pilha.
      pilha.push(elemento)
    };
  
    const remover = () => {
      // aqui, você deve utilizar o método correto para remover um novo elemento à variável de pilha.
     return pilha.pop()
    };
  
    return { adicionar, remover };
  }
  
  const fila1 = fila();
  fila1.adicionar(1);
  fila1.adicionar(2);
  fila1.adicionar(3);
 
  console.log('valor esperado: 1; valor recebido: ' , fila1.remover()[0]);
  console.log('valor esperado: 2; valor recebido: ', fila1.remover()[0]);
  console.log('valor esperado: 3; valor recebido: ', fila1.remover()[0]);
  
  
  const pilha1 = pilha();
  pilha1.adicionar(1);
  pilha1.adicionar(2);
  pilha1.adicionar(3);

  
  console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
  console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
  console.log('valor esperado: 1; valor recebido: ', pilha1.remover());
