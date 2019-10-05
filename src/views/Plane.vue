<template>
    <div class="Plane">
        <div class="planebanner"></div>
        <div class="planesearch">
            <br/>
            <br/>
            <div style="font-size: 25px;color: #f0f0f0;font-weight: bold">
                同时搜索数百家旅游网站

            </div>
            <div style="position: relative;top: 15%;">
                <el-form :inline="true" :model="planeform" label-width="80px">

                <el-form-item>
                    <el-input v-model="planeform.planestartplace" placeholder="出发" style="width: 200px" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="planeform.planeendplace" placeholder="目的地" style="width: 200px"></el-input>

                </el-form-item>
                <el-form-item>
                    <el-date-picker
                            v-model="planeform.date"
                            type="date"
                            placeholder="时间"  style="width: 200px">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-select multiple :placeholder="ticketnum" style="width: 200px">

                        <el-option>
                            <span style="float: left">机票数</span>
                            <span style="float: right">
                        <el-input-number size="small" v-model="planeform.ticket"  :min="1" :max="10"></el-input-number>
                    </span>
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="toplanemsg">出发</el-button>
                </el-form-item>
                </el-form>



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

    .Plane{
        height: 600px;
        background-image: url(../assets/image/bg0.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .planebanner{
        height: 200px;
        font-size: 30px;
        color: #ffffff;
    }
    .planesearch{
        height: 200px;
        text-align: center;
        background: rgba(243, 156, 18,0.9);
        border-radius: 5px;
    }
</style>
