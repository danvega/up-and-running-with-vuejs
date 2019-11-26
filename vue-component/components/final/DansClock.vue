<template>
  <div class="clock">{{ now }}</div>
</template>

<script>
export default {
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
  }
};
</script>

<style>
.clock {
  background-color: black;
  color: white;
}
</style>
