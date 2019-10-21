import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import detail from '@/components/detail'
import movie from '@/components/movie'
import book from '@/components/book'
import group from '@/components/group'
import audio from '@/components/audio'
import search from '@/components/search'
import tech from '@/components/technology'

Vue.use(Router);

export default new Router({
  routes: [
      {
      path:'/main',
      component:Main,
        children:[
          {
            path:'/movie',
            component:movie
          },
          {
            path:'/book',
            component:book
          },
          {
            path:'/group',
            component:group
          },
          {
            path:'/audio',
            component:audio
          }

        ]
      },
    {
      path:'/detail',
      component:detail
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/tech',
      component:tech
    },
    {
      path:'/*',
      redirect:'/movie'
    }
   ]
})
