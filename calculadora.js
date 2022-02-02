function calculadora(){
    const operacao = Number (prompt ["Escolha a operação: \n 1 - Soma + \n 2 -subtração - \n 3 - multiplicação * \n 4 - divisão / \n 5 - resto % \n 6 - exponeciação **"]);
    console.log(operacao);

    let n1 = Number (prompt["Insira o primeiro valor"]);
    let n2 = Number (prompt["Insira o segundo valor"]);
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert ("$ [n1] + $ [n2] + $ [resultado]");
    }


if(operacao==1){
    soma();
    }
    else if(operacao==2){
    subtracao();
    }
    else if(operacao==3){
    mutiplicacao();
    }
    else if(operacao==4){
    divisao();
    }
    else if(operacao==5){
    resto();
    }
    else if(operacao==6){
    exponeciacao();
    }

}
calculadora();