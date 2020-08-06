<template>
  <div id="app">
    <div id="nav" v-if="!homePage">
      <app-header/>
    </div>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {
    homePage () {
      if (this.$route.path === '/' || this.$route.path === '/home') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex!important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
