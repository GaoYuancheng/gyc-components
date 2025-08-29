import { Col, Row } from 'antd';
import React from 'react';
import FormCard, { FormCardProps } from '../FormCard';
import './index.less';

export interface StatisticsCardItem {
  label: string;
  icon: string;
  value: number;
  unit?: string;
}

export interface StatisticsCardProps
  extends Omit<FormCardProps, 'childrenRender' | 'request'> {
  request: (
    ...args: Parameters<FormCardProps['request']>
  ) => Promise<StatisticsCardItem[]>;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  formItems = [],
  ...rest
}) => {
  const leftItemRender = (item: StatisticsCardItem) => {
    const { icon, label, value, unit } = item;
    return (
      <div className="item" key={`${label}-${value}-${unit}`}>
        <img src={icon} width={48} height={48} alt="" />
        <div className="itemContent">
          <div className="itemLabel">{label}</div>
          <div className="itemValue">
            {value}
            {unit && <span className="itemUnit">{unit}</span>}
          </div>
        </div>
      </div>
    );
  };

  const rightItemRender = (item: StatisticsCardItem) => {
    const { icon, label, value, unit } = item;
    return (
      <Col span={12} key={`${label}-${value}-${unit}`}>
        <div className="item">
          <img src={icon} width={48} height={48} alt="" />
          <div className="itemContent">
            <div className="itemLabel">{label}</div>
            <div className="itemValue">
              {value}
              {unit && <span className="itemUnit">{unit}</span>}
            </div>
          </div>
        </div>
      </Col>
    );
  };

  const childrenRender = (data: StatisticsCardItem[] = []) => {
    const leftList = data.length === 5 ? data.slice(0, 1) : [];
    const rightList = data.length === 5 ? data.slice(1) : data;

    return (
      <div className="statisticsCard">
        {leftList.length > 0 && (
          <div className="left">{leftList.map(leftItemRender)}</div>
        )}
        <Row gutter={[16, 16]} className="right">
          {rightList.map(rightItemRender)}
        </Row>
      </div>
    );
  };

  return (
    <FormCard {...rest} formItems={formItems} childrenRender={childrenRender} />
  );
};

export default StatisticsCard;
