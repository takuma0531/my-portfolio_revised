<template>
  <div class="under-bar">
    <div class="cv">
      <router-link class="router" to="/cv">
        <i class="fas fa-file"></i>
        <h3>CV</h3>
      </router-link>
    </div>

    <div class="projects">
      <router-link class="router" to="/projects">
        <i class="fas fa-project-diagram"></i>
        <h3>Projects</h3>
      </router-link>
    </div>

    <div class="contact">
      <router-link class="router" to="/contact">
        <i class="fas fa-user"></i>
        <h3>Contact</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderBar',
};
</script>

<style scoped>
.under-bar {
  display: flex;
  background-color: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: 15vw;
  justify-content: center;
  align-items: center;
}

.cv, .projects, .contact {
  width: 33.3%;
  text-align: center;
  font-size: 2vw;
}

.router > h3 {
  margin-top: 0.4vw;
}

/* icon */
svg {
  padding: 1.3vw;
  background: white;
  border: white solid 1px;
  border-radius: 50%;
  color: #000000c4;
}

@media screen and (max-width: 1024px) {
  .under-bar {
    height: 20vw;
  }

  .router > h3 {
    margin-top: 1.1vw;
  }
}
</style>
