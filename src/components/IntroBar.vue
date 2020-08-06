<template>
  <div>
    <h1 class="mb-5 white-transparent">The Portfolio of Adam Pluth</h1>
    <div class="home-links-bar row">
      <div class="col-12 col-md-4">
        <b-button variant="transparent" type="button" class="btn btn-lg btn-block my-3" to="/ui-ux">UI/UX and Development</b-button>
      </div>
      <div class="col-12 col-md-4">
        <b-button variant="transparent" type="button" class="btn btn-lg btn-block my-3" to="/photography">Photography</b-button>
      </div>
      <div class="col-12 col-md-4">
        <b-button variant="transparent" type="button" class="btn btn-lg btn-block my-3" to="/about">About</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroBar',
  data: () => ({
    showAlert: false
  }),
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.home-links-bar {
  padding: 20px 20px;
}

</style>
