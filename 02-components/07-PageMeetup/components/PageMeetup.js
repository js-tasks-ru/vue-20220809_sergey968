import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      error: null,
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.meetup = null;
        this.error = null;
        fetchMeetupById(this.meetupId)
          .then((meetup) => (this.meetup = meetup))
          .catch((e) => (this.error = e));
      },
    },
    error: {
      immediate: true,
      handler() {
        this.meetup = null;
      },
    }
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="meetup" :meetup = "meetup"/>
      <UiContainer v-else-if="error === null">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
      <UiContainer v-else>
        <UiAlert>{{ error.message }}</UiAlert>
      </UiContainer>
    </div>`,
});
