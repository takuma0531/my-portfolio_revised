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
  padding-top: 2.5%;
}

h4 {
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

@media screen and (max-width: 1025px) {
  h4 {
    font-size: 3vw;
  }

  h5 {
    font-size: 2.5vw;
  }

  p {
    font-size: 2vw;
  }
}

@media screen and (max-width: 414px) {
  h4 {
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
