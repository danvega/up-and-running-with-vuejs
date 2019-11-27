Vue.component("twitter-friends", {
  props: ["color"],
  data() {
    return {
      friends: [
        { name: "Evan You", username: "youyuxi" },
        { name: "Guillaume Chau", username: "Akryum" },
        { name: "Sarah Drasner", username: "sarah_edo" },
        { name: "Greg Pollack", username: "greggpollack" },
        { name: "Adam Jahr", username: "AdamJahr" },
        { name: "Chris Fritz", username: "chrisvfritz" },
        { name: "Jen Looper", username: "jenlooper" },
        { name: "Damian Dulisz", username: "DamianDulisz" },
        { name: "Ben Hong", username: "bencodezen" },
        { name: "Divya Sasidharan", username: "shortdiv" }
      ]
    };
  },
  template: `
  <ul>
    <li v-for="friend in friends" v-bind:key="friend.username" :style="{ color: color }">
      {{ friend.name }} | {{ friend.username }}
    </li>
  </ul>
  `
});
