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
  width: 100%;
}

ul {
  padding: 0.5%;
  margin: 0;
  display: flex;
}

ul > li {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 2vw;
}

.img-router {
  margin-left: auto;
}

.my-img {
  border-radius: 50%;
  height: 3vw;
  vertical-align: middle;
}

@media screen and (max-width: 1025px) {
  ul {
    height: 4.5vw;
  }

  ul > li {
    font-size: 3.5vw;
  }

  .my-img {
    height: 4.5vw;
  }
}

@media screen and (max-width: 414px) {
  ul {
    height: 8vw;
  }

  ul > li {
    font-size: 5vw;
    padding-right: 10px;
    padding-left: 10px;
  }

  .my-img {
    height: 6.5vw;
  }
}
</style>
