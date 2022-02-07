new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        // ele pegar o resultado e imprime um resultado se for igual á 37 "valor igual " se não "VALOR DIFERENTE"
        resultado() {
            return this.valor == 37 ? "ESTE VALOR É IGUAL A 37 :)" : "ESTE VALOR É DIFERENTE!!!!";
        },
    },
    watch: {
        //Reset do contador
        valor(novo, antigo) {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        },
    },
});