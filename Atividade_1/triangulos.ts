function triangulos (a:number, b:number, c:number) {

    if( a+b <= c || a+c <= b || b+c <= a ) {
        return  ' Não é um triangulo!'

    }
    else if( a==b && a==c && b==c ){

       return 'Triangulo formado é equilatero, apresenta todos os lados iguais.';

   }
   else if ( a==b || b==c || a==c )   { 

       return 'Triangulo formado é isoceles, apresenta dois lados iguais.';

   }
   else {
       return 'Triangulo formado é escaleno, apresenta todos os lados diferentes.';


   }
}

console.log( triangulos(1,2,3) )