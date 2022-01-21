function digaMeuNome() {
    //Escopo da minha função
    console.log('Xuxinha');
};

digaMeuNome();

function soma(numero1, numero2, numero3 = 0) {
    return numero1 + numero2 + numero3;
}

console.log(soma(10, 5)) // 10 + 5 + undefined + undefined
console.log(soma(100, 50, 30))

const digaHello = () => 'Hello, Digital Housers';
const digaHello2 = () => {
    return 'Hello, Digital Housers 2'
};

console.log(digaHello());
console.log(digaHello2());

