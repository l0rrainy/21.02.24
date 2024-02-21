const sortear = () => {
    var nomes = ["Lolo, ", "Mari, ", "Gigi, "," Gabriel, ", "calebe, ", "jhnei, "];

    let h1Nome = document.getElementById("nome"); //document e . é metodo, 
                                                                                                                  
    let achouNumero = false; // let vai sumir na memoria depoiis de terminar a função; 
    let numeroSorteado;

    while (achouNumero == false) { //estrutura de repetição
        numeroSorteado = Math.floor(Math.random() * 100);  // math.random vai gerar um numero aleatorio --- encapsulamento esse parentese azulzinho, math.random esta encapsulado e esta senfo multiplicado por 100
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }

    switch (numeroSorteado) {  //switchcase é interruptor : 
        case 0: //trocar caso a variavel seja 0
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1: //trocar caso a variavel seja 1
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2: //trocar caso a variavel seja 2
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        default:
            h1Nome.innerText = "ops! nome nao consta na lista";
        
    }
    h1Nome.innerText += " O número sorteado foi: " + numeroSorteado; //operador "+=" vai recebe a propria variavel mai oque eu quero que apareça.
}