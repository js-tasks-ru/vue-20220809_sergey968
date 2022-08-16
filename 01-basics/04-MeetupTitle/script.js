import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const App = defineComponent({
  // Имя позволяет программно получать имя компонента.
  // Используется в devtools,
  name: 'App',

  data() {
      return {
          selectedMeetupId:undefined,
          meetupTitle:undefined
      };
  },

  watch: {
    selectedMeetupId: {
      handler() {
        if(isNaN(this.selectedMeetupId)){
          this.meetupTitle = '';
          return;
        }

        if(this.selectedMeetupId < 1) this.selectedMeetupId = 1;
        else if(this.selectedMeetupId > 5) this.selectedMeetupId = 5;

        fetchMeetupById(this.selectedMeetupId).then((meetup) => this.meetupTitle = meetup.title);
      },
    },
  },

  // Как только приложение будет смонтировано - обновляем данные
  mounted() {
    this.selectedMeetupId = 1;
  },
});

// Создаём новое приложение по корневому компоненту
const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;