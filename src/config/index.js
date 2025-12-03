// 중앙 집중화된 설정 파일

// 환경에 따른 BASE_URL
export const BASE_URL = process.env.NODE_ENV === 'production' ? '/v8/demo/vue/' : '/';

// 차트 샘플 이미지 import
import basicBarChart from '/assets/img/basicBarChart.png';
import basicColumnChart from '/assets/img/basicColumnChart.png';
import ganttChart from '/assets/img/ganttChart.png';
import waterfallChart from '/assets/img/waterfallChart.png';
import basicLineChart from '/assets/img/basicLineChart.png';
import basicAreaChart from '/assets/img/basicAreaChart.png';
import example1Chart from '/assets/img/example1Chart.png';
import example2Chart from '/assets/img/example2Chart.png';
import example3Chart from '/assets/img/example3Chart.png';

// 차트 샘플 정보 (단일 소스)
export const CHART_SAMPLES = [
  {
    path: 'basic-bar-chart',
    name: 'BasicBarChart',
    label: '바 차트',
    img: basicBarChart
  },
  {
    path: 'basic-column-chart',
    name: 'BasicColumnChart',
    label: '막대 차트',
    img: basicColumnChart
  },
  {
    path: 'gantt-chart',
    name: 'GanttChart',
    label: '간트 차트',
    img: ganttChart
  },
  {
    path: 'waterfall-chart',
    name: 'WaterfallChart',
    label: '폭포 차트',
    img: waterfallChart
  },
  {
    path: 'basic-line-chart',
    name: 'BasicLineChart',
    label: '꺾은선 차트',
    img: basicLineChart
  },
  {
    path: 'basic-area-chart',
    name: 'BasicAreaChart',
    label: '영역 차트',
    img: basicAreaChart
  },
  {
    path: 'example1-chart',
    name: 'Example1Chart',
    label: '응용 예제1 (선거투표율)',
    img: example1Chart
  },
  {
    path: 'example2-chart',
    name: 'Example2Chart',
    label: '응용 예제2 (실시간 순위)',
    img: example2Chart
  },
  {
    path: 'example3-chart',
    name: 'Example3Chart',
    label: '응용 예제3 (풍속)',
    img: example3Chart
  }
];

// 라우터용 샘플 정보 생성 헬퍼
export const getRouterSamples = () =>
  CHART_SAMPLES.map(sample => ({
    path: BASE_URL + sample.path,
    name: sample.name
  }));

// 레이아웃 탭용 샘플 정보 생성 헬퍼
export const getLayoutSamples = () =>
  CHART_SAMPLES.map(sample => ({
    to: BASE_URL + sample.path,
    title: sample.label
  }));

// 홈 카드용 샘플 정보 생성 헬퍼
export const getHomeSamples = () =>
  CHART_SAMPLES.map(sample => ({
    to: BASE_URL + sample.path,
    title: sample.name,
    img: sample.img,
    label: sample.label
  }));
