<template>
  <div class="movie">
    <!--影院上映-->
    <div class="title">
      <b>影院热映</b>
      <em>更多</em>
    </div>
    <ul class="pic">
      <li v-for="(item) in dataList" @click="on(item.id)">
        <img :src="item.images.small"  alt="" style="height:3rem">
        <b>{{item.original_title}}</b>

        <i v-for="ind in Math.floor(item.rating.average.toString().split('.')[0]/2)" style="width: 15%"><img src="../../static/img/all.png" alt="" ></i>
        <i v-if="Math.ceil(item.rating.average.toString().split('.')[0]/2) > Math.floor(item.rating.average.toString().split('.')[0]/2) || item.rating.average.toString().split('.')[1]>0" style="width: 15%"><img
          src="../../static/img/noall.png" alt="" ></i>
        <i v-for="i in (5-Math.ceil(Math.ceil(item.rating.average)/2))" v-if="item.rating.average>0" style="width: 15%"><img src="../../static/img/none.png" alt=""></i>
        <i v-if="item.rating.average>0">{{item.rating.average}}</i>
        <i v-else>暂无评分</i>

      </li>
    </ul>
    <!--免费观影-->
    <div class="title">
      <b>免费在线观影</b>
      <em>更多</em>
    </div>
    <ul class="pic">
      <li v-for="(item) in freeList" @click="on(item.id)">
        <img :src="item.images.small"  style="height:3rem">
        <b>{{item.title}}</b>
        <i v-for="ind in Math.floor(item.rating.average.toString().split('.')[0]/2)" style="width: 15%"><img src="../../static/img/all.png" alt="" ></i>
        <i v-if="Math.ceil(item.rating.average.toString().split('.')[0]/2) > Math.floor(item.rating.average.toString().split('.')[0]/2) || item.rating.average.toString().split('.')[1]>0" style="width: 15%"><img
          src="../../static/img/noall.png" alt="" ></i>
        <i v-for="i in (5-Math.ceil(Math.ceil(item.rating.average)/2))" v-if="item.rating.average>0" style="width: 15%"><img src="../../static/img/none.png" alt=""></i>
        <i v-if="item.rating.average>0">{{item.rating.average}}</i>
        <i v-else>暂无评分</i>
      </li>
    </ul>
    <!--新片速递-->
    <div class="title">
      <b>新片速递</b>
      <em>更多</em>
    </div>
    <ul class="pic">
      <li v-for="(item) in future" @click="on(item.id)">
        <img :src="item.images.small" style="height:3rem" >
        <b>{{item.title}}</b>
        <i v-for="ind in Math.floor(item.rating.average.toString().split('.')[0]/2)" style="width: 15%"><img src="../../static/img/all.png" alt="" ></i>
        <i v-if="Math.ceil(item.rating.average.toString().split('.')[0]/2) > Math.floor(item.rating.average.toString().split('.')[0]/2) || item.rating.average.toString().split('.')[1]>0" style="width: 15%"><img
          src="../../static/img/noall.png" alt="" ></i>
        <i v-for="i in (5-Math.ceil(Math.ceil(item.rating.average)/2))" v-if="item.rating.average>0" style="width: 15%"><img src="../../static/img/none.png" alt=""></i>
        <i v-if="item.rating.average>0">{{item.rating.average}}</i>
        <i v-else>暂无评分</i>
      </li>
    </ul>
    <div class="title">
      <b>发现好电影</b>
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
    <div class="title">
      <b>分类浏览</b>
    </div>
    <ul class="table">
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
      <li>
      <span>经典</span> <b> > </b>
    </li>
      <li>
        <span>经典</span> <b> > </b>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                dataList:[],
                freeList:[],
                future:[],
                code:[]
            }
        },
      methods:{
            on(x){
                this.$router.push({
                  path:'/detail?query='+x
                })
            }
      },
        mounted(){
//            影院热映
            this.$http({
              url:'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10'
            }).then((res)=>{
              this.dataList=res.data.subjects.splice(0,7);
            });
//           免费在线观影
          this.$http({
            url:'https://douban.uieee.com/v2/movie/top250?start=0&count=10'
          }).then((res)=>{
            console.log(res.data.subjects[0].rating.average.toString().split('.'));
//            let arr=res.data.subjects[0].rating.average.toString().split('.');
//            console.log(arr[1]);
//            if(arr.length>1){this.code=[Math.floor(arr[0]/2),arr[1]];}
//            else{this.code=[Math.floor(arr[0]/2),0];}
//            console.log(this.code);
            this.freeList=res.data.subjects.splice(0,8)
          });
//          即将上映
          this.$http({
            url:'https://douban.uieee.com/v2/movie/coming_soon'
          }).then((res)=>{
            this.future=res.data.subjects.splice(0,7);
          })
        }
    }
</script>
<style scoped>
  .movie .title { padding: 0.4rem;}
  .movie .title em{float: right;color:#42bd56}
  .movie .pic{margin-top: 0.2rem ;overflow-x: auto; white-space: nowrap;padding-left: 0.3rem}
  .movie .pic li{width:2rem;display:inline-block;margin-right: 0.3rem;text-align: center;padding-bottom: 0.2rem}
  .movie .pic li img{width: 100%;}
  .movie .pic li b{display: block;font-weight: bold;margin-bottom: 0.2rem;height:0.8rem}
  .movie .more{height:3rem;}
  .movie .more .one{margin:0.2rem;overflow-x: auto;white-space: nowrap}
  .movie .more .one li li{display: inline-block;border: 0.03rem solid  rgb(255, 172, 45);padding: 0.2rem 0.4rem;       border-radius: 0.1rem ;text-align: center ;font-size: 0.16rem}
  .table {margin:0.3rem  0  0.8rem 0.4rem;border-top: 0.03rem solid #eee;overflow: hidden}
  .table li{display:inline-block;border: 0.03rem solid #eee; width: 49.5%;border-left: none;border-top:none;float: left;height:0.7rem;padding-top: 0.3rem;}
  .table span{color:#42Bd56;font-size: 0.3rem}
  .table li b{color:#999;float:right;margin-right: 10%}

</style>
