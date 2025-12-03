// vue3 에서 사용하는 router 방식입니다.
import { createRouter, createWebHistory } from 'vue-router';
import { BASE_URL, CHART_SAMPLES } from '@/config';

// 지연 로딩 적용
const Home = () => import('@/views/Home.vue');
const Chart = () => import('@/views/Chart.vue');
const NotFound = () => import('@/views/NotFound.vue');

// 차트 라우트 동적 생성
const chartRoutes = CHART_SAMPLES.map(sample => ({
  path: BASE_URL + sample.path,
  name: sample.name,
  component: Chart
}));

// page 로 사용할 파일을 불러와서 경로 지정, name 은 router 에서 사용하는 고유 명사
const Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: BASE_URL, name: 'Home', component: Home },
    ...chartRoutes,
    // 404 라우트
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
});

export default Router;
