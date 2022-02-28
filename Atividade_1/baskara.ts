function baskara (a:number, b:number ,c : number){
    const delta = b*b - (4*a*c);
    if ( delta < 0 ) { 
        return 'Delta não pode ser negativo'
    }
    else{
        const x1 = (-b + Math.sqrt(delta))/2*a
        const x2 = (-b - Math.sqrt(delta))/2*a
        
        return `Os resultados das raízes são ${x1} e ${x2}`
    }
}
        console.log(baskara(2,8,4))