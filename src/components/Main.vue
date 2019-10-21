<!-------------------------新闻----------------------------->
<template>
  <div class="main">
    <Head></Head>
    <!--组件切换-->
    <router-view></router-view>

    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
  import Head from './Head.vue'
   import bottom from  './bottom.vue'
  export default {
    methods:{
    },
    components:{
      Head,
      bottom
    }
  }
</script>
<style scoped>
  .main{padding-top:1.16rem;position: relative}

</style>
