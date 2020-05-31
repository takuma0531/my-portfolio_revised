<template>
  <div class="top-bar">
    <div class="body">
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
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
    };
  },
  methods: {
    clickBarIcon() {
      if (!this.$store.state.display) {
        this.$store.commit('renderMenu');
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.hum').style.display = 'none';
        document.querySelector('.x').style.display = 'block';
        window.event.stopPropagation();
      } else {
        this.$store.commit('unrenderMenu');
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
  margin: 0;
}

.body {
  margin: auto;
  display: flex;
  position: relative;
  padding: 2vh 0;
}

.menu > .router {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 2vw;
}

.img-field {
  position: absolute;
  right: 0;
  bottom: 0.5vh;
}

.my-img {
  border-radius: 50%;
  height: 5.5vh;
}

.bar-icon {
  display: none;
}

@media screen and (max-width: 1024px) {
  .body {
    padding: 2vh 0;
  }

  .menu > .router {
    font-size: 4vw;
  }

  .img-field {
    right: 1vw;
    bottom: 1vh;
  }
}

@media screen and (max-width: 414px) {
  .top-bar {
    height: 15vw;
  }

  .menu {
    display: none;
    margin-top: 6.4vh;
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .menu > .router {
    font-size: 6vw;
    padding: 8px 10px;
    display: block;
    background: #000000c7;
  }

  .menu > .router:hover {
    background: #5f5f5f;
  }

  .img-field {
    left: 1%;
    top: 5%;
  }

  .my-img {
    height: 14vw;
  }

  .bar-icon {
    display: inline-block;
    position: absolute;
    right: 3%;
    top: 15%;
  }

  .x {
    display: none;
  }

  svg {
    font-size: 11vw;
  }
}

@media screen and (max-width: 375px) {
  .menu {
    margin-top: 4.9vh;
  }
}

@media (max-width: 375px) and (max-height: 700px) {
  .menu {
    margin-top: 6.4vh;
  }
}
</style>
