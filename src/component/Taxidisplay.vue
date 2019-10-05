<template>

    <div class="careach">
        <div class="carpartmsg">
            {{taxione.taxitype}}
            <br/>
            <span style="font-weight: normal;font-size: small;color: #8c939d">{{taxione.taxidetail1}}</span>
        </div>
        <div class="carpartmsg">
            <span style="font-weight: normal;font-size: small;color: #8c939d">{{taxione.taxidetail2}}</span>
            <br/>
            <span style="font-weight: normal;font-size: small;color: #8c939d">{{taxione.taxidetail3}}</span>
        </div>
        <div class="carpartmsg" style="float: right">
            <span style="font-weight: normal;font-size: small;color: #8c939d">价格</span>
            <div id="carmoney">{{"￥ "+taxione.taximoney}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Taxidisplay",
        props:["taxione"]
    }
</script>

<style scoped>
    .careach{
        overflow: hidden;
        border: 1px #C0C4CC solid;
        height: 150px;
        width: 650px;
    }
    .carpartmsg{
        float: left;
        margin: 10px;
        font-size: 20px;
        font-weight: bold;
        width: 170px;
    }
</style>
