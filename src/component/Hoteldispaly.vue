<template>
    <div id="content">
        <img src="../assets/image/hotel1.jpg">
        <div class="hoteldetail">
            <h4>{{hotelname}}</h4><span>{{hotelscore+"分"}}</span>
            <p>{{hoteladdr}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Hoteldispaly",
        props:["hotelname","imgurl","hoteladdr","hotelscore"],
    }
</script>

<style scoped>
    #content img{
        float: left;
        max-width: 200px;
        background-size: cover;
    }
    #content{
        width: 600px;
        height: 200px;
        overflow: hidden;
        border: 1px #a1def0 solid;
        /*margin: 0 0 0 10px;*/
        border-radius: 5px;
    }
    #content:hover{
        background: #b8e6f4;
    }
    .hoteldetail{
        float: left;
        width: 400px;
        height: 200px;
        /*margin: 10px 5px 10px 5px;*/
    }



</style>
