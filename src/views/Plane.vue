<template>
    <div>
        <div class="planebanner">
            同时搜索数百家旅游网站
        </div>
        <div class="planesearch">
            <div style="position: relative;top: 38%;">
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
    </div>

</template>

<script>
    export default {
        name: "Plane",
        data(){
            return{
                planeform:{
                    planestartplace:"",
                    planeendplace:"",
                    date:"",
                    ticket:1,
                }
            }
        },
        computed:{
            ticketnum(){
                return "机票数 · "+this.planeform.ticket
            }
        },
        methods:{
            toplanemsg(){
                window.planeform=this.planeform
                console.log(window.planeform)
                this.$router.push("/planemsg")
            }
        }
    }
</script>

<style scoped>
    .planebanner{
        position: relative;
        top: 100px;
        text-align:center;
        font-size: 30px;
        color: #ffffff;
    }
    .planesearch{
        height: 200px;
        width: 100%;
        text-align: center;
        position: relative;
        top: 170px;
        background: rgba(243, 156, 18,0.9);
        border-radius: 5px;
    }
</style>
