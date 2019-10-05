import Vue from "vue";
import Router from "vue-router";
import Hotel from "./views/Hotel.vue";
import Hotelmsg from "./views/Hotelmsg.vue";
import Car from "./views/Car.vue";
import Carmsg from "./views/Carmsg.vue";
import Plane from "./views/Plane.vue";
import Planemsg from "./views/Planemsg.vue";
import Taxi from "./views/Taxi.vue";
import Taximsg from "./views/Taximsg.vue";


Vue.use(Router)

window.$router=new Router({
    mode:'history',
    routes:[
        {
            path:"/hotel",
            component:Hotel
        },
        {
            path: "/hotelmsg",
            component: Hotelmsg
        },
        {
            path: "/plane",
            component: Plane
        },
        {
            path:"/planemsg",
            component:Planemsg
        },
        {
            path: "/car",
            component:Car
        },
        {
            path:"/carmsg",
            component:Carmsg
        },
        {
            path:"/taxi",
            component:Taxi
        },
        {
            path:"/taximsg",
            component:Taximsg
        }
    ]
})


export default window.$router
