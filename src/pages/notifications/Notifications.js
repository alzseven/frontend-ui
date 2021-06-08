import React from 'react';
import Widget from '../../components/Widget';

import s from './Notifications.module.scss';

import main from '../../assets/howToUse/main.jpg';
import list from '../../assets/howToUse/list.jpg';
import vacancy from '../../assets/howToUse/vacancy.jpg';
import popup from '../../assets/howToUse/popup.jpg';
import fav_1 from '../../assets/howToUse/fav_1.jpg';
import fav_2 from '../../assets/howToUse/fav_2.jpg';

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          How to <span className="fw-semi-bold"> use</span> our Service
          <small className={s.small}> 서비스 사용법에 대한 설명입니다.</small>
        </h1>
        <Widget
          title={
            <h4>
              메인 페이지
              <small className="text-muted">
                {' '}
                사이드 바에서 원하는 서비스 선택
              </small>
            </h4>
          }
          collapse
          close
        >
          <img className={s.MapContainer} src={main} alt="..." />
        </Widget>
        <Widget
          title={
            <h4>
              주차장 목록 페이지
              <small className="text-muted">
                {' '}
                주차장 목록/빈 주차공간 갯수/이미지 확인 가능
              </small>
            </h4>
          }
          collapse
          close
        >
          <img className={s.MapContainer} src={list} alt="..." />
          <img className={s.MapContainer2} src={vacancy} alt="..." />
          <img className={s.MapContainer} src={popup} alt="..." />
        </Widget>
        <Widget
          title={
            <h4>
              즐겨찾는 주차장 목록 페이지
              <small className="text-muted"> 즐겨찾는 주차장 확인</small>
            </h4>
          }
          collapse
          close
        >
          <img className={s.MapContainer} src={fav_1} alt="..." />
          <img className={s.MapContainer} src={fav_2} alt="..." />
        </Widget>
      </div>
    );
  }
}

export default Notifications;
