function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);

    let desconto = 0;
    if (valor > 100) {
        desconto = valor * 0.10;
    }

    let valorFinal = valor - desconto;

    document.getElementById("desconto").textContent = 
        "Desconto: R$ " + desconto.toFixed(2);
    document.getElementById("final").textContent = 
        "Valor final a pagar: R$ " + valorFinal.toFixed(2);
}