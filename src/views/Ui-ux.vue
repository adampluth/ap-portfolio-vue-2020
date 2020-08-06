<template>
  <div class="ui-ux">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <!-- ///////// Page 1 ///////// -->
        <Gallery
          v-for="(gallery, i) in galleryPages"
          :key="i"
          :projNumber="gallery.projNumber"
          :projTitle="gallery.projTitle"
          :projType="gallery.projType"
          :projRole="gallery.projRole"
          :projSkills="gallery.projSkills"
          :projItems="gallery.projItems"
          :projModal="gallery.projModal"
          :selectedImg="selectedImg"
        />
      </full-page>
      <!-- <img id="down-arrow" src="/public/img/icons/page-down-arrow.png" alt="down arrow" /> -->
    </div>
  </div>
</template>

<script>
import Gallery from '../components/Gallery'
export default {
  components: {
    Gallery
  },
  data () {
    return {
      options: {
        licenseKey: '419941AF-28764E55-A81F88A1-67CC9945'
      },
      galleryPages: [
        {
          projNumber: 1,
          projTitle: 'Richmond American Homes',
          projType: 'Company Website',
          projRole: 'Shared responsibilities with team and IT Department for redesign, styling, and coding of the company website. Analyzed Hotjar User Experience data for layout improvements.',
          projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing, A/B testing, final product user testing; Coding in HTML, Sass, jQuery, Bootstrap, and C# in Visual Studio.',
          projItems: [
            { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_01_Home_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_01_Home.jpg', alt: 'Richmond American Homes Website' },
            { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_03_CommLanding_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_03_CommLanding.jpg', alt: 'Richmond American Homes Website' },
            { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_05_DesignAHome_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_05_DesignAHome.jpg', alt: 'Richmond American Homes Website' },
            { pathThumb: '/img/rah-web/RAH_WebsiteRefresh_07_CareerCenter_t.jpg', pathLarge: '/img/rah-web/RAH_WebsiteRefresh_07_CareerCenter.jpg', alt: 'Richmond American Homes Website' }
          ],
          projModal: 'modal-1'
        },
        {
          projNumber: 2,
          projTitle: 'Richmond American Homes',
          projType: 'Touchscreen Kiosk',
          projRole: 'Shared responsibilities with team and IT Department for redesign, styling, and coding of the company website. Analyzed Hotjar User Experience data for layout improvements.',
          projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing, A/B testing, final product user testing; Coding in HTML, Sass, jQuery, Bootstrap, and C# in Visual Studio.',
          projItems: [
            { pathThumb: '/img/rah-ts/RAH_TS3_00_MainDash_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_00_MainDash.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Calculator_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Calculator.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Galleries_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_Galleries.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_IFP_t.jpg', pathLarge: '/img/rah-ts/RAH_TS3_05_PlansLandingPage_IFP.jpg', alt: 'Richmond American Homes Touchscreen' }
          ],
          projModal: 'modal-2'
        },
        {
          projNumber: 3,
          projTitle: 'Aux Sable Creek Farms',
          projType: 'Company Website',
          projRole: 'Hired as a freelancer to do photography, website, signage, and logo. I visited the company site, went to high tunnel system installs, and met up at farmer&quot;s markets',
          projSkills: 'User research, wireframing, prototyping, design finalization, interactive prototype user testing; Coding in HTML, Sass, jQuery.',
          projItems: [
            { pathThumb: '/img/auxsable/AuxSable_01_Main_t.jpg', pathLarge: '/img/auxsable/AuxSable_01_Main.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/auxsable/AuxSable_02_Technology_t.jpg', pathLarge: '/img/auxsable/AuxSable_02_Technology.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/auxsable/AuxSable_03_Services_t.jpg', pathLarge: '/img/auxsable/AuxSable_03_Services.jpg', alt: 'Richmond American Homes Touchscreen' },
            { pathThumb: '/img/auxsable/AuxSable_05_Contact_t.jpg', pathLarge: '/img/auxsable/AuxSable_05_Contact.jpg', alt: 'Richmond American Homes Touchscreen' }
          ],
          projModal: 'modal-3'
        }
      ],
      showModal: false,
      selectedImg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>
