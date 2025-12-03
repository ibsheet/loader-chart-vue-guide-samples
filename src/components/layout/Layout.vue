<template>

  <q-layout class="bg-grey-1" view="hhh LpR fFf">

    <q-header elevated class="text-white" style="background: #42b983;" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-btn round dense flat :ripple="false" :icon="fasTable" size="sm" color="white" class="q-mr-sm" no-caps @click="changeRouter('/')"/>
          </q-avatar>
          <span style="vertical-align:middle"> IBMap </span>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab v-for='(info, idx) in sampleInfo' :key='idx' :to="info.to" :label="info.title" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <div class="makeStyles-content">
        <div class="makeStyles-header">
          <q-btn round dense flat :ripple="false" :icon="fasTable" size="xl" no-caps style="color:#42b983;" />
          <span class="makeStyles-title">IBChart</span>
          <p class="makeStyles-subTitle">Loader를 사용하여 IBChart를 Vue 환경에서 제공합니다.</p>
          <q-btn icon="fab fa-github-square" color="secondary" label="GitHub" type="a" href='https://github.com/ibsheet/loader-map-vue-guide-samples' target="__blank" style="width:150px; margin:5px;"/>
        </div>
      </div>
      <div class="makeStyles-root-grid">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="bg-white text-dark">
      <!-- Provide Section -->
      <div class="makeStyles-footer">
        <div class="makeStyles-infooter">
          <div class="provide-section">
            <div class="provide-header">
              <q-icon name="menu_book" size="24px" class="q-mr-sm" />
              <span class="provide-title">Provide</span>
            </div>
            <ul class="provide-list">
              <li>
                <span class="spContent1">
                  <a class="MuiTypography" href="https://www.ibsheet.com/" target="_blank">Package</a>
                </span>
                <span class="spContent2">
                  : 해당 프로젝트를 실행하려면 ibchart 라이브러리가 포함된 패키지가 필요합니다.
                </span>
              </li>
              <li>
                <span class="spContent1">
                  <a class="MuiTypography" href="https://github.com/ibsheet/loader" target="_blank">Loader</a>
                </span>
                <span class="spContent2">
                  : SPA 환경에서 IBChart를 사용하기 위한 라이브러리입니다.
                </span>
              </li>
              <li>
                <span class="spContent1">
                  <a class="MuiTypography" href="https://ibsheet.github.io/loader-manual/" target="_blank">IBSheet Loader Manual</a>
                </span>
                <span class="spContent2">
                  : IBSheet-Loader를 사용하기 위한 매뉴얼 안내입니다.
                </span>
              </li>
              <li>
                <span class="spContent1">
                  <a class="MuiTypography" href="https://docs.ibsheet.com/ibchart/v1/manual/#docs/intro/feature" target="_blank">IBChart Manual</a>
                </span>
                <span class="spContent2">
                  : IBChart 의 다양한 기능을 쉽게 사용할 수 있도록 매뉴얼을 제공합니다.
                </span>
              </li>
              <li>
                <span class="spContent1">
                  <a class="MuiTypography" href="https://ibsheet.com/v8/ibchart/html/examples.html" target="_blank">IBChart Sample</a>
                </span>
                <span class="spContent2">
                  : 더 다양한 샘플이 모여있는 IBChart Demo Sample 을 제공한다.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Copyright Section -->
      <div class="copyright-section bg-grey-9 text-white">
        <div class="copyright-content">
          <span>&copy; 2025 IBSheet8 Vue Guide Sample</span>
        </div>
        <div class="copyright-content">
            <span>Copyright &copy; IBChart 2025</span>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
import { fabGithub, fasTable } from '@quasar/extras/fontawesome-v5';
import { computed } from "vue";
import { useStore } from "vuex";
import { getLayoutSamples } from '@/config';

export default {
  name: 'Layout',
  setup () {
    const store = useStore();
    const pageName = computed(() => store.state.Page.name);
    const chartObj = computed(() => store.state.Chart.chart);
    const changePage = (title) => store.commit("CHANGE_SAMPLE", title);
    const removeChart = (chart) => store.commit("REMOVE_SAMPLE", chart);

    const currentYear = new Date().getFullYear();

    return {
      fabGithub,
      fasTable,
      pageName,
      changePage,
      removeChart,
      chartObj,
      currentYear,
    }
  },
  // 라우터 사용
  watch: {
    '$route.name': function (val) {
      // route 경로 변경시 state에 있는 name을 route name로 세팅.
      this.changePage(val);
      if (this.chartObj.length > 0) {
        this.removeChart(this.chartObj);
      }
    }
  },
  methods: {
    changeRouter(name) {
      this.$router.push(`${name}`);
    },
  },
  data() {
    return {
      // 메인 화면에 보여줄 정보들 (중앙 설정에서 가져옴)
      sampleInfo: getLayoutSamples()
    }
  },
  components: {}
}
</script>

<style>
.makeStyles-content {
  padding: 48px 0px 24px;
  font-family: Noto Sans CJK KR,sans-serif;
  border-bottom: 1px solid rgb(229, 229, 229);
  background-color: rgb(247, 247, 247);
}
.makeStyles-header {
  margin: 0px auto;
  max-width: 1140px;
  padding-left: 24px;
  padding-right: 24px;
}
.makeStyles-title {
  color: #000;
  font-size: 40px;
  font-weight: bold;
  vertical-align: middle;
}
.makeStyles-subTitle {
  font-size: 18px;
  margin-top: 14px;
  margin-bottom: 14px;
}
.makeStyles-root-grid {
  max-width: 1200px;
  padding: 64px 24px 64px 24px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.makeStyles-footer {
  padding: 48px;
  background-color: #fff;
}
.makeStyles-infooter {
  margin: 0px auto;
  max-width: 1140px;
}
.provide-section {
  padding: 24px 0;
}
.provide-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 16px;
}
.provide-title {
  color: #333;
  font-size: 40px;
  font-weight: bold;
}
.provide-list {
  margin: 0;
  padding-left: 3rem;
  list-style-type: disc;
}
.provide-list li {
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: #333; 
}
.spContent1 {
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.6;
}
.spContent2 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
}
.provide-list li a:hover {
  text-decoration: underline;
}
.provide-list li strong {
  color: #213547;
  font-weight: bold;
}
.copyright-section {
  padding: 16px 24px;
  text-align: center;
}
.copyright-content {
  font-size: 14px;
}
.MuiTypography {
  margin: 0;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: #213547;
  -webkit-text-decoration: none;
  text-decoration: none;
}
</style>