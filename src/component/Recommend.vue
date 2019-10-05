<template>
    <div class="recommend">

        <div class="picdetail" @click="tohotel('南京')" v-bind:style="{backgroundImage:nanjin}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">南京</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">538家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('苏州')" v-bind:style="{backgroundImage:suzhou}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">苏州</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">612家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('重庆')" v-bind:style="{backgroundImage:chongqin}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">重庆</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">1238家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('成都')" v-bind:style="{backgroundImage:chengdu}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">成都</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">501家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('杭州')" v-bind:style="{backgroundImage:hangzhou}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">杭州</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">165家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('武汉')" v-bind:style="{backgroundImage:wuhan}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">武汉</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">461家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('深圳')" v-bind:style="{backgroundImage:shenzhen}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">深圳</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">918家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('广州')" v-bind:style="{backgroundImage:guangzhou}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">广州</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">546家住宿</span>
        </div>
        <div class="picdetail" @click="tohotel('上海')" v-bind:style="{backgroundImage:shanghai}">
            <span style="color: #f0f0f0;font-size: 25px;font-weight: bold;text-shadow:1px 1px 1px #000">上海</span>
            <div style="float: right;margin: 10px">
                <span> <img src="../assets/image/China.png" style="max-width: 40px"></span>
            </div>
            <br/>
            <span style="color: #f0f0f0;font-size: 15px;text-shadow:1px 1px 1px #000">711家住宿</span>
        </div>

    </div>




</template>

<script>
    export default {
        name: "Recommend",
        data(){
            return{
                nanjin:'url('+require('../assets/image/nanjing.jpg')+')',
                suzhou:'url('+require('../assets/image/suzhou.jpg')+')',
                chengdu:'url('+require('../assets/image/chengdu.jpg')+')',
                chongqin:'url('+require('../assets/image/chongqin.jpg')+')',
                shenzhen:'url('+require('../assets/image/shenzhen.jpg')+')',
                guangzhou:'url('+require('../assets/image/guangzhou.jpg')+')',
                shanghai:'url('+require('../assets/image/shanghai.jpg')+')',
                wuhan:'url('+require('../assets/image/wuhan.jpg')+')',
                hangzhou:'url('+require('../assets/image/hangzhou.jpg')+')',
            }
        },
        methods:{
            tohotel(place){
                window.hotelform={name:place}
                this.$router.replace("/hotelmsg")
            }
        }
    }
</script>

<style scoped>
    .recommend{
        margin: 20px 10% 20px 10%;

    }
    .picdetail{
        width: 350px;
        height: 280px;
        background-image: url(../assets/image/nanjing.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
        float: left;
        padding-left: 20px;
        padding-top: 20px;
        margin: 10px;
    }
    .picdetail:hover{
        box-shadow: 0 0 8px #000 inset;
        cursor: pointer;
    }
</style>
