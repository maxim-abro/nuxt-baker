export default ({app}) => {
  app.router.beforeEach((to,from, next)=> {
    console.log(app.store.getters['auth/isAuthenticated'])
    next()
  })
}
