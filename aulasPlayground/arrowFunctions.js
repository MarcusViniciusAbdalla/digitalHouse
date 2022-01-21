let sum = (num1,num2) => num1 + num2;

let dobro = number => number*2;


const somar = () => {
    console.log("Estou em uma arrow function")
}

somar();

const soma = (numeroA , numeroB) => {
    console.log("Recebi um numero" + numeroA)
    return numeroA + numeroB
}

console.log(somar(20+30));
