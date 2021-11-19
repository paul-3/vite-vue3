import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import Store from './store/index';
import '@/style/basic.styl';
import styleImport from './utils/style-import';
const app = createApp(App);

styleImport(app).use(Router).use(Store).mount('#app');
