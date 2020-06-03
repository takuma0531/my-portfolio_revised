<template>
  <div class="contact">
    <div class="body">
      <h1>Contact</h1>
      <div class="content">
        <div class="link-field">
          <a class="link" href="https://www.linkedin.com/in/takuma-masaki-linked-in/"><i class="fab fa-linkedin"></i><span>LinkedIn</span></a>
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

<style lang="scss" scoped>
.contact {
  h1 {
    font-size: 28px;
    text-align: center;
  }

  .link-field {
    text-align: center;
    margin-top: 100px;

    .link {
      font-size: 20px;
    }

    span {
      margin-left: 5px;
    }
  }
}
</style>
