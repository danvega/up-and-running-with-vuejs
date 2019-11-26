Vue.component("dans-clock", {
  data() {
    return {
      now: new Date()
    };
  },
  methods: {
    updateDateTime() {
      this.now = new Date();
    }
  },
  mounted() {
    setInterval(() => {
      this.updateDateTime();
    }, 100);
  },
  template: `<div class="clock">{{ now }}</div>`
});
