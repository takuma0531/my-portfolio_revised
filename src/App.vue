<template>
  <div id="app" v-on:click="clickAnywhere">
    <TopBar />
    <router-view class="view" />
    <UnderBar />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import UnderBar from './components/UnderBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    UnderBar,
  },
  methods: {
    clickAnywhere() {
      if (this.$store.state.display) {
        this.$store.commit('unrenderMenu');
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.hum').style.display = 'block';
        document.querySelector('.x').style.display = 'none';
      }
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1vw;
  color: #ffffffcc;
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}

.view {
  backdrop-filter: blur(15px) brightness(70%);
  -webkit-backdrop-filter: blur(15px) brightness(70%);
  min-height: 98.3vh;
  padding-top: 70px;

  .body {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
}

@media screen and (max-width: 1000px) {
  .view {
    padding-bottom: 10vh;

    .body {
      width: 100%;
    }
  }
}

/* common decorations on any devices */
a {
  text-decoration: none;
}

.router, .link {
  color: #ffffffcc;
}

.router:hover {
  filter: brightness(80%);
  color: #eae3e3c2;
}

ul {
  list-style-type: none;
}
</style>
