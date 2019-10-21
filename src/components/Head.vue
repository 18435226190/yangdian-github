<template>
  <div>
    <!--头部-->
    <div class="header-bar">
      <h1 class="title">
        <a href="#">豆瓣</a>
      </h1>
      <div class="right">
        <span><router-link to="/movie" style="color: rgb(35, 132, 232)">电影</router-link></span>
        <span><router-link to="/book" style="color: rgb(159, 120, 96)" >图书</router-link></span>
        <span><router-link to="/group" style="color: rgb(228, 168, 19)">广播</router-link></span>
        <span><router-link to="/audio" style="color: rgb(42, 184, 204)">小组</router-link></span>
        <a href="#/search"> <img src="../../static/img/search.png" alt=""></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  h1{font-size: 0.38rem;vertical-align: bottom;}
  .header-bar {position: fixed;width:100%;right: 0;top: 0;z-index: 2;height: 1.16rem; border-bottom: .01rem solid #f3f3f3;background: #fff}
  .header-bar .title{float:left;margin:0.1rem 0 0 0.3rem}
  .header-bar .title  a{font-size: 0.55rem;color: #00b600;font-weight: bold;}
  .header-bar .right {float: right;margin: 0.35rem 0.3rem 0 0}
  .header-bar .right a{font-size: 0.28rem;vertical-align: top;margin-right: 0.2rem}
  .header-bar .right a img{vertical-align: top}
</style>
