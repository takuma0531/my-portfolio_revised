<template>
  <div class="cv">
    <div class="body">
      <h1>CV</h1>
      <div class="content">

        <div class="personal-info">
          <h2>Personal Information</h2>
          <p class="each-info">Name: Takuma Masaki</p>
          <p class="each-info">Address: Varna, Bulgaria</p>
          <p class="each-info">Phone Number: +359 88 2370014</p>
          <p class="each-info">Email: tb.masaki0531@gmail.com</p>
        </div>

        <div class="objective">
          <h2>Objective</h2>
          <p class="each-info">
            Seeking an internship as a software engineer in EU to acquire practical experience
          </p>
        </div>

        <div class="education">
          <h2>Education</h2>
              <p>2016-2020 Kansaigaidai University in Osaka, Japan</p>
              <p>B.A. in English Linguistics</p>
              <p>2020 - 2022 Varna University of Management in Varna, Bulgaria</p>
              <p>B.A.(expected) in Computer Science</p>
        </div>

        <div class="work-ex">
          <h2>Work Experience</h2>
          <p class="each-info">No experience related to Software Engineering</p>
        </div>

        <div class="skill">
          <h2>Skill</h2>
          <p class="each-info">
            HTML, CSS,
            JavaScript, Vue.js,
            Python, Flask,
            C#, .NET Core,
            MYSQL, MYSQL Server
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cv',
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 28px;
}

.content {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 30px;
    font-size: 23px;
  }

  p {
    font-size: 17px;
  }
}

.content > * {
  width: 28%;
  padding: 20px 10px;
  margin: 20px auto;
  border-right: #ffffff4d solid 1px;
}

@media screen and (max-width: 1000px) {
  .content > * {
    width: 40%;
    padding: 10px 5px 20px 0;
  }
}

@media screen and (max-width: 700px) {
  .content {
    display: block;
    padding: 0;
  }

  .content > * {
    border-right: none;
    border-bottom: #ffffff4d solid 1px;
    width: 85%;
  }
}
</style>
