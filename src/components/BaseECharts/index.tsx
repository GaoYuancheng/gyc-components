import { useSize, useUpdateEffect } from 'ahooks';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';
import { debounce } from 'lodash';
import React, { useEffect, useRef } from 'react';

interface EventsObj {
  [key: string]: (params: any) => void;
}

export interface BaseEchartProps {
  style?: React.CSSProperties;
  className?: string;
  onChartReady?: (echartsInstance?: ECharts) => void;
  options: EChartsOption;
  onEvents?: EventsObj;
  ref?: React.MutableRefObject<any>;
}

const BaseECharts: React.FC<BaseEchartProps> = ({
  style = {},
  className,
  options,
  onChartReady,
  onEvents,
}) => {
  const echartsElementRef = useRef<any>();
  const echartsInstanceRef = useRef<ECharts | undefined>();

  const { width: sizeWidth, height: sizeHeight } =
    useSize(echartsElementRef) || {};

  const bindEvents = () => {
    if (onEvents && echartsInstanceRef.current) {
      Object.keys(onEvents).forEach((eventName) => {
        echartsInstanceRef?.current?.on(eventName, (params: any) => {
          onEvents[eventName](params);
        });
      });
    }
  };

  const chartResizeRef = useRef(
    debounce(() => {
      const echartsInstance = echartsInstanceRef.current;
      echartsInstance?.resize({
        animation: {
          duration: 200,
        },
      });
    }, 300),
  );

  const init = () => {
    const echartsElement = echartsElementRef.current;

    // 如果有先dispose  不然events 会 绑定多个事件到同一个实例上
    if (echartsInstanceRef.current) {
      echartsInstanceRef.current.dispose();
    }

    const echartsInstance = (echartsInstanceRef.current = echarts.init(
      echartsElement,
      null,
      {
        renderer: 'canvas',
      },
    ));

    echartsInstance.setOption(options);

    if (onChartReady) {
      onChartReady(echartsInstance);
    }
    if (onEvents) {
      bindEvents();
    }
  };

  useEffect(() => {
    // 需要重新绑定 不然取不到最新的数据
    init();
  }, [JSON.stringify(onEvents)]);

  useUpdateEffect(() => {
    const echartsInstance = echartsInstanceRef.current;
    // 先清除再绘制
    echartsInstance?.clear();
    echartsInstance?.setOption(options);
  }, [JSON.stringify(options)]);

  // 宽高变化时resize
  useUpdateEffect(() => {
    chartResizeRef.current();
  }, [sizeWidth, sizeHeight]);

  return (
    <div
      ref={echartsElementRef}
      style={{
        height: 300,
        width: '100%',
        ...style,
      }}
      className={className}
    />
  );
};

export default BaseECharts;
