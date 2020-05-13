<template>
  <div class="projects">
    <TopBar />

    <h4>Projects</h4>
    <div class="body">

      <div class="project">
        <img src="../assets/vuejs.jpg" alt="">
        <p class="app-title">My Portfolio</p>
        <p class="app-description">This application is built with Vue.js</p>

        <div class="link-field">
          <a class="code link" href="https://github.com/takuma0531/my-portfolio"><span>code</span><i class="fas fa-code"></i></a>
        </div>
      </div>

      <div class="project">
          <img src="../assets/chart_board.jpg" alt="">

          <p class="app-title">Chart Board</p>
          <p class="app-description">
            This application is built with Vue.js and
            Google Firebase. It provides mainly BitCoin/
            USD rate and confirmed COVID-19 cases in U.S.
            for last 45 days.
          </p>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/cryptocurrency-board-app"><span>code</span><i class="fas fa-code"></i></a>

            <a class="app link" href="https://chart-board-27116.firebaseapp.com/"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
          </div>
      </div>

      <div class="project">
        <img src="../assets/simple_board.jpg" alt="">

          <p class="app-title">Simple Board</p>
          <p class="app-description">
            This application is built with Vue.js. It provides its users with chat function.
          </p>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/simple-board-app-frontend"><span>code</span><i class="fas fa-code"></i></a>

            <a class="app link" href="https://simple-board-app-frontend.herokuapp.com/board-app"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
          </div>
      </div>

      <div class="project">
        <img src="../assets/flask.jpg" alt="">

        <p class="app-title">Simple Board API</p>
        <p class="app-description">
          This is Simple Board API built with Flask. It provides chatting CRUD functions.
        </p>

        <div class="link-field">
          <a class="code link" href="https://github.com/takuma0531/simple-board-app-backend"><span>code</span><i class="fas fa-code"></i></a>
        </div>
      </div>

      <div class="project">
        <img src="../assets/studentmanagamentsystemconsoleapp.jpg" alt="">
        <p class="app-title">Student Management System</p>
        <p class="app-description">
          This is a console application built with C# and .NET, with using Microst SQL Server.
        </p>

        <div class="link-field">
          <a class="code link" href="https://github.com/takuma0531/Student_Module_Management_System"><span>code</span><i class="fas fa-code"></i></a>
        </div>
      </div>

      <div class="project">
        <img src="../assets/memorygame.jpg" alt="">

        <p class="app-title">Memory Game</p>
        <p class="app-description">
          This application is built with Vue.js and Vuex. The users can play the game intuitively.
        </p>

        <div class="link-field">
          <a class="code link" href="https://github.com/takuma0531/memory-game-vue.js"><span>code</span><i class="fas fa-code"></i></a>

          <a class="app link" href="https://memory-game-vue.herokuapp.com/"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue';

export default {
  name: 'Projects',
  components: {
    TopBar,
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-wrap: wrap;
}

.project {
  width: 20vw;
  margin: 20px auto;
  border-style: outset;
  border-width: 1px;
  border-color: #ffffff1f;
}

.project > img {
  width: 20vw;
  height: 13vw;
}

.app-title {
  margin: -5px 0 2px 0;
  font-weight: bold;
  font-size: 1.2vw;
}

.app-description {
  margin: 0;
  font-size: 1vw;
  height: 6vw;
  padding-bottom: 5px;
  border-bottom: #ffffff1f solid 1px;
}

.link-field {
  display: flex;
}

.link {
  border-right:#ffffff1f solid 1px;
  background: #33262640;
  font-size: 1.4vw;
  font-weight: bold;
  width: 100%;
  text-align: center;
}

.link:hover {
  background: #3326262e;
  color: #eae3e39f;
}

span {
  margin-right: 5px;
}

@media screen and (max-width: 1025px) {
  .projects {
    padding-bottom: 115%;
  }

  .project {
    margin: 40px auto;
    width: 26%;
  }

  .project > img {
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  .body {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    flex-wrap: nowrap;
    margin: 20px;
  }

  .project {
    width: 50vw;
    margin: 10px;
  }

  .project > img {
    width: 50vw;
    height: 40vw;
  }

  .app-title {
  font-size: 3.2vw;
}

.app-description {
  font-size: 3vw;
  height: 20vw;
}

  .link {
    font-size: 3.5vw;
  }
}
</style>
