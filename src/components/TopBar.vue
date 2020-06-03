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

<style lang="scss" scoped>
.top-bar {
  background-color: #000000c7;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;

  .body {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    position: relative;
    padding: 15px 0;

    .menu {
      .router {
        padding-left: 15px;
        padding-right: 15px;
        font-size: 25px;
        font-weight: bold;
      }
    }

    .img-field {
      position: absolute;
      right: 0;

      .my-img {
        border-radius: 50%;
        height: 40px;
      }
    }

    .bar-icon {
      display: none;
    }
  }
}

@media screen and (max-width: 1200px) {
  .top-bar {
    .body {
      .img-field {
        right: 10px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .top-bar {
    height: 55px;

    .body {
      .menu {
        display: none;
        margin-top: 40px;
        position: absolute;
        z-index: 1;
        width: 100%;

        .router {
          padding: 6px 10px;
          display: block;
          background: #000000c7;
        }

        .router:hover {
          background: #5f5f5f;
        }
      }

      .img-field {
        left: 1px;
        top: 4px;

        .my-img {
          height: 50px;
        }
      }

      .bar-icon {
        display: inline-block;
        position: absolute;
        right: 7px;
        top: 8px;

        svg {
          font-size: 40px;
        }
      }

      .x {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .top-bar {
    position: absolute;
    z-index: 1;
    width: 100%;
  }
}
</style>
