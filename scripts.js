

let numberOne = Number(prompt("Digite aqui o primeiro número:"))
let numberTwo = Number(prompt("Digite aqui o segundo número:"))

let sum = Number(numberOne) + Number(numberTwo);
let sub = Number(numberOne) - Number(numberTwo);
let div = Number(numberOne) / Number(numberTwo);
let restDiv = Number(numberOne) % Number(numberTwo);

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O restante da divisão dos dois números é: ${restDiv}`);



if(sum & 1) {
    alert("A soma dos dois idenfitica que o resultado final é impar")
} else {
    alert("A soma dos dois idenfitica que o resultado final é par")
}

if(numberOne == numberTwo) {
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes um do outro")
}