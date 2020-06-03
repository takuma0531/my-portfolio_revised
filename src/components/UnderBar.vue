<template>
  <div class="under-bar">
    <div class="body">
      <div class="menu-field">
        <router-link class="router" to="/cv">
          <i class="fas fa-file"></i>
          <h3>CV</h3>
        </router-link>
      </div>

      <div class="menu-field">
        <router-link class="router" to="/projects">
          <i class="fas fa-project-diagram"></i>
          <h3>Projects</h3>
        </router-link>
      </div>

      <div class="menu-field">
        <router-link class="router" to="/contact">
          <i class="fas fa-user"></i>
          <h3>Contact</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderBar',
};
</script>

<style lang="scss" scoped>
.under-bar {
  background-color: #000000c7;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  bottom: 0;
}

.body {
  width: 100%;
  max-width: 1200px;
  height: 100px;
  margin: auto;
  display: flex;

  .menu-field {
    width: 33.3%;
    text-align: center;
    font-size: 20px;

    .router {
      /* icon */
      svg {
        margin-top: 7px;
        padding: 15px;
        background: white;
        border: white solid 1px;
        border-radius: 50%;
        color: #000000c4;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
}

@media screen and (max-width: 830px) {
  .under-bar {
    .body {
      height: 100px;

      .menu-field {
        .router {
          svg {
            font-size: 18px;
            padding: 10px;
          }

          h3 {
            font-size: 20px;
            margin-top: 1px;
          }
        }
      }
    }
  }
}
</style>
