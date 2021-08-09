import { createApp } from 'vue';
import App from './App';
import router from './routes/index.js'
//index.js 파일 생략 가능
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
    .use(router)
    .use(store)
    .use(loadImage)
    .mount('#app')