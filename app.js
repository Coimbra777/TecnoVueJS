const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
  },
  methods: {
    getProdutos() {
      fetch("./api/produtos.json").then((res) => {
        console.log(res);
        res.json().then((json) => {
          this.produtos = json;
        });
      });
    },
  },
  filters: {
    precoProduto(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.getProdutos();
    console.log(this.produtos);
  },
});
