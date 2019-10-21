<template>
  <div class="detail">
    <Head></Head>

    <div class="body">
      <span style="color:#42bd56">聊一聊你的感受</span>
      <span class="download">极速下载</span>
      <span class="open">打开</span>
    </div>

    <div class="content" style="overflow: hidden">
      <div class="left" style="width:55%">
        <h3 style="font-size: 0.4rem">{{data.original_title}}</h3>
        <b>暂无评分</b><b>1979人评价</b><br>
        <span>{{data.year}}</span>/<span v-for="item in data.genres">{{item}}/</span>
        <span v-for="item in data.casts">{{item.name}}/</span><span v-for="item in data.directors">{{item.name}}/</span>
        <span v-for="item in data.countries">{{item}}/</span>
        <br>

        <a href="#"><em>用App查看影人资料</em></a>
      </div>
      <div class="right" style="width: 25%;text-align: center">
        <img :src="data.images['small']" alt="" style="width: 100%">
      </div>
    </div>
    <div class="body_chose">
      <span>想看</span>
      <span>看过</span>
    </div>
    <div class="explain">
    <b>{{data.original_title}}的简介</b><br><br>
    <p>
      {{data.summary}}
    </p><br>
      <b>更多相关分类</b><br> <br>
      <span class="particular" v-for="item in data.genres">{{item}}</span><br><br>
      <b>{{data.original_title}}图片</b>
      <ul class="pic">
        <li>
          <img :src="data.images.small" alt="">
        </li>
        <li>
          <img :src="data.images.small" alt="">
        </li>
        <li>
          <img :src="data.images.small" alt="">
        </li>
      </ul>
      <b>{{data.original_title}}短评</b>
      <ul class="comment">
        <li v-for="ind in data.popular_comments">
          <div class="left" style="width: 15%">
            <img src="../../static/img/man.png" alt="">
          </div>
          <div class="left" style="width: 76%">
            <h3 style="font-size: 0.3rem">{{ind.author.name}}</h3>
            <b>{{ind.created_at}}</b> <br><br>
            <p>
              {{ind.content}}
            </p><br>
            <i><img src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg" alt=""></i><b>4</b>
            <i class="right">···</i>
          </div>
        </li>
      </ul>

      <div class="moreComment">
        <em>显示更多评论</em><br><br>
        <img src="http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658" alt="" style="width: 90%">
      </div>
      <br>
 <!--更多评论-->
      <b style="padding-left: 0.2rem">关于我和我的祖国的问答</b><br><br>
      <ul class="question">
        <li>
          <span>大家为什么对国产片这么苛刻？</span><br><br>
          <em>35回答</em>
        </li>
        <li>
          <span>大家为什么对国产片这么苛刻？</span><br><br>
          <em>35回答</em>
        </li>
      </ul>
      <div style="text-align: center">
      <em>显示更多问答</em></div>
      <div></div>
      <div class="title1">
        <span style="font-size:0.3rem">推荐的豆列</span>
        <em>更多</em>
      </div>
      <!--发现更多-->
      <div class="more">
        <ul class="one">
          <li class="two">
            <ul class="one">
              <li><a  href="#/tech" style="color: rgb(255, 172, 45);">同时入选IMDB250和豆瓣电影250的电影</a></li>
              <li><a href="#" style="color: rgb(255, 64, 85);">带你进入不正常的世界</a></li>
              <li><a  href="#" style="color: rgb(79, 157, 237);">用电【影】来祭奠逝去的岁月</a></li>
              <li><a href="#" style="color: rgb(255, 196, 108);;">女孩们的故事【电影】</a></li>
            </ul>
          </li>
          <br>
          <li class="two">
            <ul class="one">
              <li><a  href="#" style="color: rgb(35, 132, 232);">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
              <li><a href="#" style="color: rgb(59, 169, 77);">美国生活面面观</a></li>
              <li><a href="#" style="color: rgb(59, 169, 77);">2015终极期待</a></li>
              <li><a href="#" style="color: rgb(204, 51, 68);">经典韩国电影——收集100部</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import  Head from './Head.vue'
  import  bottom from './bottom.vue'

  export default {
      data(){
          return {
              data:{}
          }
      },
      components:{
        bottom,
        Head
      },
    mounted(){
          this.$http({
            url:'https://douban.uieee.com/v2/movie/subject/'+this.$router.currentRoute.query.query
          }).then((res)=>{
              this.data = res.data;
              console.log(res.data)
          });

    }
  }
</script>
<style scoped>
  .detail{padding-top:1.16rem}
  .body{height:1rem ;background: url("http://www.luobaolong.top/home/static/img/promotion_bg.b7abee9.jpg") no-repeat;background-size: 100%;padding-top: 0.5rem;}
  .body span{margin-left: 1rem}
  .body  .download{color: #fff;background: #42bd56;padding:0.1rem 0.2rem ;border-radius: 0.1rem;margin-left: 1.5rem}
  .body .open{color: #42bd56;border: 0.03rem solid #42bd56;margin-left: 0.05rem;padding: 0.05rem 0.25rem;border-radius: 0.05rem}
  .content .left{padding: 0.4rem}
  .content .left span{margin-top: 0.2rem;font-size: 0.25rem}
  .content .left em{margin-top:0.1rem}
  .content .right{padding: 10% 5% 0 0}
  .body_chose{text-align: center;margin-top: 0.3rem}
  .body_chose span{color:#ffb712;padding: 0.2rem 1.3rem;border: 0.02rem solid #ffb712;border-radius: 0.06rem;margin-right: 0.1rem}
  .explain{padding: 0.3rem}
  .particular{font-size: 0.3rem;background: #f5f5f5;border-radius: 0.3rem;margin-right: 0.2rem;
    padding:0.05rem 0.2rem;}
  .pic{overflow: auto;white-space: nowrap;margin: 0.3rem 0 0.6rem}
  .pic li{height:2.3rem ;width: 60%;margin-right: 0.05rem;display: inline-block;overflow: hidden}
  .pic li img{width: 100%;}
  .comment{padding:0.5rem 0  0.2rem 0.2rem;overflow: hidden}
  .comment li{border-bottom: 0.03rem solid #eee;overflow:hidden;padding:0.4rem 0}
  .left{padding:0.1rem}
  i{ width: 0.5rem;height:0.5rem}
  .moreComment{text-align: center}
  .question{padding:0.2rem}
  .question li{margin-bottom: 0.2rem}
   .title1 { padding: 0.4rem;}
   .title1 em{float: right;color:#42bd56}
   .more{height:3rem;}
  .more .one{margin:0.2rem;overflow-x: auto;white-space: nowrap}
  .more .one li li{display: inline-block;border: 0.03rem solid  rgb(255, 172, 45);padding: 0.2rem 0.1rem;       border-radius: 0.1rem ;text-align: center ;font-size: 0.16rem}

</style>
