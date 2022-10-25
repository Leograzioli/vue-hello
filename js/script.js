const {createApp} = Vue;

createApp({
    data() {
        return {
            message: "Ciao come stai? :)",
            person: "",
            srcImage: "",
            greet: ""
        }
    }, 
    methods: {
        witchTutor() {
            if (this.person === "mauro") {
                this.srcImage = "img/6890001.jpg"
                this.greet = `welcome ${this.person}`
            } else if (this.person === "marco"){
                this.srcImage = "img/metallo-dado-d20-da-20-mm.jpg"
                this.greet = `welcome ${this.person}`
            } else if (this.person === "olga") {
                this.srcImage = "img/shutterstock_1830294143.webp"
                this.greet = `welcome ${this.person}`
            } else {
                this.greet = `please picka name`
            }
        }
    }
}).mount('#app')