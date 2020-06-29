import Vue from 'vue';
import App from './App.vue';
import mButton from './components/button.vue';
import mDialog from './components/dialog.vue';
import mInput from './components/input.vue';
import '../src/assets/icomoon/style.css';

Vue.config.productionTip = false;
Vue.component(mButton.name, mButton);
Vue.component(mDialog.name, mDialog);
Vue.component(mInput.name, mInput);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
