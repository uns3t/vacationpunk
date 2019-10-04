<template>
    <div id="hotelmsg">
        <div id="search">
            <br/>
            <br/>
            <el-form :inline="true" :model="Hotel_form" label-width="80px" style="width: 100%">
                <el-form-item>
                    <el-input v-model="Hotel_form.name" placeholder="地区"  style="width: 220px"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-date-picker :inline="true"
                                    v-model="Hotel_form.date"
                                    type="daterange"
                                    range-separator="-"
                                    start-placeholder="入住"
                                    end-placeholder="退房" style="width: 220px">
                    </el-date-picker>
                </el-form-item>

                <el-form-item style="width: 220px">
                    <el-select multiple :placeholder="person">
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
                <br/>
                <el-form-item>
                    <el-button type="primary">开启旅行</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="hotellist">
            <div v-for="temp in hoteldata">
                <Hoteldispaly :hotelname="temp.hotelname" :hotelscore="temp.hotelscore" :hoteladdr="temp.hoteladdr" :hotelimg="temp.hotelimg"></Hoteldispaly>
            </div>
        </div>
    </div>

</template>

<script>
    import Hoteldispaly from "../component/Hoteldispaly.vue";

    export default {
        name: "Hotelmsg",
        components:{
            Hoteldispaly,
        },

        data(){
            return {
                num1:1,
                num2:1,
                num3:1,
                test:"test",
                Hotel_form: {
                    name:"",
                    date:"",
                },
                hoteldata:[]
            }
        },
        computed:{
            person:function () {
                return "成人 "+this.num1+" · "+" 儿童 "+this.num2+" · "+" 客房数 "+this.num3
            }
        },
        methods:{
            async getHotelList(){
                let res=await $axios.post("/hotelList")
                console.log(res)
            }
        },
        created:async function () {
            console.log(window.hotelform)
            let res=await $axios.post("/hotelList",window.hotelform)
            console.log(res.data.hotellist)
            this.hoteldata=res.data.hotellist
            console.log(this.hoteldata[0].hotelname)
        }


    }
</script>

<style scoped>

    #hotelmsg{
        height: 100%;
    }
    #search{
        width: 250px;
        border: 1px #00ffff solid;
        border-radius: 5px;
        padding-left: 20px;

        padding-right: 20px;
        height: 100%;
        float: left;
    }

    .hotellist{
        width: 70%;
        height: 100%;
        float: left;

    }


</style>
