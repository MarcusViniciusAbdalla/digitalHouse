const ehMaiorIdade = (idade) => {
    if (idade >= 18 && idade <= 69) {
        return 'É maior de idade';
    } else if (idade >= 70) {
        return 'Já é aposentado. Tá aproveitando as férias.';
    } else {
        return 'É menor de idade';
    }
};

console.log(ehMaiorIdade(20));
console.log(ehMaiorIdade(17));
console.log(ehMaiorIdade(70));

const comparaStrings = (string1, string2) => {
    if (string1 === string2) {
        return true
    } else {
        return 'Não são iguais'
    }
};

console.log(comparaStrings('Xuxinha', 'Xuxinha'));
console.log(comparaStrings('Xuxinha', 'Nena'));

const saoDiferentes = (number1, number2) => 
    number1 != number2 ? 'Sim, são diferentes!' : 'Não, são iguais!';

console.log(saoDiferentes(1, 1));
console.log(saoDiferentes(2, 1));