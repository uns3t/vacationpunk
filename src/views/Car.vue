<template>
    <div class="Car">
        <br/>
        <br/>
        <label style="color: #000000;font-size: 23px" >不管哪种旅途，都有好车相伴</label>
        <br/>
        <label style="color: #000000;font-size: 16px" >比较大型租车公司的优惠车型</label>
        <br/>
        <br/>
        <el-form :inline="true" :model="carform" label-width="80px" style="width: 100%">
            <el-form-item style="width: 200px">
                <el-input v-model="carform.carplace" placeholder="地区"></el-input>
            </el-form-item>
            <el-form-item >
                <el-date-picker :inline="true"
                                v-model="carform.date"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="租车日期"
                                end-placeholder="还车日期">
                </el-date-picker>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="getCarList">搜索车型</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data(){
            return {

                carform: {
                    carplace:"",
                    date:"",
                }
            }
        },

        methods:{
            getCarList(){
                window.carform=this.carform
                this.$router.replace('/carmsg')

            }
        }
    }
</script>

<style scoped>
    .Car{
        text-align: center;
        background: #F0F0F0;
        padding: 20px;
        height: 200px;
    }
</style>
