import {
  BarSeriesOption,
  EChartsOption,
  LineSeriesOption,
  PieSeriesOption,
} from 'echarts';

type PieData = {
  name: string;
  value: number;
  percent: number;
}[];

export const commonSeries: {
  bar: BarSeriesOption;
  line: LineSeriesOption;
  pie: PieSeriesOption;
} = {
  bar: {
    type: 'bar',
    barWidth: 10,
  },
  line: {
    type: 'line',
    smooth: true,
  },
  pie: {
    type: 'pie',
    center: [200, '50%'],
    radius: ['60%', '90%'],
    avoidLabelOverlap: false,
    label: {
      show: false,
    },
  },
};

export const commonPercentY: EChartsOption['yAxis'] = {
  max: 100,
  min: 0,
  interval: 25,
  axisLabel: {
    formatter: '{value}%',
  },
};

export const commonOptions: EChartsOption = {
  legend: {
    show: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
  grid: {
    left: '3%',
    right: '3%',
    top: 40,
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLine: { lineStyle: { color: 'rgba(0,0,0,0.25)' } },
    axisLabel: { color: 'rgba(0,0,0,0.85)' },
  },
  yAxis: {
    type: 'value',
  },
};

export const getCommonPieOptions = (data: PieData): EChartsOption => {
  const total = data.reduce((prev, item) => {
    return prev + item.value;
  }, 0);
  return {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        ...commonSeries.pie,
        label: {
          show: true,
          position: 'center',
          formatter: `${total}`,
          fontSize: 40,
        },
        data,
      },
    ],

    legend: {
      top: 'center',
      right: 20,
      orient: 'vertical',
      formatter: (name) => {
        const {
          name: itemName,
          value,
          percent,
        } = data.find((item) => {
          return item.name === name;
        }) || {};
        let resPercent: any = percent;
        if (!percent) {
          resPercent =
            total > 0 ? (((value || 0) / total) * 100).toFixed(2) : 0;
        }

        const resName =
          itemName!.length > 5 ? `${itemName!.slice(0, 5)}...` : itemName;

        return `{name|${resName}} {percent|${resPercent}%} {value|${value}}`;
      },
      textStyle: {
        rich: {
          name: {
            width: 80,
          },
          percent: {
            width: 80,
          },
        },
      },
    },
  };
};
