<template>
  <div id="app">
    <header>
      <div class="pure-menu pure-menu-horizontal">
        <a href="#" class="pure-menu-heading pure-menu-link"><img src="./assets/image/logo.png" width="60%" height="60%"></a>
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link"><img src="./assets/image/hotel.png" width="20px">  Hotel</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link"><img src="./assets/image/plane.png" width="20px">  Plane</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px">  Car</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link"><img src="./assets/image/car.png" width="20px"> Taxi</a></li>
        </ul>
      </div>
    </header>
    <div id="router">
      <router-view></router-view>
    </div>

<!--    <footer>-->
<!--      版权 © 1996–2019 Booking.com™. 版权所有.-->
<!--    </footer>-->
  </div>
</template>

<script>
import "./assets/image/bg0.jpg"
import "./assets/image/logo.png"


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
  #router{
    margin: 0 20% 0 20%;
    height: 100%;
  }

  html body {
    height: 100%;
    width: 100%;
  }

  body{
    background-image: url(./assets/image/bg0.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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

  footer{
    height:20px;
    background:#2c3e50;
    color: #ffffff;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    font-size: 15px;

  }



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*margin: 10px;*/

}
</style>
