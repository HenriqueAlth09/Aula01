function calcularFrete() {
      const valorCompra = parseFloat(document.getElementById("valorCompra").value);
      
      if (isNaN(valorCompra) || valorCompra <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido.";
        return;
      }
      
      let frete = 0;
      if (valorCompra >= 150) {
        frete = 0;
      } else {
        frete = 20;
      }
      
      const valorTotal = valorCompra + frete;
      
      document.getElementById("resultado").innerHTML = 
        `Valor do frete: R$ ${frete.toFixed(2)} <br> 
         Valor total da compra: R$ ${valorTotal.toFixed(2)}`;
    }