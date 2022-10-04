const app = Vue.createApp({
    methods: {
        alertBtn() {
            alert("Show Alert");
        },
        firstInput(event) {
            this.firstOutput = event.target.value;
        },
        secondInput(event) {
            this.secondOutput = event.target.value;
        },
        confirmSecondInput() {
            this.confirmSecondOutput = this.secondOutput;
        }
    },
    data() {
        return {
            firstOutput: '',
            secondOutput: '',
            confirmSecondOutput: ''
        }
    }
})

app.mount('#assignment');