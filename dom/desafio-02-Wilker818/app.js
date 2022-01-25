new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor1: '',
    },
    methods: {
        alert() {
            alert("Você Clicou Nesse Botão!!!")
        },
        queryForKeywords(event) {
            const value1 = event.target.value
            this.valor1 = value1

        },
        queryForKeywords2(event) {
            const value = event.target.value
            this.valor = value
            alert("Você Apertou Enter para Salvar!!!")
        },

    },
})