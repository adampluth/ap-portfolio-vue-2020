<template>
  <div class="photography">
    <div class="page-width m-auto">
      <b-row no-gutters class="my-auto transparent">
        <b-col cols="12" lg="4" sm="12" class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <div class="d-flex align-items-end h-100">
            <b-img src="../assets/img/portfolio-bio-pic-v3.png" fluid block alt="missing page" class=""></b-img>
          </div>
        </b-col>
        <b-col cols="12" lg="8" sm="12">
          <b-container class="my-auto fluid p-5">
            <h4>
              Bio
            </h4>
            <p>
              Hi, I'm Adam. I'm a versatile Front-End Developer and UI/UX Designer with 15 years of experience driving applications, websites, and creative design projects across cybersecurity, marketing, advertising, and educational fields. I have equal ability to perform autonomously or as a team leader. I have finely honed coding, design, concepting, leadership, project management, technical, and client relations skills.
            </p>
            <h4>
              Core Competencies:
            </h4>
            <div class="row">
              <div class="col-12 col-md-4">
                <ul>
                  <li v-for="(skill, i) in skills.col1" :key="i">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-4">
                <ul>
                  <li v-for="(skill, i) in skills.col2" :key="i">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-4">
                <ul>
                  <li v-for="(skill, i) in skills.col3" :key="i">
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>

            <h4>
              Code Skills:
            </h4>
            <p>
              HTML, CSS, Sass, Bootstrap, jQuery, JavaScript, React, Vue.js, Node.js, Git, Gulp, Grunt, C#, PHP, Regular Expressions
            </p>
            <h4>
              Additional Skills:
            </h4>
            <p>
              Jira, GitHub, npm, Yarn, Visual Studio, Sketch, XD, WordPress, Illustrator, Photoshop
            </p>
            <b-button type="button" class="btn-lg my-3" variant="transparent" href="../assets/downloads/AdamPluth_Resume_Dev_20-0727.docx" download>Download My Resume</b-button>
          </b-container>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: {
        col1: ['Front-End Development', 'UI/UX Design', 'Prototypes & Wireframes', 'Staff Supervision & Mentoring', 'Digital Marketing'],
        col2: ['Application Security', 'Project Management', 'Creative Direction', 'Website Management', 'User Reaserch & Testing'],
        col3: ['Ideation', 'IT Systems Security', 'IT Systems Management', 'Client Relations', '3rd Party Vendor Management']
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';
img {
  align-self: center;
}

.photography {
  display: flex;
  flex: grow;
  width: 100%;
  height: calc(100% - 55px);
  margin-top: 55px;
  padding-top: 30px;
  background-image: linear-gradient(to right bottom, rgb(21, 157, 195), rgb(210, 222, 110));
  flex:2;

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }

  .transparent {
    background-color: rgba(255, 255, 255, 0.2)
  }
}

.page-width {
  max-width: 1500px;
  padding: 30px 50px;
}
</style>
