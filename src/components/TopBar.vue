<template>
  <div class="top-bar">
    <ul>
      <li>
        <router-link class="router" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="router" to="/cv">CV</router-link>
      </li>
      <li>
        <router-link class="router" to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link class="router" to="/contact">Contact</router-link>
      </li>
      <li class="img-router">
        <router-link class="router" to="/">
          <img class="my-img" src="../assets/my-image.jpg" alt="my-img">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped>
.top-bar {
  background-color: #000000c7;
  backdrop-filter: blur(10px);
  margin: 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

ul {
  padding: 0.5%;
  margin: 0;
  display: flex;
}

ul > li {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1.5vw;
}

.img-router {
  margin-left: auto;
}

.my-img {
  border-radius: 50%;
  height: 2.5vw;
  vertical-align: middle;
}

@media screen and (max-width: 1025px) {
  ul {
    height: 3.5vw;
  }

  ul > li {
    font-size: 2.5vw;
  }

  .my-img {
    height: 3.5vw;
  }
}

@media screen and (max-width: 414px) {
  ul {
    height: 4.5vw;
  }

  ul > li {
    font-size: 3.5vw;
  }

  .my-img {
    height: 4vw;
  }
}
</style>
