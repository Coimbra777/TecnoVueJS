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
  created() {
    this.getProdutos();
    console.log(this.produtos);
  },
});
