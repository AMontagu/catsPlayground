import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition,
  VFlex,
  VLayout,
  VContent,
  VToolbarTitle,
  VBtn,
  VContainer,
  VSpacer,
  VImg,
  VDialog
} from "vuetify/lib";

export default () => {
  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VFooter,
      VToolbar,
      VFadeTransition,
      VFlex,
      VLayout,
      VContent,
      VToolbarTitle,
      VBtn,
      VContainer,
      VSpacer,
      VImg,
      VDialog
    },
    theme: {
      primary: "#3494C0",
      secondary: "#4479FF",
      third: "#435CC1"
    }
  });
};
