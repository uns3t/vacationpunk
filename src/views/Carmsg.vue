<template>
    <div>
        <div class="carmapdiv">
            <baidu-map class="carmap" zoom="12.8">
                <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                <bm-local-search keyword="租车" :auto-viewport="true" :location="carform.carplace" style="display: none"></bm-local-search>
            </baidu-map>
        </div>

        <div class="carlist">
            <div v-for="temp in cardata">
                <Cardisplay :carone="temp"></Cardisplay>
            </div>
        </div>
    </div>
</template>

<script>
    import Cardisplay from "../component/Cardisplay.vue";

    export default {
        name: "Carmsg",
        components:{
            Cardisplay,
        },
        data(){
            return{
                carform:{},
                cardata:[]
            }
        },
        created:async function () {
            this.carform=window.carform
            console.log(window.carform)
            let res=await $axios.post("/carList",window.carform)
            console.log(res.data.carlist)
            this.cardata=res.data.carlist
        }
    }
</script>
<style scoped>
    .carmap{
        width: 100%;
        height: 100%;
    }
    .carmapdiv{
        float: left;
        /*position: fixed;*/
        width: 40%;
        height: 90vh;
        margin: 5px;
    }
    .carlist{
        float: left;
        width: 50%;
        height: 200px;
        margin: 10px;
    }

</style>
