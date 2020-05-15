<template>
  <div id="app">
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
};
</script>

<style>
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
}

.view {
  backdrop-filter: blur(15px) brightness(70%);
  -webkit-backdrop-filter: blur(15px) brightness(70%);
  padding-top: 2.5%;
}

h3, h4 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 2%;
  font-size: 2vw;
}

h5 {
  font-size: 1.7vw;
}

p {
  font-size: 1.3vw;
}

@media screen and (max-width: 1024px) {
  h3 {
    font-size: 3vw;
  }

  h4 {
    font-size: 4vw;
  }

  h5 {
    font-size: 2.5vw;
  }

  p {
    font-size: 2vw;
  }

  .under-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  #app {
    position: relative;
  }

  .top-bar {
    position: absolute;
    z-index: 1;
    width: 99%;
  }

  h3, h4 {
    font-size: 4vw;
  }

  h5 {
    font-size: 3.5vw;
  }

  p {
    font-size: 3vw;
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
