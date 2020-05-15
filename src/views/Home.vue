<template>
  <div class="home">
    <div class="header">
      <h4 class="greeting">Thank you for visiting my website!</h4>
      <router-link to="/cv">
        <img class="my-img" src="../assets/my-image.jpg" alt="my-image">
      </router-link>
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
  padding-bottom: 9vw;
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
    padding-top: 10vw;
    padding-bottom: 70vw;
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

@media screen and (max-width: 375px) {
  .header {
    padding-bottom: 130vw;
  }
}

@media (max-width: 375px) and (max-height: 700px) {
  .header {
    padding-bottom: 90vw;
  }
}
</style>
