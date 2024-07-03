import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Vuex 스토어를 불러옴
import { setupCalendar, Calendar, DatePicker } from 'v-calendar'; // 달력
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import 'v-calendar/dist/style.css'; // 캘린더 css

const app = createApp(App);

setupCalendar(app, {
    componentPrefix: 'vc' // <v-calendar> 대신 <vc-calendar> 사용
});

<<<<<<< Updated upstream
app.component('VCalender', Calendar);
app.component('VDatePicker', DatePicker);


createApp(App).use(store).use(router).mount('#app');
=======
app.component('VCalendar', Calendar);
app.component('VDatePicker', DatePicker);


app.use(store).use(router).mount('#app');
>>>>>>> Stashed changes
