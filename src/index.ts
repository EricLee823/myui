import { createApp } from "vue/dist/vue.esm-bundler.js";
import SmartyUI from './entry'
import app from "./app.vue"
// import SFCButton from "./SFCButton.vue"
// import JSXButton from "./button/JSXButton"

// createApp(JSXButton).mount("#app")
createApp(app)
  .use(SmartyUI)
  .mount("#app");