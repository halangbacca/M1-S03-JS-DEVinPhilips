const verificaPalindromo = (nome) => {
    let reverso = nome.split('').reverse().join('');
    if(reverso == nome){
        console.log(true);
    }else{
        console.log(false);
    }
}

const teste1 = verificaPalindromo("ana");
// true

const teste2 = verificaPalindromo("julia");
// false