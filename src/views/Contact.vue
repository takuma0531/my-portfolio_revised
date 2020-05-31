<template>
  <div class="contact">
    <div class="body">
      <h4>Contact</h4>
      <div class="content">
        <div class="link-field">
          <a class="link" href="https://www.linkedin.com/in/takuma-masaki-linked-in/"><i class="fab fa-linkedin"></i><span>LinkedIn &#x0003E;</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact {
  padding-bottom: 49.6vh;
}

.link-field {
  width: 100%;
  text-align: center;
  margin-top: 5vw;
}

.link {
  font-size: 1.4vw;
}

@media screen and (max-width: 1024px) {
  .contact {
    padding-bottom: 61.2vh;
  }

  .link-field {
    margin-top: 25vw;
  }

  .link {
    font-size: 3vw;
  }
}

@media screen and (max-width: 414px) {
  .contact {
    padding-bottom: 68.2vh;
  }

  .body {
    margin-top: 10vh;
  }

  h4 {
    font-size: 6vw;
  }

  .link {
    font-size: 4vw;
  }
}

@media screen and (max-width: 375px) {
  .contact {
    padding-bottom: 73.8vh;
  }
}

@media (max-width: 375px) and (max-height: 700px) {
  .contact {
    padding-bottom: 68.2vh;
  }
}
</style>
