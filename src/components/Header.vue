<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <b-navbar-brand to="/">
        <div class="navbar-brand-circle">
          <img src="../assets/img/AP-logo-2020.png" class="align-middle" alt="Adam Pluth logo" to="/">
        </div>
      </b-navbar-brand>
      <!-- <router-link class="navbar-brand" to="/">Stock Trader</router-link> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/ui-ux" activeClass="active">UI/UX & Development</b-nav-item>
          <b-nav-item to="/photography" activeClass="active">Photography</b-nav-item>
          <b-nav-item to="/about" activeClass="active">About</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/styles/custom.scss';

@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.navbar {
  box-shadow: 0 3px 2px -2px rgba(0,0,0,.2);
  background-color: #fff;
    display: flex;
  flex-shrink: 0!important;
  &-brand {
  position: relative;

    img {
      height: 50px;
      position: absolute;
      top: 39px;
      left: 20px;
    }

    &-circle {
      border-radius: 50%;
      width: 110px;
      height: 110px;
      background-color: #fff;
      position: absolute;
      top: -50px;
      left: -25px;
      box-shadow: 0 3px 2px -2px rgba(0,0,0,.2);
    }
  }
  &-nav {
    font-family: $font-family-sans-serif;
    .nav-item {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 2px;
    }
  }
  &-expand-lg .navbar-nav .nav-link {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2px;
    color: orange!important;
    border-bottom: 2px solid $white;

    &.active {
      border-bottom: 2px solid rgb(189, 85, 112);
      &.router-link-exact-active {
        color: rgb(189, 85, 112)!important;
      }
    }
  }
}
</style>
