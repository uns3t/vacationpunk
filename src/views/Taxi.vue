<template>
    <div class="Taxi">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label style="color: #ffffff;font-size: 23px;font-weight: bold" >预订机场出租车</label>
        <br/>
        <label style="color: #ffffff;font-size: 16px" >机场接送轻松往返住宿</label>
        <br/>
        <br/>
        <el-form :inline="true" :model="taxiform" label-width="80px" style="width: 100%">
            <el-form-item style="width: 200px">
                <el-input v-model="taxiform.taxistartplace" placeholder="上车地点"></el-input>
            </el-form-item>
            <el-form-item style="width: 200px">
                <el-input v-model="taxiform.taxiendplace" placeholder="下车地点"></el-input>
            </el-form-item>
            <el-form-item >
                <el-time-select
                        v-model="taxiform.taxitime"
                        :picker-options="{
                            start: '00:00',
                            step: '00:05',
                            end: '23:59'
                          }"
                        placeholder="时间">
                </el-time-select>
            </el-form-item>

            <el-form-item>
                <el-select multiple :placeholder="calpersonnum" style="width: 200px">

                    <el-option>
                        <span style="float: left">客人</span>
                        <span style="float: right">
                        <el-input-number size="small" v-model="taxiform.personnum"  :min="1" :max="5"></el-input-number>
                    </span>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="totaximsg">搜寻</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Taxi",
        data(){
            return{
                taxiform:{
                    taxistartplace:"",
                    taxiendplace:"",
                    taxitime:"",
                    personnum:1
                }
            }
        },
        computed:{
            calpersonnum(){
                return "客人: "+this.taxiform.personnum
            }
        },
        methods:{
            totaximsg(){
                window.taxiform=this.taxiform
                console.log(window.taxiform)
                this.$router.push("/taximsg")
            }
        }
    }
</script>

<style scoped>
    .Taxi{
        text-align: center;
        background-image: url(../assets/image/bg0.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 20px;
        height: 400px;
    }
</style>
