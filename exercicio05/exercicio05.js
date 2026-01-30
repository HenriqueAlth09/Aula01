function calcular() {
    // Usando let em todas as variáveis
    let mensalidade = parseFloat(document.getElementById("mensalidade").value);
    let dias = parseInt(document.getElementById("dias").value);
    let multa = 0;
    let total = 0;

    // Se houver atraso, aplica 2% de multa
    if (dias > 0) {
        multa = mensalidade * 2/100;
    }

    // Calcula total
    total = mensalidade + multa;

    // Mostra os resultados formatados
    document.getElementById("multa").innerText = "Multa: R$ " + multa.toFixed(2);
    document.getElementById("total").innerText = "Total a pagar: R$ " + total.toFixed(2);
}