export default [
  {
    path: '/',
    name: 'home-page',
    component: require('pages/HomePage')
  },
  {
    path: '/board/:id/:name',
    name: 'board-page',
    component: require('pages/BoardPage')
  },
  {
    path: '/team/:id',
    // Named Route 'team-page' has a default child route.
    // When navigating to this named route (:to="{name: 'team-page'"), the default child route will not be rendered.
    // Remove the name from this route and use the name of the default child route for named links instead.
    // name: 'team-page',
    component: require('pages/TeamPage'),
    children: [
      {path: '', component: require('pages/TeamPage/TeamPaneMain/TeamBoard')},
      {path: 'boards', component: require('pages/TeamPage/TeamPaneMain/TeamBoard')},
      {path: 'members', component: require('pages/TeamPage/TeamPaneMain/TeamMember')},
      {path: 'settings', component: require('pages/TeamPage/TeamPaneMain/TeamSetting')}
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];
