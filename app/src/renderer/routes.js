export default [
  {
    path: '/',
    name: 'home-page',
    component: require('pages/HomePage')
  },
  {
    path: '/board',
    name: 'board-page',
    component: require('pages/BoardPage')
  },
  {
    path: '*',
    redirect: '/'
  }
];
