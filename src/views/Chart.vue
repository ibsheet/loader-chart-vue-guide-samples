<template>
  <div>
    <div class="text-h6 text-weight-bold">{{sampleDesc[pageName]["title"]}}</div>
    <div class="text-subtitle2" v-html="sampleDesc[pageName]?.desc"></div>
    <div class="row no-wrap">
      <div id='chartDiv'></div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const pageName = computed(() => store.state.Page.name);
    const chartObj = computed(() => store.state.Chart.chart);
    const createChart = (state, sampleData) => store.commit('CREATE_CHART', state, sampleData);
    const removeChart = (id) => store.commit("REMOVE_SAMPLE", id);

    return {
      pageName, chartObj, createChart, removeChart
    };
  },
  mounted() {
    this.createChart({pageName: this.pageName});
  },
  watch: {
    '$route.name': function (val, old) {
      if (val !== old && val !== "Home") {
        this.createChart({pageName: val});
      }
    }
  },
  data () {
    return{
      sampleDesc: {
        BasicBarChart : {
          title: '바 차트', 
          desc: `bar 차트 예제입니다.<br>
            dataLabels의 <b>enabled</b> 속성을 <b>true</b> 로 설정하면 차트에 데이타값이 표시됩니다.<br>
            legend의 <b>enabled</b> 속성을 <b>false</b> 로 설정하여 범례를 표시하지 않을 수 있습니다.(default : true)`
        },
        BasicColumnChart : {
          title: '막대 차트', 
          desc: `column 차트 예제입니다.<br>
            dataLabels 의 <b>enabeld</b> 속성을 <b>true</b> 로 설정하여 레이블을 표시할 수 있습니다.<br>
            dataLabels 이 Plot 영역을 벗어나는 경우, 기본적으로 해당 레이블은 표시되지 않으나, <b>overflow</b> 속성을 <b>allow</b> 로 설정하고 <b>crop</b> 속성을 <b>false</b> 로 설정하여 레이블을 표시할 수 있습니다.<br>
            legend의 <b>enabled</b> 속성을 <b>false</b> 로 설정하여 범례를 표시하지 않을 수 있습니다.(default : true)`
        },
        GanttChart : {
          title: '간트 차트', 
          desc: `간트 차트 형태로 막대차트를 표시한 예제입니다.<br>
            <b>inverted</b> 속성을 <b>true</b>로 설정할 경우 X축과 Y축이 반전됩니다.<br>
            <b>highcharts-more.js</b> 파일이 필요합니다.`
        },
        WaterfallChart : {
          title: '폭포 차트', 
          desc: `조회데이터를 쌓아 올리면서 값에 따라 위/아래 방향에 표시할 수 있습니다.<br>
            series 의 <b>upColor</b> 와 <b>color</b> 를 설정하면, 증가/감소에 대한 색상을 설정할 수 있습니다.<br>
            <b>highcharts-more.js</b> 파일이 필요합니다.`
        },
        BasicLineChart : {
          title: '꺾은선 차트', 
          desc: `line 차트 예제입니다.<br>
            <b>series-label.js</b> 추가하면 각 시리즈명이 차트에 표시됩니다. (line, area 차트만 표시가능)`
        },
        BasicAreaChart : {
          title: '영역 차트', 
          desc: `area 차트 예제입니다.<br>
            <b>series-labels.js</b> 포함된 경우, <b>series.label.enabled</b> 속성을 이용하여 시리즈명을 표시하지 않을 수 있습니다.`
        },
        Example1Chart : {
          title: '응용 예제1 (선거투표율)', 
          desc: `<b>column</b> 차트로 대선 투표율을 시각화한 예제입니다.<br>
            series 는 하나의 색상을 갖지만, series 에 <b>colorByPoint</b> 설정하여 <b>point</b> 별로 다른 색상을 표시할 수 있습니다.<br>
            x측 레이블은 xAxis의 categories 로 설정하지 않고, 조회 데이타와 연동하도록 <b>xAxis</b>의 <b>type:category</b> 를 설정 하였습니다.<br>
            dataLabels의 <b>inside</b> 속성으로 <b>true</b> 로 설정하여 막대 안쪽에 데이타값이 표시됩니다.`
        },
        Example2Chart : {
          title: '응용 예제2 (실시간 순위)', 
          desc: `실시간으로 순위 변동을 <b>spline</b> 차트로 시각화한 예제입니다.<br>
            yAxis의 하위 속성인 <b>reversed</b> 를 <b>true</b>로 설정하면 축을 역순으로 표시할 수 있습니다.<br>
            tooltip의 하위 속성인 <b>headerFormat,pointFormat,useHTML</b>을 이용해 툴팁을 커스터마이징 할 수 있습니다.<br>
            <b>setOptions</b>를 이용한 방법 외에도 <b>addSeries</b>이나 <b>addPoint</b>를 이용해 동적으로 차트를 그릴 수 있습니다. 사용자가 직접 사용가능한 형식으로 변경하는 방법을 확인하기 위해서는 jsFiddle 버튼을 눌러야합니다.<br>
            ※ 사용된 데이터는 멜론의 실시간 차트의 순위 정보와 앨범 썸네일입니다.`
        },
        Example3Chart : {
          title:'응용 예제3 (풍속)', 
          desc:`풍속과 풍속의 따른 명칭을 <b>spline</b> 차트로 시각화한 예제입니다.<br>
            yAxis의 하위 속성인 <b>min</b>으로 최솟값을 지정할 수 있고 <b>minorGridLine,Width,gridLineWidth,alternateGridColor</b> 등으로 y축의 스타일을 변경할 수 있습니다. <br>
            또, <b>plotBands</b>을 이용하여 구간별 하이라이트를 지정할 수 있습니다. <br>
            tooltip의 하위 속성인 <b>valueSuffix</b>를 이용하면 <b>{point.y}</b> 또는 <b>{point.value}</b>의 값 뒤에 문자열을 붙일 수 있습니다. <br>
            plotOptions의 하위 속성(<b>lineWidth, states, marker, pointInterval, pointStart</b>)을 이용해 선의 굵기, 마커 비활성화, categories 설정할 수 있습니다. <br>
            xAxis의 type을 <b>'datetime'</b>으로 설정하고 <b>pointStart</b>를 Date.UTC(YYYY, M, D, h, m, s)로 <b>pointInterval</b>를 3600000으로 설정하면 자동으로 YYYY년 M월 D일 h:m:s부터 1시간마다 자동으로 날짜를 할당할 수 있습니다.<br>
            ※ 예제에 사용된 대한민국 도시 데이터는 기상청 - 날씨누리 지역별상세관측자료 를 참고했습니다.`
        },
      }
    }
  }

}

</script>

<style>
body {
  margin : 0
}

div {
  box-sizing: border-box;
}
</style>