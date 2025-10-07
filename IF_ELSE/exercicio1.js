let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
if(!numero1){
    alert("Digite um número válido!")
}else if (numero1 > numero2) {
    alert(`Número ${numero1} é maior que número ${numero2}`)

} else {
     alert(`Número ${numero2} é maior que número ${numero1}`)
}


