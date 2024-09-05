const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: {},
    modal: false,
  },
  methods: {
    getProdutos() {
      fetch("./api/produtos.json").then((res) => {
        res.json().then((json) => {
          console.log(json);
          this.produtos = json;
        });
      });
    },
    getProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`).then((res) => {
        res.json().then((json) => {
          console.log(json);
          this.produto = json;
          this.modal = true;
        });
      });
    },
    adicionarProduto() {
      console.log("Clicou no botão");
    },
  },
  filters: {
    precoItem(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.getProdutos();
  },
});
