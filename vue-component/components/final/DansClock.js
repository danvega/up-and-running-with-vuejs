Vue.component("dans-clock", {
  props: ["format"],
  name: "dans-clock",
  data() {
    return {
      now: new Date()
    };
  },
  methods: {
    updateDateTime() {
      const d =
        this.format === "short" ? new Date().toLocaleTimeString() : new Date();
      this.now = d;
    }
  },
  mounted() {
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  },
  template: `<div class="clock">{{ now }}</div>`
});
