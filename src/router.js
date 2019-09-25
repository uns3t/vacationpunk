import Vue from "vue";
import Router from "vue-router";
import Hotel from "./views/Hotel.vue";


Vue.use(Router)

window.$router=new Router({
    mode:'history',
    routes:[
        {
            path:"/hotel",
            component:Hotel
        }
    ]
})


export default window.$router
