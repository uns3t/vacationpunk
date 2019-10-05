<template>

    <div class="careach">
        <img src="../assets/image/car1.jpg">
        <div class="carpartmsg">
            {{carone.carname}}
        </div>
        <div class="carpartmsg" style="float: right">
            <span style="font-weight: normal;font-size: small;color: #8c939d">一天的价格</span>
            <div id="carmoney">{{"￥ "+ carone.carmoney}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cardisplay",
        props:["carone"]
    }
</script>

<style scoped>
    .careach{
        overflow: hidden;
        border: 1px #C0C4CC solid;

    }
    .careach img{
        max-width: 200px;
        float: left;
        margin: 10px;
    }
    .carpartmsg{
        float: left;
        margin: 10px;
        font-size: 20px;
        font-weight: bold;
    }
</style>
