<template>
  <div class="section m-auto">
    <div class="page-width ">
      <div class="page-layout">
        <div class="page-number">
          <span>
            {{ projNumber }}
          </span>
        </div>
        <div class="page-name">
          <h3>
            {{ projTitle }}
          </h3>
        </div>
        <div class="page-desc">
          <h4>
            Project Type:
          </h4>
          <p>
            {{ projType }}
          </p>
          <h4>
            Role:
          </h4>
          <p>
            {{ projRole }}
          </p>
          <h4>
            Skills Used:
          </h4>
          <p>
            {{ projSkills }}
          </p>
        </div>
        <div class="page-gallery">
          <div v-if="projNumber === 1">
            <b-img v-for="(item, i) in projItems" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-1 fluid block></b-img>
          </div>
          <div v-if="projNumber === 2">
            <b-img v-for="(item, i) in projItems" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-2 fluid block></b-img>
          </div>
          <div v-if="projNumber === 3">
            <b-img v-for="(item, i) in projItems" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-3 fluid block></b-img>
          </div>
          <b-modal :id="projModal" size="lg" hide-footer centered scrollable>
            <b-img :src="selectedImg.pathLarge" :alt="selectedImg.alt" fluid block></b-img>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    projNumber: Number,
    projType: String,
    projTitle: String,
    projRole: String,
    projSkills: String,
    projItems: Array,
    projModal: String,
    selectedImg: String
  },
  methods: {
    selectImg (item) {
      this.selectedImg = item
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';

@mixin palette($color) {
  .page-number {
    background-color: rgba($color, 45%);
  }

  .page-name {
    background-color: rgba($color, 35%);
  }

  .page-desc {
    background-color: rgba($color, 20%);
  }

  .page-gallery {
    background-color: rgba($color, 10%);
  }
}

.page-layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1500px;
  margin: auto;
  padding: 70px 50px 0;
  @include palette($color: $white);

  .page-number {
    max-width: 45px;
    min-width: 45px;
    height: 45px;
    margin-top: 25px;
    font: 2rem/1.2 $font-family-header;
    text-align: center;

    span {
      text-align: center;
      display: block;
      width: 100%;
    }
  }

  .page-name {
    max-width: 200px;
    margin-bottom: auto;
    padding: 20px;
    font: 1.5rem/1.3 $font-family-header;
    margin-top: 45px;
  }

  .page-desc {
    padding: 20px;
    min-width: 300px;
    max-width: 500px;
    margin-bottom: auto;
    font: 1rem/1.3 $font-family-sans-serif;
    margin-top: 25px;

    p:last-child {
      margin-bottom: 0;
    }
  }

  .page-gallery {
    padding: 5px;

    & > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &-thumb {
      padding: 5px;
    }
  }
}
</style>

<style lang="scss">
.modal-header {
  border: none;
}
</style>
