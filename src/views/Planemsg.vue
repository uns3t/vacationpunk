<template>
    <div>
        <div class="planesearch">
            <div style="position: relative;top: 20%;">
                <el-input v-model="planeform.planestartplace" placeholder="出发" style="width: 200px" ></el-input>
                <el-input v-model="planeform.planeendplace" placeholder="目的地" style="width: 200px"></el-input>
                <el-date-picker
                        v-model="planeform.date"
                        type="date"
                        placeholder="时间"  style="width: 200px">
                </el-date-picker>

                <el-select multiple :placeholder="ticketnum" style="width: 200px">

                    <el-option>
                        <span style="float: left">机票数</span>
                        <span style="float: right">
                        <el-input-number size="small" v-model="planeform.ticket"  :min="1" :max="10"></el-input-number>
                    </span>
                    </el-option>
                </el-select>
                <el-button type="primary" @click="toplanemsg">出发</el-button>
            </div>
        </div>
        <div class="planelist">
            <div v-for="temp in planedata">
                <Planedisplay :planeone="temp"></Planedisplay>
            </div>
        </div>
    </div>
</template>

<script>
    import Planedisplay from "../component/Planedisplay.vue"

    export default {
        name: "Planemsg",
        components:{
            Planedisplay,
        },
        data(){
            return{
                planeform:{
                    planestartplace:"",
                    planeendplace:"",
                    date:"",
                    ticket:1,
                },
                planedata:[]
            }
        },
        computed:{
            ticketnum(){
                return "机票数 · "+this.planeform.ticket
            }
        },
        methods:{
            async toplanemsg(){
                window.planeform=this.planeform
                console.log(window.planeform)
                this.planeform=window.planeform
                let res=await $axios.post("/planeList",window.planeform)
                console.log(res.data.planelist)
                this.planedata=res.data.planelist
            }
        },

        created:async function () {
            console.log(window.planeform)
            this.planeform=window.planeform
            let res=await $axios.post("/planeList",window.planeform)
            console.log(res.data.planelist)
            this.planedata=res.data.planelist
        }
    }
</script>

<style scoped>
    .planesearch{
        height: 70px;
        width: 100%;
        text-align: center;
        background: rgba(243, 156, 18,0.9);
        margin: 0;
    }
    .planelist{
        width: 500px;
        background: #13ce66;
        margin: 0 auto;
    }
</style>
