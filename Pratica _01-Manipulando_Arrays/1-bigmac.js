const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

function fazUmBigMac (ingredientes){
  let reduzida = ingredientes.reduce(( acumulador, valorAtual ) => acumulador + ', ' + valorAtual)
  return reduzida
};
console.log (fazUmBigMac(ingredientes))
  
  