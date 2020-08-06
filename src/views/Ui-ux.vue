<template>
  <div class="ui-ux">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <!-- ///////// Page 1 ///////// -->
        <div class="section m-auto">
          <div class="page-width ">
            <div class="page-layout page-layout-one">
              <div class="page-number">
                <span>
                  {{ ux1.projNumber }}
                </span>
              </div>
              <div class="page-name">
                <h3>
                  {{ ux1.projTitle }}
                </h3>
              </div>
              <div class="page-desc">
                <h4>
                  Project Type:
                </h4>
                <p>
                  {{ ux1.projType }}
                </p>
                <h4>
                  Role:
                </h4>
                <p>
                  {{ ux1.projRole }}
                </p>
                <h4>
                  Skills Used:
                </h4>
                <p>
                  {{ ux1.projSkills }}
                </p>
              </div>
              <div class="page-gallery">
                <b-img v-for="(item, i) in ux1.items" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-1 fluid block></b-img>
                <b-modal id="modal-1" size="lg" hide-footer="true" centered scrollable>
                  <b-img :src="selectedImg.pathLarge" :alt="selectedImg.alt" fluid block></b-img>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
        <!-- ///////// Page 2 ///////// -->
        <div class="section">
          <div class="page-width m-auto">
            <div class="page-layout page-layout-two">
              <div class="page-number">
                <span>
                  {{ ux2.projNumber }}
                </span>
              </div>
              <div class="page-name">
                <h3>
                  {{ ux2.projTitle }}
                </h3>
              </div>
              <div class="page-desc">
                <h4>
                  Project Type:
                </h4>
                <p>
                  {{ ux2.projType }}
                </p>
                <h4>
                  Role:
                </h4>
                <p>
                  {{ ux2.projRole }}
                </p>
                <h4>
                  Skills Used:
                </h4>
                <p>
                  {{ ux2.projSkills }}
                </p>
              </div>
              <div class="page-gallery">
                <b-img v-for="(item, i) in ux2.items" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-2 fluid block></b-img>
                <b-modal centered id="modal-2" size="lg" hide-footer="true">
                  <b-img :src="selectedImg.pathLarge" fluid block :alt="selectedImg.alt"></b-img>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
        <!-- ///////// Page 3 ///////// -->
        <div class="section">
          <div class="page-width m-auto">
            <div class="page-layout page-layout-one">
              <div class="page-number">
                <span>
                  {{ ux3.projNumber }}
                </span>
              </div>
              <div class="page-name">
                <h3>
                  {{ ux3.projTitle }}
                </h3>
              </div>
              <div class="page-desc">
                <h4>
                  Project Type:
                </h4>
                <p>
                  {{ ux3.projType }}
                </p>
                <h4>
                  Role:
                </h4>
                <p>
                  {{ ux3.projRole }}
                </p>
                <h4>
                  Skills Used:
                </h4>
                <p>
                  {{ ux3.projSkills }}
                </p>
              </div>
              <div class="page-gallery">
                <b-img v-for="(item, i) in ux3.items" :key="i" :src="item.pathThumb" :alt="item.alt" @click="selectImg(item) && (showModal = true)" class="page-gallery-thumb" v-b-modal.modal-3 fluid block></b-img>
                <b-modal centered id="modal-3" size="lg" hide-footer="true">
                  <b-img :src="selectedImg.pathLarge" fluid block :alt="selectedImg.alt"></b-img>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ux1: {
        projNumber: 1,
        projTitle: 'Richmond American Homes',
        projType: 'Company Website',
        projRole: 'Shared responsibilities with team and IT Department for redesign, styling, and coding of the company website. Analyzed Hotjar User Experience data for layout improvements.',
        projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing, A/B testing, final product user testing; Coding in HTML, Sass, jQuery, Bootstrap, and C# in Visual Studio.',
        items: [
          { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_01_Home_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_01_Home.jpg', alt: 'Richmond American Homes Website' },
          { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_03_CommLanding_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_03_CommLanding.jpg', alt: 'Richmond American Homes Website' },
          { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_05_DesignAHome_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_05_DesignAHome.jpg', alt: 'Richmond American Homes Website' },
          { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_07_CareerCenter_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_07_CareerCenter.jpg', alt: 'Richmond American Homes Website' }
        ]
      },
      ux2: {
        projNumber: 2,
        projTitle: 'Richmond American Homes',
        projType: 'Touchscreen Kiosk',
        projRole: 'Shared responsibilities with team and IT Department for redesign, styling, and coding of the company website. Analyzed Hotjar User Experience data for layout improvements.',
        projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing, A/B testing, final product user testing; Coding in HTML, Sass, jQuery, Bootstrap, and C# in Visual Studio.',
        items: [
          { pathThumb: '/img/rah-ts/RAH_TS3_00_MainDash_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_00_MainDash.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Calculator_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Calculator.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Galleries_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Galleries.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_IFP_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_IFP_t.jpg', alt: 'Richmond American Homes Touchscreen' }
        ]
      },
      ux3: {
        projNumber: 3,
        projTitle: 'Aux Sable Creek Farms',
        projType: 'Company Website',
        projRole: 'Hired as a freelancer to do photography, website, signage, and logo. I visited the company site, went to high tunnel system installs, and met up at farmer&quot;s markets',
        projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing; Coding in HTML, Sass, jQuery.',
        items: [
          { pathThumb: '/img/auxsable/AuxSable_01_Main_t.jpg', pathLarge: '/img/auxsable/AuxSable_01_Main.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/auxsable/AuxSable_02_Technology_t.jpg', pathLarge: '/img/auxsable/AuxSable_02_Technology.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/auxsable/AuxSable_03_Services_t.jpg', pathLarge: '/img/auxsable/AuxSable_03_Services.jpg', alt: 'Richmond American Homes Touchscreen' },
          { pathThumb: '/img/auxsable/AuxSable_05_Contact_t.jpg', pathLarge: '/img/auxsable/AuxSable_05_Contact.jpg', alt: 'Richmond American Homes Touchscreen' }
        ]
      },
      showModal: false,
      selectedImg: ''
    }
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

.ui-ux {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-image: linear-gradient(to right bottom, rgb(208, 126, 42), rgb(189, 85, 112));
  flex: 2;
  text-align: left;

  #fullpage {
    margin-top: 55px;

  }

  .page-layout {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1410px;
    margin: auto;
    padding: 70px 20px 0;
    &.page-layout-one {
      @include palette($color: $white);
    }
    &.page-layout-two {
      @include palette($color: $orange);
    }
  }

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &-thumb {
      padding: 5px;
    }
  }
}

</style>

<style lang="scss">
.stop-scroll {
  overflow: hidden;
}

.modal-header {
  border: none;
}
</style>
