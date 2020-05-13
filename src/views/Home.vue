<template>
  <div class="home">
    <div class="header">
      <h4 class="greeting">Thank you for visiting my website!</h4>
      <router-link to="/cv">
        <img class="my-img" src="../assets/my-image.jpg" alt="my-image">
      </router-link>
    </div>

    <div class="body">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.header {
  backdrop-filter: blur(10px) brightness(70%);
  padding-top: 10vw;
  padding-bottom: 10vw;
}

.greeting {
  margin: 0 0 40px 0;
  text-align: center;
}

.my-img {
  border-radius: 50%;
  height: 10vw;
  margin-left: 46%;
}

.my-img:hover {
  filter: brightness(80%);
}

.body {
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

@media screen and (max-width: 1025px) {
  .header {
    padding-top: 25vw;
    padding-bottom: 57vw;
  }

  .greeting {
    margin-bottom: 10vw;
  }

  .my-img {
    height: 15vw;
  }
}

@media screen and (max-width: 414px) {
  .header {
    padding-top: 25vw;
    padding-bottom: 95vw;
  }

  .greeting {
    margin-bottom: 15vw;
  }

  .my-img {
    height: 15vw;
  }
}
</style>
