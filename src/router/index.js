import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersList from '@/views/UsersList.vue';
import UserPage from '@/views/UserPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: UsersList,
  },
  {
    path: '/user/:userId',
    name: 'userPage',
    component: UserPage,
    children: [
      {
        path: 'albums',
        name: 'userAlbums',
        component: () => import('@/components/AlbumsList.vue'),
      },
      {
        path: 'posts',
        name: 'userPosts',
        component: () => import('@/components/PostsList.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
