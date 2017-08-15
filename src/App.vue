<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" style="width: 60px; ">
      <h1>Sample vue-loader</h1>
      <div id="time"></div>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Top</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/user/">User</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <div class="contents">
        <router-view></router-view>
      </div>
      <div class="sidebar">
        <router-view name="side"></router-view>
        <side-common></side-common>
      </div>
    </main>
    <footer>
      <div>
        &copy;ninomaeao
      </div>
    </footer>
  </div>
</template>

<script>
  import sideCommon from './components/side-common.vue';
  import moment from 'moment'

  export default {
    name: 'app',
    components: {
      sideCommon
    },
    created() {
      window.setInterval(() => {
        document.getElementById('time').innerText = moment().format('YYYY-MM-DD HH:mm:ss');
      }, 1000);
    },
  }
</script>

<style lang="scss">
  @import "./main";

  #app {
    background: $mainColor;
    max-width: 1200px;
    margin: 0 auto;
  }

  header {
    padding: 30px 0;
    text-align: center;
    color: $accentColor;
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: $mainColorDark;
    margin: 0 10px;
    padding: 10px;
    li {
      list-style: none;
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    .contents {
      h2 {
        color: $accentColor;
      }
      width: 100%;
      background: $mainColorDark;
      margin: 10px;
      padding: 10px;
    }
    .sidebar {
      background: $mainColorDark;
      width: 250px;
      margin: 10px;
      & > div {
        width: 100%;
        margin: 10px 0;
        background: rgba(0, 0, 0, 0.1);
        &:first-of-type {
          margin-top: 0;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  footer {
    text-align: center;
    background: $baseColor;
    border-top: 1px solid #ccc;
    color: $accentColorDark;

    padding: 30px 0;
  }

  @media (max-width: 500px) {
    main {
      flex-direction: column;
      align-items: center;
      margin: 10px;
      .contents {
        width: 100%;
      }
      .sidebar {
        width: 100%;
      }
    }
  }
</style>
