<template>
  <div class="tech">
    <!--头部-->
    <div class="head">
      <img src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png" alt="" style="width: 12%">
      <span style="vertical-align: top;margin-left: 0.2rem">
      <span style="font-size: 0.3rem;">豆瓣App</span><br>
      <b>记录你的生活</b></span>
      <span style="color:white;background: #42bd56;padding: 0.1rem;border-radius: 0.2rem" class="right">打开App</span>
      <span class="right" style="margin-top: 0.1rem"></span>
    </div>
    <!--正文-->
    <div class="text">
      <h2>{{title}}</h2><br><br>
      <span>熊孩子</span><br>
      <span id="content-full" style="height:1rem;overflow: hidden">科幻启示录，收集豆瓣上的高分较热门科幻电影
        <br>
        <br>关键字：机械、科幻、太空、时空、人工智能、基因、理论等
        <br>备注（评语）为电影短评摘录（就是非我原创的），谢谢那些让我摘录的人儿。
        <br>
        <br>【注：非常推荐以右下角“推荐”下面的“按编辑顺序观看“该豆列】
        <br>
        <br>PS：转载我很荣幸，不过请注明出处和在下。
        <br>
        <br>不定时更新，
        <br>建议收藏方便及时更新观看。
      </span><span id="expend" style="color: #42BD56" @click="open()">展开</span>
      <br>
      <span class="green"><img src="../../static/img/xin.png" alt="">21849</span>
      <span class="green">· · ·</span>
    </div>
    <!--介绍1-->
    <ul class="explain">
      <li v-for="(item,x) in dataList" :key="x" v-if="x<max&&x>=min">
        <p>
          <img :src="item.images.small" alt="" style="width: 25%;height:2.3rem;display: inline-block">
          <b style="width: 70%" class="right">
            <span style="font-size: 0.35rem">{{item.title}}</span><br>
            <i v-for="ind in Math.floor(item.rating.average.toString().split('.')[0]/2)" style="width: 0.25rem"><img src="../../static/img/all.png" alt="" width="100%"></i><i v-if="Math.ceil(item.rating.average.toString().split('.')[0]/2) > Math.floor(item.rating.average.toString().split('.')[0]/2) || item.rating.average.toString().split('.')[1]>0" style="width: 0.25rem"><img
              src="../../static/img/noall.png" alt="" width="100%"></i>
            <i v-for="i in (5-Math.ceil(Math.ceil(item.rating.average)/2))" v-if="item.rating.average>0" style="width: 15%"><img src="../../static/img/none.png" alt=""></i>
            <i v-if="item.rating.average>0">{{item.rating.average}}</i>
            <i v-else>暂无评分</i><br>
            <b v-for="ind in item.casts">{{ind.name}}/</b>
            <b v-for="val in item.countries">{{val}}/</b>
            <!--<b v-for="val in contents[x].countries">{{val}}/</b>-->
            科幻/1968-04-02(华盛顿首映)
          </b>
        </p>
        <p style="font-size: 0.2rem ;margin: 0.2rem 0;padding:0 0.25rem;color:#494949;border-left: 0.03rem solid #e5e5e5">
          评语：{{item.comment}}
        </p>
      </li>
    </ul>
    <div class="bottom" style="text-align: center;padding-bottom: 0.6rem">
    <span class="current">
        ·&nbsp;{{page}}&nbsp;·
      </span><br>
      <span  class="button  nonclick" @click="pre()" id="pre"> 上页 </span><span  class="button" @click="next()" id="next"> 下页 </span>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
  import bottom from './bottom.vue'
  import $ from 'jquery'
  export default {
      data(){
          return {
            title:'',
            dataList:[],
            min:0,
            max:9,
            page:1
          }
      },
    mounted(){
          this.$http({
            url:"https://douban.uieee.com/v2/movie/top250?start=0&count=50"
          }).then((res)=>{
                this.title=res.data.title;
                this.dataList=res.data.subjects;
                this.$nextTick(()=>{
                res.data.subjects.map((val,index)=>{
                this.$http({
                  url:'https://douban.uieee.com/v2/movie/subject/'+val.id
                }).then((data)=>{
                      this.$set(this.dataList[index],'countries',data.data.countries);
                      this.$set(this.dataList[index],'comment',data.data.popular_reviews[0].summary)
//                    this.dataList[index].countries=data.data.countries;
//                    this.dataList[index].comment=data.data.popular_reviews[0].summary;
                });
              });
            })
          });

    },
    methods:{
      open(){
        document.getElementById('expend').style.display='none';
        document.getElementById('content-full').style.height=5+'rem'
      },
      next(){
          $('#pre').removeClass('nonclick');
          if(this.max<this.dataList.length){ this.min+=9;this.max+=9;this.page++;}
          if(this.page>Math.ceil(this.dataList.length/10)){$('#next').addClass('nonclick')}
      },
      pre(){
        $('#next').removeClass('nonclick');
        if(this.min>=9){this.page--;this.max-=9;this.min-=9;}
        if(this.min===0){$('#pre').addClass('nonclick')}
      }
    },
    components:{
      bottom
    },
  }
</script>
<style scoped>
  .tech{position: relative;padding-top:1.55rem}
  .tech .head{padding:0.3rem;border-bottom: 0.02rem solid #f3f3f3;height:0.8rem;position:fixed;top:0;left:0;background: #fff;width: 90%}
  .tech .text{width:80%;text-align: center;padding: 0.45rem 0;margin: 0 auto}
  .tech .text h2{display: inline-block;font-size: 0.45rem;font-weight: normal;width: 90%}
  .tech .text .green{padding:0.1rem 0.2rem;color:#42bd56;border: 0.02rem solid #42bd56;border-radius: 0.1rem;margin-top: 0.4rem}
  .explain li{padding: 0.3rem 0.3rem 0.3rem 0;margin-left: 0.3rem;border-top:0.02rem solid #f3f3f3}
   .button {
    padding: 0.2rem 1.35rem;
    display: inline-block;
    background-color: #F2F2F2;
    color: #494949;
    margin-top: 20px;
    margin-left: 2%;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
  }
  .button.nonclick {
    color: #ccc;
  }

</style>
