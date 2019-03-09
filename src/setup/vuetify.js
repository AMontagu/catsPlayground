import Vue from "vue";
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
    }
  });
};
