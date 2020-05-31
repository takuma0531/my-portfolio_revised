<template>
  <div class="cv">
    <div class="body">
      <h4>CV</h4>
      <div class="content">

        <div class="personal-info">
          <h5>Personal Information</h5>
          <p class="each-info">Name: Takuma Masaki</p>
          <p class="each-info">Address: Varna, Bulgaria</p>
          <p class="each-info">Phone Number: +359 88 2370014</p>
          <p class="each-info">Email: tb.masaki0531@gmail.com</p>
        </div>

        <div class="objective">
          <h5>Objective</h5>
          <p class="each-info">
            Seeking an internship as a software engineer in EU to acquire practical experience
          </p>
        </div>

        <div class="education">
          <h5>Education</h5>
          <ul>
            <li class="each-info">
              <p>2016-2020 Kansaigaidai University in Osaka, Japan</p>
              <p>B.A. in English Linguistics</p>
            </li>
            <li class="each-info">
              <p>2020 - 2022 Varna University of Management in Varna, Bulgaria</p>
              <p>B.A.(expected) in Computer Science</p>
            </li>
          </ul>
        </div>

        <div class="work-ex">
          <h5>Work Experience</h5>
          <p class="each-info">No experience related to Software Engineering</p>
        </div>

        <div class="skill">
          <h5>Skill</h5>
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

<style scoped>
.content {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
}

.content > * {
  width: 28%;
  padding: 20px 10px;
  margin: 20px auto;
  border-right: #ffffff4d solid 1px;
}

@media screen and (max-width: 1024px) {
    .cv {
      padding-bottom: 18.4vh;
    }
}

@media screen and (max-width: 414px) {
  .body {
    margin-top: 10vh;
  }

  .content {
    display: block;
    padding: 0;
  }

  .content > * {
    width: 90%;
    text-align: center;
    padding: 10px 0;
    margin: 10px auto;
    border-right: none;
    border-bottom: #ffffff4d solid 1px;
  }

  h4 {
    font-size: 6vw;
  }
}
</style>
