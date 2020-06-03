<template>
  <div class="projects">
    <div class="body laptop">
      <h1>Projects</h1>
      <div class="content">
        <div class="project" v-for="project in projects" :key="project.id">
          <img :src="`${publicPath}images/${project.img_src}`" alt="img">

          <div class="app-content">
            <p class="app-title">
              {{ project.title }}
            </p>
            <p class="app-description">
              {{ project.description  }}
            </p>
          </div>

          <div class="link-field">
            <a v-if="project.code_link" :href="`${project.code_link}`" class="link" target="_blank">
              <span>code</span>
              <i class="fas fa-code"></i>
            </a>
            <a v-if="project.app_link" :href="project.app_link" class="link" target="_blank">
              <span>app</span>
              <i class="fas fa-digital-tachograph"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- The following code is rendered on only mobile device  -->
    <div class="body mobile">
      <div class="content-for-mobile">
        <div class="project">
          <img :src="`${publicPath}images/${project.img_src}`" alt="img">

          <div class="app-content">
            <p class="app-title">
              {{ project.title }}
            </p>
            <p class="app-description">
              {{ project.description }}
            </p>
          </div>

          <div class="link-field">
            <a v-if="project.code_link" :href="`${project.code_link}`" class="link" target="_blank">
              <span>code</span>
              <i class="fas fa-code"></i>
            </a>
            <a v-if="project.app_link" :href="project.app_link" class="link" target="_blank">
              <span>app</span>
              <i class="fas fa-digital-tachograph"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="dots">
        <span
        v-for="project in projects"
        :key="project.id"
        :class="[dot, (project.id === currentId) ? selected: '']"
        v-on:click="selectProject(project.id)" />
      </div>
    </div>

  </div>
</template>

<script>
import projects from '../assets/projects/projects.json';

export default {
  name: 'Projects',
  data() {
    return {
      projects,
      publicPath: process.env.BASE_URL,
      // the following code is for mobile device
      currentId: 1,
      dot: 'dot',
      selected: 'selected',
    };
  },
  computed: {
    project() {
      return this.projects.find((project) => project.id === this.currentId);
    },
  },
  methods: {
    selectProject(id) {
      this.currentId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 13vh;

  .laptop {
    h1 {
      font-size: 28px;
      text-align: center;
    }

    .content {
      padding: 20px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .button {
        display: none;
      }

      .project {
        width: 300px;
        margin: 20px auto;
        border-style: outset;
        border-width: 1px;
        border-color: #ffffff1f;

        img {
          width: 100%;
          height: 200px;
        }

        .app-content {
          background: rgba(241, 241, 241, 0.047);

          .app-title {
            margin: 0px 0 2px 0;
            font-weight: bold;
            white-space: nowrap;
            height: 30px;
            width: 100%;
            font-size: 20px;
          }

          .app-description {
            margin: 0;
            font-size: 17px;
            height: 120px;
            border-bottom: #ffffff1f solid 1px;
          }
        }

        .link-field {
          display: flex;

          .link {
            border-right:#ffffff1f solid 1px;
            background: #33262640;
            font-size: 23px;
            font-weight: bold;
            width: 100%;
            text-align: center;

            span {
              margin-right: 5px;
            }
          }

          .link:hover {
            background: #3326262e;
            color: #eae3e39f;
          }
        }
      }
    }
  }

  .mobile {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .projects {
    .laptop {
      h1 {

      }

      .content {
        grid-template-columns: 1fr 1fr;

        .project {
        }
      }
    }
  }
}

@media screen and (max-width: 730px) {
  .projects {
    .laptop {
      .content {
        display: none;
      }
    }

    .mobile {
      display: block;

      .content-for-mobile {

        .project {
          width: 280px;
          margin: 20px auto;
          border-style: outset;
          border-width: 1px;
          border-color: #ffffff1f;

          img {
            width: 100%;
            height: 180px;
          }

          .app-content {
            background: rgba(241, 241, 241, 0.047);

            .app-title {
              margin: 0;
              font-weight: bold;
              font-size: 16px;
              height: 30px;
            }

            .app-description {
              margin: 0;
              font-size: 14px;
              height: 100px;
              border-bottom: #ffffff1f solid 1px;
            }
          }

          .link-field {
            display: flex;

            .link {
              border-right:#ffffff1f solid 1px;
              background: #33262640;
              font-size: 19px;
              width: 100%;
              text-align: center;

              span {
                margin-right: 5px;
              }
            }

            .link:active {
              background: #3326262e;
              color: #eae3e39f;
            }
          }

        }
      }

      .dots {
        display: flex;
        width: 70%;
        margin: auto;

        .dot {
          margin: auto;
          height: 20px;
          width: 20px;
          background-color: #000000c7;
          border-radius: 50%;
        }

        .selected {
          background-color: #757575c2;
        }
      }
    }
  }
}

@media screen and (max-width: 375px) and (max-height: 667px) {
  .projects {
    .mobile {
      .content-for-mobile {
        .project {
          width: 250px;
          img {
            height: 150px;
          }
        }
      }
    }
  }
}
</style>
