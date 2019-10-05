<template>
  <div id="app">
    <header>
      <div class="pure-menu pure-menu-horizontal">
        <img src="./assets/image/logo.png" style="max-width: 150px;float: left">
        <ul class="pure-menu-list" style="margin-top: 10px">
          <li class="pure-menu-item" @click="toOther('/hotel')"><a href="#" class="pure-menu-link"><img src="./assets/image/hotel.png" width="20px" style=" margin-bottom:-3px;">  ホテル</a></li>
          <li class="pure-menu-item" @click="toOther('/plane')"><a href="#" class="pure-menu-link"><img src="./assets/image/plane.png" width="20px"style=" margin-bottom:-3px;">  航空券</a></li>
          <li class="pure-menu-item" @click="toOther('/car')"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px"style=" margin-bottom:-3px;">  ハイヤー</a></li>
          <li class="pure-menu-item" @click="toOther('/taxi')"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px"style=" margin-bottom:-3px;"> タクシー</a></li>
        </ul>
<!--        <i class="el-icon-map-location" style="font-size: 15px;color: #f0f0f0;position:absolute;right:80px;top: 20px"> 位置 : 3番目新南京市</i>-->
      </div>
    </header>
    <div id="router">
      <router-view></router-view>
    </div>
    <Recommend></Recommend>

  </div>
</template>

<script>
import "./assets/image/bg0.jpg"
import "./assets/image/logo.png"
import Recommend from "./component/Recommend.vue";


export default {
  name: 'app',
  components: {
    Recommend
  },
  methods:{
    toOther(e){
      this.$router.replace(e)
    }
  }
}
</script>

<style>

  header{
    height: 55px;
    background: #2c3e50;
    padding: 0;
  }
  header li{
    font-size: 18px;

  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
