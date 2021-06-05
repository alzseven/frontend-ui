import React from 'react';
import { Row, Col, Table, Button, Spinner } from 'reactstrap';
import Widget from '../../components/Widget';
import s from './Typography.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../actions/getAPI';
import StationItem from '../stationlists/StationItem';
import Error from '../error/ErrorPage';
class Typography extends React.Component {
  refreshStationList() {
    this.props.APIActions.getStations();
  }

  getCookie(name) {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(name));
    if (cookieValue === undefined) {
      document.cookie = `${name}=${JSON.stringify(new Array())}; path=/;`;
      return [];
    } else {
      return JSON.parse(decodeURIComponent(cookieValue.split('=')[1]));
    }
  }

  componentDidMount() {
    const { APIActions } = this.props;
    APIActions.getStations();
  }

  render() {
    const { stations, error, loading } = this.props;
    const favorites = this.getCookie('favorites');

    if (loading === true) {
      return (
        <div className={s.loading}>
          <Spinner color="light" />
        </div>
      );
    }
    if (error === false && Array.isArray(stations) === true) {
      return (
        <div className={s.root}>
          <h1 className="page-title">
            <span className="fw-semi-bold">Favorites</span> Parking Lot{' '}
            <span className="fw-semi-bold">List</span>
            <small className={s.small}>
              {' '}
              즐겨찾는 주차장 목록을 확인합니다.
            </small>
          </h1>
          <Row>
            <Col>
              <Widget
                title={
                  <h5>
                    제주대학교 내 주차장 목록
                    <span className="fw-semi-bold"></span>
                  </h5>
                }
                bodyClass={s.mainTableWidget}
              >
                <Button
                  outline
                  className={s.button}
                  onClick={this.refreshStationList.bind(this)}
                >
                  Refresh
                </Button>

                <Table striped>
                  <thead>
                    <tr className="fs-sm">
                      <th className="hidden-sm-down">#</th>
                      <th>Picture</th>
                      <th>Name</th>
                      <th className="hidden-sm-down">Location</th>
                      <th className="hidden-sm-down">
                        Number of parking spaces
                      </th>
                      <th className="hidden-sm-down">Favorite</th>
                      <th className="hidden-sm-down">
                        Check the number of vacancy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stations.map((station) =>
                      favorites !== undefined &&
                      favorites.indexOf(station.id) > -1 ? (
                        <StationItem
                          key={station.id}
                          {...station}
                        ></StationItem>
                      ) : (
                        ''
                      ),
                    )}
                  </tbody>
                </Table>
              </Widget>
            </Col>
          </Row>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default // withCookies(
connect(
  (state) => ({
    stations: state.apis.data,
    loading: state.apis.pending,
    error: state.apis.error,
  }),
  (dispatch) => ({
    APIActions: bindActionCreators(apiActions, dispatch),
  }),
)(Typography);
// )
