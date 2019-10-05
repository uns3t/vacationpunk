<template>
    <div>

        <div class="taxilist">
            <div v-for="temp in taxidata">
                <Taxidisplay :taxione="temp"></Taxidisplay>
            </div>
        </div>
    </div>
</template>

<script>
    import Taxidisplay from "../component/Taxidisplay.vue";
    export default {
        name: "Taximsg",
        data(){
          return {
              taxidata:[],
              taxiform:{}
          }
        },
        components: {
            Taxidisplay
        },
        created: async function () {
            console.log(window.taxiform)
            let res = await $axios.post("/taxiList", window.taxiform)
            console.log(res.data.taxilist)
            this.taxidata = res.data.taxilist
        }
    }
</script>

<style scoped>

</style>
