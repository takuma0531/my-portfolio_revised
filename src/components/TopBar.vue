<template>
  <div class="top-bar">
    <div class="menu">
      <router-link class="router" to="/">Home</router-link>
      <router-link class="router" to="/cv">CV</router-link>
      <router-link class="router" to="/projects">Projects</router-link>
      <router-link class="router" to="/contact">Contact</router-link>
    </div>
    <router-link class="router img-field" to="/">
      <img class="my-img" src="../assets/my-image.jpg" alt="my-img">
    </router-link>
    <div class="bar-icon hum" v-on:click="clickBarIcon">
      <i class="fas fa-bars"></i>
    </div>
    <div class="bar-icon x" v-on:click="clickBarIcon">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      display: 'none',
    };
  },
  methods: {
    clickBarIcon() {
      if (this.display === 'none') {
        this.display = 'block';
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.hum').style.display = 'none';
        document.querySelector('.x').style.display = 'block';
      } else {
        this.display = 'none';
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.hum').style.display = 'block';
        document.querySelector('.x').style.display = 'none';
      }
    },
  },
};
</script>

<style scoped>
.top-bar {
  background-color: #000000c7;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  padding: 0.5%;
  margin: 0;
}


.top-bar > * {
  font-size: 2vw;
}

.menu > .router {
  padding-left: 20px;
  padding-right: 20px;
}

.img-field {
  position: absolute;
  right: 1%;
}

.my-img {
  border-radius: 50%;
  height: 3vw;
}

.bar-icon {
  display: none;
}

@media screen and (max-width: 1024px) {
  .top-bar {
    height: 4.5vw;
  }

  .menu > .router {
    font-size: 3.5vw;
  }

  .my-img {
    height: 4.5vw;
  }
}

@media screen and (max-width: 414px) {
  .top-bar {
    height: 8vw;
  }

  .menu {
    display: none;
    margin-top: 8vw;
    position: absolute;
    z-index: 1;
    width: 99.2%;
  }

  .menu > .router {
    font-size: 5vw;
    padding: 2px 10px;
    display: block;
    background: #000000c7;
  }

  .menu > .router:hover {
    background: #5f5f5f;
  }

  .img-field {
    left: 1%;
    top: 15%;
  }

  .my-img {
    height: 6.5vw;
  }

  .bar-icon {
    display: inline-block;
    position: absolute;
    right: 1.5%;
    top: 15%;
  }

  .x {
    display: none;
  }

  svg {
    font-size: 6.5vw;
  }
}
</style>
