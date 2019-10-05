<template>
    <div id="hotel">
        <br/>
        <br/>
        <label style="color: #000000;font-size: 23px" >缤纷四季优惠搜不停</label>
        <br/>
        <label style="color: #000000;font-size: 16px" >从舒适的乡村民宿到时髦的都市公寓</label>


        <br/>
        <br/>
        <el-form :inline="true" :model="hotelform" label-width="80px" style="width: 100%">
            <el-form-item style="width: 200px">
                <el-input v-model="hotelform.name" placeholder="地区"></el-input>
            </el-form-item>
            <el-form-item >
                <el-date-picker :inline="true"
                                v-model="hotelform.date"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="入住"
                                end-placeholder="退房">
                </el-date-picker>
            </el-form-item>
            <el-form-item >
                <el-select multiple :placeholder="person" style="width: 250px">
                    <el-option>
                        <span style="float: left">成人</span>
                        <span style="float: right">
                        <el-input-number size="small" v-model="num1"  :min="1" :max="10"></el-input-number>
                    </span>
                    </el-option>
                    <el-option>
                        <span style="float: left">儿童</span>
                        <span style="float: right">
                        <el-input-number size="small" v-model="num2"  :min="0" :max="10"></el-input-number>
                    </span>
                    </el-option>
                    <el-option>
                        <span style="float: left">客房数</span>
                        <span style="float: right">
                        <el-input-number size="small" v-model="num3"  :min="1" :max="10"></el-input-number>
                    </span>
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="getHotelList">开启旅行</el-button>
            </el-form-item>
        </el-form>




    </div>
</template>

<script>
    export default {
        name: "Hotel",
        data(){
            return {
                num1:1,
                num2:1,
                num3:1,

                hotelform: {
                    name:"",
                    date:"",
                }
            }
        },
        computed:{
            person:function () {
                return "成人 "+this.num1+" · "+" 儿童 "+this.num2+" · "+" 客房数 "+this.num3
            }
        },
        methods:{
            getHotelList(){
                window.hotelform=this.hotelform
                this.$router.replace('/hotelmsg')

            }
        }
    }
</script>

<style scoped>
    #hotel{
        text-align: center;
        background: #F0F0F0;
        padding: 20px;
        height: 200px;

    }
</style>
