<template>
  <div class="home">
    <div class="body">
        <h1>Thank you for visiting my website!</h1>
        <div class="img-field">
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

<style lang="scss" scoped>
.body {
  backdrop-filter: blur(10px) brightness(70%);
  padding-top: 16vh;

  h1 {
    margin: 0 0 40px 0;;
    text-align: center;
  }

  .img-field {
    text-align: center;
    .my-img {
      border-radius: 50%;
      height: 150px;
    }

    .my-img:hover {
      filter: brightness(80%);
    }
  }
}

@media screen and (max-width: 1200px) {
  .body {
    h1 {
      font-size: 28px;
    }
  }
}

@media screen and (max-width: 500px) {
  .body {
    h1 {
      font-size: 22px;
    }

    .img-field {
      .my-img {
        height: 130px;
      }
    }
  }
}
</style>
