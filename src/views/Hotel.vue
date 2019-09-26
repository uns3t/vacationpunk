<template>
    <div id="hotel">
        <el-form :inline="true" :model="hotelform" label-width="80px" style="width: 100%">
            <el-form-item style="width: 200px">
                <el-input v-model="hotelform.name" placeholder="地区"></el-input>
            </el-form-item>

            <el-date-picker :inline="true"
                    v-model="hotelform.date1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>

            <el-select placeholder="请选择">
                <el-option>
                    <el-input-number v-model="num"  :min="1" :max="10"></el-input-number>
                </el-option>
            </el-select>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Hotel",
        data(){
            return {
                num:0,

                hotelform: {
                    name:"",
                    date1:"",
                    date2:""
                }
            }
        }
    }
</script>

<style scoped>
    #hotel{
        background: rgba(0,255,255,0.6);
        width: auto;
        height: 100%;
        /*border-radius: 20px;*/
        padding: 10px;
    }
</style>
