<template>
  <div class="home">
    <div class="container-xl my-auto">
      <img class="mb-5" alt="Adam Pluth logo" src="../assets/img/AP-logo-2020.png">
      <app-intro-bar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IntroBar from '@/components/IntroBar.vue'

export default {
  name: 'Home',
  components: {
    'app-intro-bar': IntroBar
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 100%;
  background: url('../assets/img/AP-portfolio-homepage-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex:2;
}
</style>
