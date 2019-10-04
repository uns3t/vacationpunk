<template>
  <div id="app">
    <header>
      <div class="pure-menu pure-menu-horizontal">
        <a href="#" class="pure-menu-heading pure-menu-link"><img src="./assets/image/logo.png" width="60%" height="60%"></a>
        <ul class="pure-menu-list">
          <li class="pure-menu-item" @click="toOther('/hotel')"><a href="#" class="pure-menu-link"><img src="./assets/image/hotel.png" width="20px">  Hotel</a></li>
          <li class="pure-menu-item" @click="toOther('/plane')"><a href="#" class="pure-menu-link"><img src="./assets/image/plane.png" width="20px">  Plane</a></li>
          <li class="pure-menu-item" @click="toOther('/car')"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px">  Car</a></li>
          <li class="pure-menu-item" @click="toOther('/taxi')"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px"> Taxi</a></li>
        </ul>
        <i class="el-icon-map-location" style="font-size: 15px;color: #f0f0f0;position:absolute;right:80px;top: 30px"> 位置 : 3番目新南京市</i>
      </div>
    </header>
    <div id="router">
      <router-view></router-view>
    </div>


  </div>
</template>

<script>
import "./assets/image/bg0.jpg"
import "./assets/image/logo.png"


export default {
  name: 'app',
  components: {

  },
  methods:{
    toOther(e){
      this.$router.replace(e)
    }
  }
}
</script>

<style>
  #router{
    margin: 0 15% 0 15%;
    /*background: rgba(255,255,255,1.0);*/
  }

  /*html,body,#app{*/
  /*  height: 100%;*/
  /*  padding: 0;*/
  /*  margin: 0;*/
  /*}*/

  body{
    background-image: url(./assets/image/bg0.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    /*background-attachment: fixed;*/
  }
  header{
    width: 100%;
    height: 65px;
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
