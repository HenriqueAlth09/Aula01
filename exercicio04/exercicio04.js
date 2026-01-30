function calcularTaxa() {
      const valor = parseFloat(document.getElementById("valor").value);
      let taxa = 0

      
      if (isNaN(valor) || valor <= 100) {
      }
      
      if (valor < 100) {
      } else {
       taxa = valor * 10/100
      }
      
      const valorTotal = valor + taxa;
      
      document.getElementById("resultado").innerHTML = 
        `Valor do frete: R$ ${taxa.toFixed(2)} <br> 
         Valor total da compra: R$ ${valorTotal.toFixed(2)}`;
    }