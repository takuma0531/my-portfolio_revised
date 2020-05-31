<template>
  <div class="home">
    <div class="body">
      <div class="header">
        <h4 class="greeting">Thank you for visiting my website!</h4>
        <router-link to="/cv">
          <img class="my-img" src="../assets/my-image.jpg" alt="my-image">
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
  padding-top: 16vh;
  padding-bottom: 28vh;
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

@media screen and (max-width: 1024px) {
  .header {
    padding-top: 6vh;
    padding-bottom: 47vh;
  }

  .greeting {
    margin-top: 20vw;
    margin-bottom: 10vw;
  }

  .my-img {
    height: 15vw;
  }
}

@media screen and (max-width: 414px) {
  .header {
    padding-bottom: 50vh;
  }

  .greeting {
    margin-bottom: 15vw;
    font-size: 6vw;
  }

  .my-img {
    height: 25vw;
    margin-left: 40%;
  }
}

@media screen and (max-width: 375px) {
  .header {
    padding-bottom: 57.7vh;
  }
}

@media (max-width: 375px) and (max-height: 700px) {
  .header {
    padding-bottom: 50vh;
  }
}
</style>
