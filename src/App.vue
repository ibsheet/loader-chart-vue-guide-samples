<template>
  <Layout />
</template>

<script>
import Layout from '@/components/layout/Layout.vue';
import loader from '@ibsheet/loader';

// Highcharts 모듈 import
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SeriesLabel from 'highcharts/modules/series-label';

// Highcharts 모듈 초기화 헬퍼
const initModule = (module, hc) => {
  const fn = typeof module === 'function' ? module : module?.default;
  if (fn) fn(hc);
};

// Highcharts 모듈 초기화
initModule(HighchartsMore, Highcharts);
initModule(SeriesLabel, Highcharts);

// Highcharts를 전역으로 등록 (IBChart에서 사용)
if (typeof window !== 'undefined') {
  window.Highcharts = Highcharts;
}

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

export default {
  name: 'App',
  components: {
    Layout
  },
  mounted() {
    loader.config({
      registry: [ibchartLib]
    });
  },
}
</script>
<style>
</style>
