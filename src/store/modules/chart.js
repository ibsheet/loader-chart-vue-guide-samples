import { CREATE_CHART } from '../mutation-types';
import { REMOVE_SAMPLE } from '../mutation-types';
import { createChartOption as BasicBarChartCreateOptions, chartOptions as  BasicBarChartOptions, chartData as BasicBarChartData } from '../../samples/basic-bar-chart/options'
import { createChartOption as BasicColumnChartCreateOptions, chartOptions as  BasicColumnChartOptions, chartData as BasicColumnChartData } from '@/samples/basic-column-chart/options';
import { createChartOption as GanttChartCreateOptions, chartOptions as  GanttChartOptions, chartData as GanttChartData } from '@/samples/gantt-chart/options';
import { createChartOption as WaterfallChartCreateOptions, chartOptions as  WaterfallChartOptions, chartData as WaterfallChartData } from '@/samples/waterfall-chart/options';
import { createChartOption as BasicLineChartCreateOptions, chartOptions as  BasicLineChartOptions, chartData as BasicLineChartData } from '@/samples/basic-line-chart/options';
import { createChartOption as BasicAreaChartCreateOptions, chartOptions as  BasicAreaChartOptions, chartData as BasicAreaChartData } from '@/samples/basic-area-chart/options';
import { createChartOption as Example1ChartCreateOptions, chartOptions as  Example1ChartOptions, chartData as Example1ChartData } from '@/samples/example1-chart/options';
import { createChartOption as Example2ChartCreateOptions, chartOptions as  Example2ChartOptions, chartData as Example2ChartData } from '@/samples/example2-chart/options';
import { createChartOption as Example3ChartCreateOptions, chartOptions as  Example3ChartOptions, chartData as Example3ChartData } from '@/samples/example3-chart/options';

const chartConfigMap = {
  BasicBarChart: {
    createOptions: BasicBarChartCreateOptions,
    options: BasicBarChartOptions,
    data: BasicBarChartData,
  },
  BasicColumnChart: {
    createOptions: BasicColumnChartCreateOptions,
    options: BasicColumnChartOptions,
    data: BasicColumnChartData,
  },
  GanttChart: {
    createOptions: GanttChartCreateOptions,
    options: GanttChartOptions,
    data: GanttChartData,
  },
  WaterfallChart: {
    createOptions: WaterfallChartCreateOptions,
    options: WaterfallChartOptions,
    data: WaterfallChartData,
  },
  BasicLineChart: {
    createOptions: BasicLineChartCreateOptions,
    options: BasicLineChartOptions,
    data: BasicLineChartData,
  },
  BasicAreaChart: {
    createOptions: BasicAreaChartCreateOptions,
    options: BasicAreaChartOptions,
    data: BasicAreaChartData,
  },
  Example1Chart: {
    createOptions: Example1ChartCreateOptions,
    options: Example1ChartOptions,
    data: Example1ChartData,
  },
  Example2Chart: {
    createOptions: Example2ChartCreateOptions,
    options: Example2ChartOptions,
    data: Example2ChartData,
  },
  Example3Chart: {
    createOptions: Example3ChartCreateOptions,
    options: Example3ChartOptions,
    data: Example3ChartData,
  },
};

import loader from '@ibsheet/loader'

export const Chart = {
  state: () => ({chart:[], data: {}, options:{}, createOptions:{}}),
  mutations: {
    [CREATE_CHART.CREATE_CHART](state, obj) {
      const pageKey = obj.pageName || obj;
      const config = chartConfigMap[pageKey];
      if (config) {
        state.createOptions = config.createOptions;
        state.options = config.options;
        state.data = config.data;
      }
      if (state.createOptions) {
        switch (obj.pageName || obj) {
          case 'Example2Chart' :
            loader.createChart({
              id: state.createOptions.id,
              el: state.createOptions.el,
              options : state.createOptions.options
            }).then(chart => {
              chart.setOptions(state.options);
              chart.loadSearchData(state.data, { append: true, redraw: true });
              state.chart.push(chart);
            });
            break;
          default:
            loader.createChart({
              id: state.createOptions.id,
              el: state.createOptions.el,
              options : state.createOptions.options
            }).then(chart => {
              chart.setOptions(state.options);
              chart.loadSearchData(state.data, { append: true });
              state.chart.push(chart);
            });
            break;
        }
      }
    },
    [REMOVE_SAMPLE.REMOVE_SAMPLE](state, sObj) {
      if (sObj) {
        sObj.forEach(chartObj => {
          loader.removeChart(chartObj.getId());
        });
        state.chart = [];
      }
    }
  },
  getters: {
    chartInfo(state) {
      return state.chart;
    }
  }
};