<template>
  <div class="under-bar">
    <div class="cv">
      <router-link class="router" to="/cv">
        <i class="fas fa-file"></i>
        <h4>CV</h4>
      </router-link>
    </div>

    <div class="projects">
      <router-link class="router" to="/projects">
        <i class="fas fa-project-diagram"></i>
        <h4>Projects</h4>
      </router-link>
    </div>

    <div class="contact">
      <router-link class="router" to="/contact">
        <i class="fas fa-user"></i>
        <h4>Contact</h4>
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
  height: 20vw;
  justify-content: center;
  align-items: center;
}

.cv, .projects, .contact {
  width: 33.3%;
  text-align: center;
  font-size: 2vw;
}

.router > h4 {
  margin-top: 1.1vw;
}

/* icon */
svg {
  padding: 1.3vw;
  background: white;
  border: white solid 1px;
  border-radius: 50%;
  color: #000000c4;
}
</style>
