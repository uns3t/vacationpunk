<template>
    <div class="planeeach">
        <img src="../assets/image/planelogo1.png">
        <div class="planetime">{{ planeone.planestart}}

        <br/>
            <span style="font-size: 15px">
                出发
            </span>
        </div>
        <div class="planetime">
            <i class="el-icon-minus"></i>
        </div>
        <div class="planetime">{{ planeone.planeend}}
            <br/>
            <span style="font-size: 15px">
                到达
            </span>
        </div>
        <div class="planetime" style="font-weight: bold;width: 100px">
            {{ "￥ "+planeone.planemoney}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Planedisplay",
        props:["planeone"]
    }
</script>

<style scoped>
    .planeeach{
        width: 500px;
        height: 100px;
        background: #b8e6f4;
    }
    .planeeach img{
        float: left;
        max-height: 100px;
        margin: 5px;
    }
    .planetime{
        float: left;
        width: 50px;
        position: relative;
        top: 20%;
        margin: 10px;
        text-align: center;
        font-size: 20px;
    }
</style>
