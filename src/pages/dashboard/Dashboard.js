import React from 'react';
import { Row } from 'reactstrap';

import s from './Dashboard.module.scss';

import park1 from '../../assets/park/park1.png';
import park2 from '../../assets/park/park2.png';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          주차장의 빈자리를 미리 확인해보세요 &nbsp;
          <small>
            <small>made by Team 9</small>
          </small>
        </h1>
        <Row className={s.webkit}>
          <div
            style={{
              backgroundImage: `url(${park1})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '530%',
              height: '330%',
              float: 'left',
              textAlign: 'center',
            }}
            className={s.sizeup}
          >
            <span className={s.text}>You can use this service in indoor</span>
          </div>
          <div
            style={{
              backgroundImage: `url(${park2})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '530%',
              height: '330%',
              float: 'left',
              textAlign: 'center',
            }}
            className={s.sizeup}
          >
            <span className={s.text}>You can use this service in outdoor</span>
          </div>
        </Row>
        {/* </div> */}
      </div>
    );
  }
}

export default Dashboard;
