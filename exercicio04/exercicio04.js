function reajustar(){
    let valor = Number(document.getElementById('salario').value);
    let taxa = 0

    if(valor>100){
        taxa = valor * 10/100;
    }

    let valorTotal = salario + taxa;

    resultado.innerHTML = `
    desconto de R$ ${bonus.toFixed(2)} <br>
    preco final R$ ${valorTotal.toFixed(2)}
    `;
}