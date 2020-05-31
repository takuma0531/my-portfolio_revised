<template>
  <div class="projects">
    <div class="body">
      <h4>Projects</h4>
      <div class="content">

        <button class="l-btn" v-on:click="clickLeft">&#x0003C;</button>

        <button class="r-btn" v-on:click="clickRight">&#x0003E;</button>

        <div class="project">
          <img src="../assets/vuejs.jpg" alt="">

          <div class="app-content">
            <p class="app-title">My Portfolio</p>
            <p class="app-description">This application is built with Vue.js</p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/my-portfolio_revised"><span>code</span><i class="fas fa-code"></i></a>
          </div>
        </div>

        <div class="project">
          <img src="../assets/chart_board.jpg" alt="">

          <div class="app-content">
            <p class="app-title">Chart Board</p>
            <p class="app-description">
              This application is built with Vue.js and
              Google Firebase. It provides mainly BitCoin/
              USD rate and confirmed COVID-19 cases in U.S.
              for last 45 days.
            </p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/cryptocurrency-board-app"><span>code</span><i class="fas fa-code"></i></a>

            <a class="app link" href="https://chart-board-27116.firebaseapp.com/"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
          </div>
        </div>

        <div class="project">
          <img src="../assets/simple_board.jpg" alt="">

          <div class="app-content">
            <p class="app-title">Simple Board</p>
            <p class="app-description">
              This application is built with Vue.js. It provides its users with chat function.
            </p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/simple-board-app-frontend"><span>code</span><i class="fas fa-code"></i></a>

            <a class="app link" href="https://simple-board-app-frontend.herokuapp.com/board-app"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
          </div>
        </div>

        <div class="project">
          <img src="../assets/flask.jpg" alt="">

          <div class="app-content">
            <p class="app-title">Simple Board API</p>
            <p class="app-description">
              This is Simple Board API built with Flask. It provides chatting CRUD functions.
            </p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/simple-board-app-backend"><span>code</span><i class="fas fa-code"></i></a>
          </div>
        </div>

        <div class="project">
          <img src="../assets/studentmanagamentsystemconsoleapp.jpg" alt="">

          <div class="app-content">
            <p class="app-title">Student Management System</p>
            <p class="app-description">
              This is a console application built with C# and .NET, with using Microst SQL Server.
            </p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/Student_Module_Management_System"><span>code</span><i class="fas fa-code"></i></a>
          </div>
        </div>

        <div class="project">
          <img src="../assets/memorygame.jpg" alt="">

          <div class="app-content">
            <p class="app-title">Memory Game</p>
            <p class="app-description">
              This application is built with Vue.js and Vuex.
              The users can play the game intuitively.
            </p>
          </div>

          <div class="link-field">
            <a class="code link" href="https://github.com/takuma0531/memory-game-vue.js"><span>code</span><i class="fas fa-code"></i></a>

            <a class="app link" href="https://memory-game-vue.herokuapp.com/"><span>app</span><i class="fas fa-digital-tachograph"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      img: 'simple_board.jpg',
    };
  },

  methods: {
    clickLeft() {
      document.querySelector('.content').scrollLeft -= 212;
    },
    clickRight() {
      document.querySelector('.content').scrollLeft += 212;
    },
  },
};
</script>

<style scoped>
.content {
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  height: 22vh;
}

.app-content {
  background: rgba(241, 241, 241, 0.047);
}

.app-title {
  margin: 0px 0 2px 0;
  font-weight: bold;
  white-space: nowrap;
  height: 3vh;
  width: 100%;
  font-size: 1.2vw;
}

.app-description {
  margin: 0;
  font-size: 1vw;
  height: 11vh;
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

button {
  display: none;
}

@media screen and (max-width: 1024px) {
  .content {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 15vh;
  }

  .project {
    width: 33vw;
  }

  .app-title {
    font-size: 2.3vw;
  }

  .app-description {
    font-size: 2vw;
  }

  .link {
    font-size: 2.5vw;
  }

  .project > img {
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  .projects {
    padding-bottom: 8.1vh;
  }

  .body {
    margin: 10vh auto;
  }

  .content {
    display: flex;
    margin: 0 24.5vw;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  h4 {
    font-size: 6vw;
  }

  .project {
    width: 210px;
  }

  .project > img {
    width: 210px;
    height: 140px;
  }

  .app-title {
    font-size: 3.2vw;
  }

  .app-description {
    font-size: 3vw;
    height: 20vw;
  }

  .link {
    font-size: 4vw;
  }

  button {
    display: block;
    color: white;
    font-size: 5vw;
    padding: 7px;
    background: #00000047;
  }

  .l-btn {
    position: fixed;
    left: 30px;
    margin-top: 36vw;
    margin-left: 1vw;
  }

  .r-btn {
    position: fixed;
    right: 30px;
    margin-top: 36vw;
    margin-right: 1vw;
  }
}

@media screen and (max-width: 375px) {
  .projects {
    padding-bottom: 10.7vh;
  }

  .content {
    margin: 5vh 21.71vw;
  }
}

@media (max-width: 375px) and (max-height: 700px) {
  .projects {
    padding-bottom: 4vh;
  }

  .content {
    margin: 0 20.6vw;
  }
}

</style>
