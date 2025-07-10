console.log("js loaded");
const app = Vue.createApp({
    data(){
            return{
                    firstName:"",
                    lastName:"",
                    quantity: "0",
                    pricePerItem: "10"
                  };
          },
    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        totalPrice(){
            return this.quantity*this.pricePerItem;
        }

    },
    methods: {
        clearField(){
                        this.firstName="",
                        this.lastName="",
                        this.quantity="0"
        }

    }
});
app.mount("#app");