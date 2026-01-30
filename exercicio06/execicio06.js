function calcular() {
    // Usando let em todas as variáveis
    let compra = parseFloat(document.getElementById("compra").value);
    let cashback = 0;
    let liquido = 0;

    // Se o valor da compra for maior que 300, aplica 5% de cashback
    if (compra > 300) {
        cashback = compra * 0.05;
    }

    // Valor líquido é a compra menos o cashback
    liquido = compra - cashback;

    // Mostra os resultados formatados
    document.getElementById("cashback").innerText = "Cashback: R$ " + cashback.toFixed(2);
    document.getElementById("liquido").innerText = "Valor líquido da compra: R$ " + liquido.toFixed(2);
}