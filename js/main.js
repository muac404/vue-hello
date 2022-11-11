const {createApp} = Vue;

createApp({
    data () {
        return {
            message: "Hello Vue!",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
            skillOne: "Easy to learn",
            skillTwo: "Easy to use",
            skillThree: "Best Js Framework for YOU",
        }
    }
}).mount("#app");