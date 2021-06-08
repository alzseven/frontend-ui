import React from 'react';

import Widget from '../../../components/Widget';

import s from './Charts.module.scss';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

exporting(Highcharts);
exportData(Highcharts);

class Charts extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <span className="fw-semi-bold">User </span>Page
          <small className={s.small}> 사용자 페이지</small>
        </h1>
        <Widget title={<h4>사용자 페이지</h4>} collapse close></Widget>
      </div>
    );
  }
}

export default Charts;
