<template>
  <div>
    <div class="head">
      <em style="font-size: 0.3rem;line-height: 0.7rem" @click="$router.go(-1)">关闭</em>
      <input type="text">
    </div>
    <!--主体-->
    <div class="main">
      <a href="#"><strong style="color: rgb(35, 132, 232)">电影</strong><br><b>影院热映</b></a>
      <a href="#"><strong style="color: rgb(122, 106, 219);">电视</strong><br><b>正在热播</b></a>
      <a href="#"><strong style="color: rgb(159, 120, 96);">图书</strong><br><b>畅销排行</b></a>
      <a href="#"><strong style="color: rgb(230, 70, 126);">同城</strong><br><b>周末活动</b></a>
      <a href="#"><strong style="color: rgb(42, 184, 204);">小组</strong><br><b>志趣相同</b></a>
      <a href="#"><strong style="color: rgb(244, 143, 46)">音乐</strong><br><b>新碟帮</b></a>
      <a href="#"><strong style="color: rgb(159, 120, 96);">阅读</strong><br><b>电子书</b></a>
      <a href="#"><strong style="color: rgb(87, 116, 197)">游戏</strong><br><b>虚拟世界</b></a>
      <a href="#"><strong style="color: rgb(87, 116, 197)">应用</strong><br><b>玩手机</b></a>
      <a href="#"><strong style="color: rgb(225, 100, 77);">东西</strong><br><b>心爱之物</b></a>
      <a href="#"><strong style="color: rgb(64, 207, 169);">FM</strong><br><b>红心歌单</b></a>
      <a href="#"><strong style="color: rgb(66, 189, 86);">市集</strong><br><b>购买原创</b></a>
    </div>
    <!--底部-->
    <div class="bottom">
      <p><em style="border-right:0.02rem solid #f3f3f3">注册帐号</em>
      <em>登录豆瓣</em></p>
      <p><em style="border-right:0.02rem solid #f3f3f3">使用桌面版</em>
      <em>使用豆瓣App</em></p>
    </div>
  </div>
</template>
<style scoped>
  .head{padding: 0.35rem;border-bottom: 0.02rem solid #f3f3f3}
  .head input{background: url("../../static/img/search-mini.png") no-repeat 50% #f3f3f3;height:0.7rem;width:80%;margin-left: 0.3rem;border-radius: 0.05rem}
  .main a{margin: 5.9%;width: 20%;text-align: center}
  .main a strong{font-size: 0.5rem}
  .bottom{border-top: 0.02rem solid #f3f3f3}
  .bottom p{padding-bottom: 0.3rem;height:0.6rem;border-bottom:0.02rem solid #f3f3f3 }
  .bottom em{width: 49%;; margin:0.3rem 0  ;text-align: center;}
</style>
