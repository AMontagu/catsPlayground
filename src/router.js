import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
      children: [
        {
          path: ":catId",
          name: "Description",
          props: true,
          component: () =>
            import(/* webpackChunkName: "catModal" */ "./views/home/CatModal.vue")
        }
      ]
    }
  ]
});
